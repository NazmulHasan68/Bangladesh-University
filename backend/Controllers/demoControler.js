import mongoose from "mongoose";
import express from "express";

export const studentRegister = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Student registered successfully!" });  
    } catch (error) {
        res.status(500).json({
            message: "Error caught in studentRegister",
            error: error.message, 
        });
    }
};
