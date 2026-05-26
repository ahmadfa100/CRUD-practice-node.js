import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorHandling from "./middlewares/errorHandling.js"
import createUserTable from "./data/userTable.js"
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(cors())

// Routes

app.use("/api", authRoutes)
app.use("/api", userRoutes)


// Error handling middleware

app.use(errorHandling)

// Create table before starting the server
createUserTable()
// Test Postgrest connection:
app.get("/test-db-connection", async(req, res)=>{
    const result = await pool.query("SELECT current_database()")
    res.send("The Database name is: " + result.rows[0].current_database);
});

// Server running
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
