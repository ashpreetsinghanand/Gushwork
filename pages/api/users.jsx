// pages/api/users.js

import db from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request to check if user exists
    try {
      const { gmail } = req.query;
      const result = await db.query('SELECT * FROM users WHERE gmail = $1', [gmail]);
      const user = result.rows[0];
      if (user) {
        // User exists
        res.status(200).json({ exists: true });
      } else {
        // User doesn't exist
        res.status(404).json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request to insert new user
    try {
      const { gmail, name } = req.body;
      console.log(gmail,"abca")
      // Insert the new user into the database
      const result = await db.query('INSERT INTO users (gmail, name) VALUES ($1, $2) RETURNING *', [gmail, name]);
      const newUser = result.rows[0];
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
