import { Schema , model } from "mongoose";

const userSchema  =   new Schema({

    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true,
    }, 
    isAdmin:{
        type:Boolean,
        default:false
    }
   
},{
    timestamps:true
})



export const User =  model ("User", userSchema )



