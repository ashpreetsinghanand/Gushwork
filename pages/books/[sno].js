import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import withAuth from '../../gaurds/withAuth';

function Book() {
  const router = useRouter();
  const { sno } = router.query;
  const [bookDetails, setBookDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${sno}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBookDetails(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/books/${sno}/reviews`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (sno) {
      fetchBookDetails();
      fetchReviews();
    }
  }, [sno]);

  const userId = localStorage.getItem('userId');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/books/${sno}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book_id:sno,
          user_id:userId,
          rating_star: rating,
          review: reviewText,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
      // Refresh reviews after successful submission
      const updatedReviews = await response.json();
      setReviews(updatedReviews);
      // Clear rating and review text fields
      setRating('');
      setReviewText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout headerText={sno}>
      <div className='m-10 '>
        {bookDetails ? (
          <div className='flex-col gap-y-5'>
            <div className='flex gap-x-5 '>
              <div className=''>
                <img className='h-48' src={bookDetails.image} alt={bookDetails.title} />
              </div>
              <div className='flex-col gap-y-5'>
                <div className='flex  gap-x-3'>
                  <h2 className='text-xl font-[500]'>Title </h2>
                  <p className='text-md pr-5'>{bookDetails.title} </p>
                </div>
                <div className='flex gap-x-3'>
                  <h2 className='text-xl font-[500]'>Author </h2>
                  <p className='text-md pr-5'>{bookDetails.author} </p>
                </div>
                <div className='flex gap-x-3'>
                  <h2 className='text-xl font-[500]'>Rating </h2>
                  <p className='text-md pr-5'>{bookDetails.rating} </p>
                </div>
                <div className='flex gap-x-3'>
                  <h2 className='text-xl font-[500]'>Genre </h2>
                  <p className='text-md pr-5'>{bookDetails.genre} </p>
                </div>
              </div>
              <div class='bg-white shadow-md rounded-xl p-6'>
                <div class='mb-4'>
                  <label class='block text-gray-700 font-bold mb-2' htmlFor='rating'>
                    Enter Rating
                  </label>
                  <input
                    placeholder='1-10'
                    class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='rating'
                    type='number'
                    min='1'
                    max='10'
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </div>
                <div class='mb-6'>
                  <label class='block text-gray-700 font-bold mb-2' htmlFor='review'>
                    Review
                  </label>
                  <input
                    placeholder='lovely'
                    class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='review'
                    type='text'
                    value={reviewText}
                    onChange={handleReviewTextChange}
                  />
                </div>
                <div class='flex items-center justify-center'>
                  <button
                    onClick={handleSubmit}
                    class='bg-[#785cfa] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <p className='text-3xl my-5'>Description</p>
            <p className='text-xl pr-5'>{bookDetails.description}</p>
            <div>
              <h2 className='text-3xl mt-8'>Review Section</h2>
              <table className='border-collapse w-full mt-4'>
                <thead>
                  <tr>
                    <th className='border border-gray-400 px-4 py-2'>User</th>
                    <th className='border border-gray-400 px-4 py-2'>Rating</th>
                    <th className='border border-gray-400 px-4 py-2'>Review</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td className='border text-center border-gray-400 px-4 py-2'>{review.name}</td>
                      <td className='border text-center border-gray-400 px-4 py-2'>{review.rating_star}</td>
                      <td className='border text-center border-gray-400 px-4 py-2'>{review.review}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Book);
