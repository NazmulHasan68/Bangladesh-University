import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);

    // res.send('MongoDb is connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
