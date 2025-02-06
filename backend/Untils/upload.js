import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from 'dotenv'

dotenv.config();

// Cloudinary configuration
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Set up Multer storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params : {
        folder : "BangladeshUniversity",
        allowed_formats : [ "jpg", "jpeg", "png", "gif"]
    }
})

const upload = multer({ storage });

export default upload;

// upload.single("image")