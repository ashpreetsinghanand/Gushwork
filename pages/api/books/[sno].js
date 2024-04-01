// pages/api/books/[sno].js

// Import necessary libraries
import db from '../../../utils/db'; // Import your database connection
import { query } from '../../../utils/db'; // Import your database query function

// API route handler
export default async function handler(req, res) {
  const { sno } = req.query; // Get the book ID from the query parameters
  //  console.log("123")
  try {
    // Fetch book details from the database based on the book ID
    const bookDetails = await query('SELECT * FROM books WHERE book_id = $1', [sno]);
    // Check if book details are found
    if (bookDetails.length === 0) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    // If book details are found, return them as JSON response
   // console.log(bookDetails.rows)
    res.status(200).json(bookDetails.rows);
  //  console.log("234")
  } catch (error) {
    // If an error occurs, return an error response
    console.error('Error fetching book details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
