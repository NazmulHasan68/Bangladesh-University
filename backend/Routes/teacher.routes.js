import express from "express";
import upload from "../Untils/upload.js";
import { getTeachersData, teacherRegister } from "../Controllers/teacher.controllers/teacherRegisterController.js";

const router = express.Router();

router.post('/register', upload.single('file'), teacherRegister);
router.get('/teachers',getTeachersData )

export default router;