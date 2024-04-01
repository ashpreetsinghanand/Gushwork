// utils/db.js

import { Pool } from 'pg';

// Create a new pool instance
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT, // Default PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // For development purposes only. In production, use a valid SSL certificate.
  },
});

// Function to execute SQL queries
const query = (text, params) => pool.query(text, params);

// Function to execute SQL queries with a different name (nquery)
const nquery = (text, params) => pool.query(text, params);

module.exports = {
  query,
  nquery,
};
