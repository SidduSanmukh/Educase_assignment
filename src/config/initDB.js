const mysql = require("mysql2/promise");
require("dotenv").config();

async function initDB() {
  try {
    // Connect with DB server
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    console.log("Connected to MySQL server");

    // Create Database
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    );
    console.log("Database created or already exists");

    // Use Database
    await connection.query(`USE ${process.env.DB_NAME}`);

    // Create Table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      )
    `);

    console.log("Table 'schools' created");
    await connection.end();
  } catch (error) {
    console.error("DB Initialization Error:", error.message);
  }
}

module.exports = initDB;
