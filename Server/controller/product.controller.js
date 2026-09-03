
import {Product} from "../model/dataSchema.js"

export const getProduct = async(req,res) =>{
    try {   

        const data  =  await Product.find({}).sort({createdAt:-1})
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (req,res)=>{
    try {

        const {id,title ,description} = req.body
        const data =  Product.create({id,title ,description})   
        return res.status(201).json({message:"product Added!"}) 
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req,res)=>{
    try {

        const updated = req.body
        const id = req.params.id
        const data =  Product.updateOne({_id:id} , {$set:updated})   
        return res.status(201).json({message:"Product Updated!"}) 
    } catch (error) {
        console.log(error)
    }
}

  export const deleteProduct  = async(req,res)=>{
    const id = req.params.id
    const data = await Product.deleteOne({_id:id})
    return res.status(200).json({message:'Product Delete'})
  }