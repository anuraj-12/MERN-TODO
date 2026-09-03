
import {env} from "../config/env.js"
import jwt from "jsonwebtoken"
import {User} from "../model/userSchema.js"


export const authMiddileware = async(req , res , next) =>{
    try {
        
     const authHeader =  await req.header("Authorization")

     if(!authHeader){
        return res.status(401).json({message:"Unauthorized Token and Http"})
     }

     const token  =  authHeader.split(" ")[1]

     const decoded = jwt.verify(token , env.ACCESS_TOKEN)
     const user =  await User.findOne({_id:decoded.userId}).select({password:0})

     if(!user) {
        return res.status(400).json({message:"User mnot Found"})
     }

     req.user = user

    } catch (error) {
        console.log(error)
    }

    next()
}