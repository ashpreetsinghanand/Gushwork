// pages/api/users/[email].js

import { query } from '../../../utils/db';

export default async function handler(req, res) {
  const { gmail } = req.query;
  try {
    const results = await query(
      `
      SELECT user_id FROM users WHERE gmail = ?
      `,
      [gmail]
    );
    if (results.length > 0) {
      res.status(200).json({ user_id: results[0].user_id });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
