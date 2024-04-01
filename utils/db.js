// utils/db.js

const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT, // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
