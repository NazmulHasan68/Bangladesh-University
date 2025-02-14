import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ConnectDB } from "./Config/database.js";
import { errorMiddleware } from "./Untils/errorHandler.js";
import studentRoutes from "./Routes/student.routes.js";
import teacherRoutes from "./Routes/teacher.routes.js";

dotenv.config();
const app = express();


// Middleware
app.use(express.json());  // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(cookieParser());  // Middleware to handle cookies
app.use(errorMiddleware);  // Custom error handler middleware

// CORS configuration
const corsOptions = {
  origin: ["https://bangladesh-university-xi.vercel.app", "http://localhost:5173"],  // Allow multiple origins
  credentials: true,  // Allow credentials (cookies, etc.) to be sent
};
app.use(cors(corsOptions));  // Apply CORS with the configuration

app.use(cors(corsOptions));  // Apply CORS first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorMiddleware);

// API Routes
app.use('/api/v1/student', studentRoutes);  
app.use('/api/v1/teacher', teacherRoutes);  

// Server listening on port 5000
app.listen(5000, async () => {
  await ConnectDB();  // Connect to the database
  console.log("Server is running on port 5000");
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
