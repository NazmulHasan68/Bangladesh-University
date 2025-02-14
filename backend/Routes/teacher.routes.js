import express from "express";
import upload from "../Untils/upload.js";
import { EditTeacherData, getSingleTeacher, getTeachersData, teacherRegister } from "../Controllers/teacher.controllers/teacherRegisterController.js";

const router = express.Router();

router.post('/register', upload.single('file'), teacherRegister);
router.get('/teachers',getTeachersData );
router.get('/teacher/:teacherid',getSingleTeacher );
router.put('/:teacherid',upload.single('file'), EditTeacherData );

export default router;