import db from '../../../utils/db';

export default async function handler(req, res) {
  const { page = 1, limit = 8 } = req.query;
  const offset = (page - 1) * limit;
  try {
    const books = await db.query('SELECT * FROM books ORDER BY book_id LIMIT $1 OFFSET $2', [limit, offset]);
    res.status(200).json(books.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
