import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectdb = async () => {
try{
    await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb connected successfully");
}catch(error){
    console.log("Mongodb connection failed", error);
    process.exit(1);
    }
}
export default connectdb;