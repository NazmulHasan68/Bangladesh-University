import express from "express";
import { studentRegister } from "../Controllers/student.controllers/studentRegisterController.js";
const router = express.Router();

router.route('/register').post(studentRegister)


export default router 