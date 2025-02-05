import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ConnectDB } from "./Config/database.js";
import { errorMiddleware } from "./Untils/errorHandler.js";

import studentRoutes from "./Routes/student.routes.js"; 

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(errorMiddleware);

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// API Routes
app.use('/api/v1/student', studentRoutes);

app.listen(5000, async () => {
  await ConnectDB();
  console.log("Server is running on port 5000");
});
