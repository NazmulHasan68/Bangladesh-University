import express from "express";
import { studentRegister } from "../Controllers/demoControler.js";
const router = express.Router();

router.route('/register').get(studentRegister)


export default router 