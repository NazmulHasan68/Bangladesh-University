import express from "express";
import { getStudentById, getStudentData, studentRegister, updateStudentAddress, updateStudentById } from "../Controllers/student.controllers/studentRegisterController.js";
import upload from "../Untils/upload.js";
const router = express.Router();

router.route('/register').post(upload.single("file"),studentRegister)
router.route('/students').get(getStudentData)
router.route('/students/:studentid').get(getStudentById)
router.route('/students/:studentid').put(upload.single("studentprofile"), updateStudentById);
router.route('/students/address/:studentid').put(updateStudentAddress)


export default router 