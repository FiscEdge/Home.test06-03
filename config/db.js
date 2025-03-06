// Database configuration for Amazon RDS PostgreSQL
const { Pool } = require('pg');

// These values should be stored in environment variables in production
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false // Required for RDS SSL connections
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
