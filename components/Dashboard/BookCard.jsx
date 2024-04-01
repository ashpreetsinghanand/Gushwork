import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/books?page=${page}`);
      const data = await response.json();
      setBooks(data);
      setHasMore(data.length > 0);
    };
    fetchData();
  }, [page]);

  const handleBookClick = (bookId) => {
    router.push(`/books/${bookId}`);
  };
  return (
    <div>


    <div className="flex flex-wrap justify-center gap-5">
      {books.map((book) => (
        <div key={book.book_id} className="w-1/5"  onClick={() => handleBookClick(book.book_id)}>
          <div className="flex flex-col bg-slate-50 rounded-tl-xl rounded-tr-xl shadow-lg  border-gray-200 border px-5 py-2 ">
            <div>
              <img src={book.image} alt={book.title} className="h-32 w-full object-fit mb-1" />
            </div>
            <div className="flex-col justify-between">
              <div className="text-md font-[500]">{book.title}</div>
              <div className=" p-2 rounded-3xl text-right text-sm">By - {book.author}</div>
            </div>
          </div>
          <button className='w-full bg-blue-400 rounded-br-xl text-white rounded-bl-xl'>FAV</button>
        </div>
      ))}
    </div>

      <div className="flex justify-center mt-5">
        <button disabled={page === 1} onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} className="mr-2 bg-blue-400 px-3 py-1 text-white rounded">Previous</button>
        <span>Page {page}</span>
        
          <button disabled={!hasMore} onClick={() => setPage((prevPage) => prevPage + 1)} className="bg-blue-400 px-3 py-1 text-white rounded">Next</button>
    
      </div>
    </div>

  );
};

export default BookCard;
