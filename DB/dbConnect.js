import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB IS CONNECTED: ${connection.connection.host}`);
    } catch (error) {
        console.log(`MONGO DB CONNECTION FAILED: ${error}`);
        process.exit(1);
    }
}

export default connectToDB;