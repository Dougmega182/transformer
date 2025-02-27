const { Pool } = require('pg');

// Set up database credentials and connection options
const dbConfig = {
  user: 'your_database_username',
  host: 'your_host_or_ip_address',
  database: 'your_database_name',
  password: 'your_database_password',
};

// Create a new pool for the database connections
const pool = new Pool(dbConfig);

module.exports = pool;