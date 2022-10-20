import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()


const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);



export default connectMongo;
