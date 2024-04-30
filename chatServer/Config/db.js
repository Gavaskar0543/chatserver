const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host:process.env.Host ,
    user: process.env.User,
    password: process.env.Password,
    database:process.env.Database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  // Log a message when the pool is created
  console.log('Database pool created successfully!');
  
  // Handle pool creation errors
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error creating database pool:', err.message);
    } else {
      console.log('Connected to the database!');
      connection.release(); // Release the connection back to the pool
    }
  });

  // Export the 'pool' object
module.exports = pool;