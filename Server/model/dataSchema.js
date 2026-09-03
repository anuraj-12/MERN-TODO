import { Schema , model } from "mongoose";


const dataSchema = new Schema({

    title:{
        type:String,
        require:true
    },
      description:{
        type:String,
        require:true
    }
} , 
{
    timestamps:true
})

export const Product = model('Product' , dataSchema)