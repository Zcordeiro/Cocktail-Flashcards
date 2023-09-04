import mongoose from "mongoose";
 
export const connectToDatabase = async () => {
    mongoose.connect(process.env.MONGODB_URI);
}
