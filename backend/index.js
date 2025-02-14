import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ConnectDB } from "./Config/database.js";
import { errorMiddleware } from "./Untils/errorHandler.js";
import studentRoutes from "./Routes/student.routes.js";
import teacherRoutes from "./Routes/teacher.routes.js";
import path from "path";

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: ["https://bangladesh-university-xi.vercel.app", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/teacher", teacherRoutes);

// Serving the frontend (Make sure to build the frontend first)
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Custom error handler middleware
app.use(errorMiddleware);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await ConnectDB();
  console.log(`Server is running on port ${PORT}`);
});
