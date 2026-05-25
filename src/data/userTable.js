import pool from "../config/db.js";

const createUserTable = async () => {   
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    try {
        await pool.query(queryText);
        console.log("User table created successfully");
    } catch (error) {
        console.error("Error creating user table:", error);
    }
};

export default createUserTable;