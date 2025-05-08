const mysql = require('mysql2');
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

// Connect and handle errors
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;