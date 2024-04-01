import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookCardSearch = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(null); // State to track sorting order
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/books?page=${page}&limit=26`);
      const data = await response.json();
      setBooks(data);
      setHasMore(data.length > 0);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    // Filter books based on search query when searchQuery changes
    const filtered = books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const genreMatch = book.genre.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || authorMatch || genreMatch;
    });
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  useEffect(() => {
    // Sort filtered books based on sortBy when sortBy changes
    if (sortBy === 'inc') {
      const sorted = [...filteredBooks].sort((a, b) => a.rating - b.rating);
      setFilteredBooks(sorted);
    } else if (sortBy === 'dec') {
      const sorted = [...filteredBooks].sort((a, b) => b.rating - a.rating);
      setFilteredBooks(sorted);
    }
  }, [sortBy, filteredBooks]);

  const handleBookClick = (bookId) => {
    router.push(`/books/${bookId}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortInc = () => {
    setSortBy('inc');
  };

  const handleSortDec = () => {
    setSortBy('dec');
  };

  const handleReset = () => {
    setSortBy(null);
  };

  return (
    <div className='my-5'>
      <div className='flex gap-x-5'>
        <input
          placeholder='Search by title, author, or genre'
          className='border-2 pl-3 rounded-md ml-24 mb-4 w-1/2 border-black'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className='border-2 border-black px-1 rounded-lg' onClick={handleSortInc}>
          Sort Inc ⭐
        </button>
        <button className='border-2 border-black px-1 rounded-lg' onClick={handleSortDec}>
          Sort Dec ⭐
        </button>
        {/* <button className='border-2 border-black px-1 rounded-lg'>
          Reset
        </button> */}
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-5 overflow-y-auto h-[80vh]">
        {filteredBooks.map((book) => (
          <div key={book.book_id} className="w-1/5 mb-3 cursor-pointer" onClick={() => handleBookClick(book.book_id)}>
            <div className="flex flex-col   bg-slate-50 rounded-tl-xl rounded-tr-xl shadow-lg border-gray-200 border px-5 pt-2">
              <div className="flex flex-col mb-4 justify-center">
              <div>
                <img src={book.image} alt={book.title} className="h-36 rounded-md w-full object-fit mb-1" />
              </div>
                <div className="text-md font-[500]">{book.title}</div>
                <div className="p-1  rounded-3xl text-right text-sm">By - {book.author}</div>
                <div className='flex justify-between'>
                    <div className='font-[500]'>{book.genre}</div>
                    <div className=' flex'><p className='text-yellow-600 font-[700] pr-1'>{book.rating} </p>⭐</div>
                </div>
              </div>
            </div>
            {/* <button className='w-full bg-blue-400 rounded-br-xl text-white rounded-bl-xl'>ADD TO FAV</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCardSearch;
