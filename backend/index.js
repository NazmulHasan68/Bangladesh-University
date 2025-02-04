import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Config/database.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    ConnectDB()
    console.log("Server is running ");
});
