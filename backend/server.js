const express = require('express');
const app = express();
const mysql = require('mysql2');

// Database connection settings
const dbConfig = {
  host: 'mydatabase.database.windows.net',
  database: 'mydatabase',
  user: 'your_username',
  password: 'your_password'
};

// Create database connection pool
const dbPool = mysql.createPool(dbConfig);

// Define routes
app.get('/users', (req, res) => {
  // Retrieve users from database using query
  const query = 'SELECT * FROM users';
  dbPool.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});