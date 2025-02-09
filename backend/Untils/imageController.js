import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper function to delete an image from Cloudinary
export const deleteImageFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result; // Return result for logging or debugging if needed
    } catch (error) {
        throw new Error(`Error deleting image from Cloudinary: ${error.message}`);
    }
};

// Helper function to upload a new image to Cloudinary
export const uploadImageToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return result.secure_url; // Return the secure URL of the uploaded image
    } catch (error) {
        throw new Error(`Error uploading image to Cloudinary: ${error.message}`);
    }
};

// Function to handle image update: Delete the old image and upload the new one
export const updateImage = async (existingImageUrl, filePath) => {
    if (existingImageUrl) {
        const publicId = existingImageUrl.split('/').pop().split('.')[0];
        await deleteImageFromCloudinary(publicId);
    }
    const newImageUrl = await uploadImageToCloudinary(filePath);
    return newImageUrl;
};



// Function to delete an image from Cloudinary
export const deleteImage = async (imageUrl) => {
    if (imageUrl) {
        const publicId = imageUrl.split('/').pop().split('.')[0];
        await deleteImageFromCloudinary(publicId);  // Delete the image
    } else {
        throw new Error("No image to delete");
    }
};
