// api/books/[sno]/reviews.js

import {nquery} from '../../../../utils/db'; // Assuming you have a database connection module

export default async function handler(req, res) {
  const { sno } = req.query;
    console.log('11111');
  try {
    const reviews = await nquery('SELECT r.review_id, r.review, r.rating_star, u.name FROM reviews r JOIN users u ON r.user_id = u.user_id WHERE r.book_id = $1', [sno]);
    if (reviews.rows.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this book' });
    }
    res.status(200).json(reviews.rows);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
