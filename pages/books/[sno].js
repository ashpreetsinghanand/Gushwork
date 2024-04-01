import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import withAuth from '../../gaurds/withAuth';

function Book() {
  const router = useRouter();
  const { sno } = router.query;
  const [bookDetails, setBookDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${sno}`);
       
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBookDetails(data[0]);
        console.log(data[0],"123")
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
        console.log(data, "Reviews");
      } catch (error) {
        console.error(error);
      }
    };

    if (sno) {
      fetchBookDetails();
      fetchReviews();
    }
  }, [sno]);

  return (
    <DashboardLayout  headerText={sno}>
      <div className='mx-20 '>
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
           <button>Add Rating</button>
           <button>Give review</button>
            </div>
          </div>
            <p className='text-3xl my-5'>Description
             </p>
            <p className='text-xl pr-5'>
            {bookDetails.description}
            </p> 
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
