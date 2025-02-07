import express from "express";
import { studentRegister } from "../Controllers/student.controllers/studentRegisterController.js";
import upload from "../Untils/upload.js";
const router = express.Router();

router.route('/register').post(upload.single("file"),studentRegister)


export default router 