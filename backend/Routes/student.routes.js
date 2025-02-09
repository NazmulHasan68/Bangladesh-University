import express from "express";
import { getStudentById, getStudentData, studentRegister, updateStudentById } from "../Controllers/student.controllers/studentRegisterController.js";
import upload from "../Untils/upload.js";
const router = express.Router();

router.route('/register').post(upload.single("file"),studentRegister)
router.route('/students').get(getStudentData)
router.route('/students/:studentid').get(getStudentById)
router.route('/students/:studentid').put(upload.single("studentprofile"), updateStudentById);


export default router 