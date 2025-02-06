import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ConnectDB } from "./Config/database.js"; // Ensure your ConnectDB function is properly set
import { errorMiddleware } from "./Untils/errorHandler.js"; // Ensure this is implemented
import studentRoutes from "./Routes/student.routes.js"; // Ensure the routes are correctly set

dotenv.config();
const app = express();

// Middleware
app.use(express.json());  // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(cookieParser());  // Middleware to handle cookies
app.use(errorMiddleware);  // Custom error handler middleware

// CORS configuration
const corsOption = {
  origin: "http://localhost:5173", 
  credentials: true, 
};
app.use(cors());
app.use(cors(corsOption)); 

// API Routes
app.use('/api/v1/student', studentRoutes);  

// Server listening on port 5000
app.listen(5000, async () => {
  await ConnectDB();  // Connect to the database
  console.log("Server is running on port 5000");
});
