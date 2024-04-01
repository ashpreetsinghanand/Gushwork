// pages/books/[book_id].js

import { useRouter } from 'next/router';

export default function Book() {
  const router = useRouter();
  const { sno } = router.query;

 

  return (
    <div>
      <p>post: {sno}</p>
    </div>
  );
}
