
import {User} from "../model/userSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { env } from "../config/env.js"
import {generateAccessToken, generateRefreshToken}  from "../utils/generate-token.js"


export const signUpUser =  async(req, res,next) =>{
    try {

        const {username , email , password} =  req.body

        const  userExist = await User.findOne({email}) 
        if(userExist){
            return res.status(400).json({message:"Email Already Exist!"})
        }

        const passwordHashed =  await bcrypt.hash(password, 12)
        console.log("Password Hashed:" ,passwordHashed)
        const user  =  await User.create({username ,email , password:passwordHashed})

        const accessToken  = generateAccessToken(user)
        const refreshToken =  generateRefreshToken(user)

        res.cookie("token" ,refreshToken ,{
            httpOnly:true,
            sameSite:'lax',
            maxAge:7*24*60*60*1000
        } )


        return res.status(201).json({message:"Register successfully" , accessToken})
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = async (req , res) =>{
    try {
       const {email , password} = req.body
       const user =  await User.findOne({email}) 

       if(!user){
        return res.status(401).json({message:"Email and Password not found!"})
       }

       const isMatch  =  await bcrypt.compare(password,user.password) 
       if(!isMatch){

        return res.status(400).json({message:"Email and Password not found!"})
       }

       const accessToken  = generateAccessToken(user)
       const refreshToken =  generateRefreshToken(user)

       res.cookie("token",refreshToken , {
        httpOnly:true,
        sameSite:true,
        maxAge:7*24*60*60*1000
       })


       return res.status(200).json({ message:user.isAdmin ?" Welcome Admin" : "Login Sucessfully"  , accessToken})
    
    } catch (error) {
     console.log(error)
    }
}

export const refreshToken = (req, res) =>{
    try {
        
        const token  =  req.cookies.token;

        res.verify(token , env.REFRESH_TOKEN, async(err , decoded)=>{


            if(err){
                return res.status(403).json({message:'Forbidden'})
            }

            const user =  await User.findById({_id:decoded.userId})
            if(!user){
                return res.status(401).json({message:"User not found"})
            }
            const newAccessToken   = generateAccessToken(user)

            return res.status(201).json({newAccessToken})
        })

    } catch (error) {
        console.log(error)
    }

}


export const userLogout = (req,res) =>{
    res.clearCookie('token')
    return res.status(200).json({message:"Logout Successfully"})
}

export const users =  (req , res) =>{
    const user =  req.user
    return res.status(200).json({user})
}