import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoUrl=process.env.MONGODB_CONNECT_API as string;

let connectionDB:typeof mongoose;

const startDatabase=async()=>{
    if(!connectionDB)connectionDB=await mongoose.connect(mongoUrl);
    return connectionDB;
}


export default startDatabase;