import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// TODO: when we need prod and other .env files, can make env a variable
dotenv.config({ path: ['.env.local', '.env'] }); // Load environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0
});

export default pool;