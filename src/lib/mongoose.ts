import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not set");
    }

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "ELearn" 
        });

        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("Error while connecting to MongoDB:", error);
        throw error; 
    }
};
