import mongoose from "mongoose";
import { envs } from "./envs.js";

export async function connectDb(){
    try {
        await mongoose.connect(envs.mongo_uri);
        console.log("Conexión establecida con mongodb");
        
    } catch (error) {
        console.error(error.message)
    }
}