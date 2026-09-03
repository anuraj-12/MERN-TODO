import mongoose from "mongoose";
import {env} from "../config/env.js"
export const MongoDB  = async() =>{

try {
   await mongoose.connect(env.MONGO_URL) 
   console.log('DB conneted!')
} catch (error) {
    console.log(error)
}}



