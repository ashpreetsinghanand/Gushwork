import db from '../../../../utils/db';

export default async function handler(req, res) {
  const { slug } = req.query;
  
  switch (req.method) {
    case 'POST':
      try {
        const { gmail, name } = req.body;

        // Insert the new user into the database
        const result = await db.query('INSERT INTO users (gmail, name) VALUES ($1, $2) RETURNING *', [gmail, name]);
        const newUser = result.rows[0];

        res.status(201).json(newUser);
      } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;

    case 'PUT':
      try {
        const { gmail } = slug;
        const { name } = req.body;

        // Update the user's name in the database
        const result = await db.query('UPDATE users SET name = $1 WHERE gmail = $2 RETURNING *', [name, gmail]);
        const updatedUser = result.rows[0];

        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
      } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Innternal server error' });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
  }
}
