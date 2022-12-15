const express=require("express")
const Product=require("../model/product.model")
const app=express.Router()
app.get("/",async(req,res)=>{
   try{
   let data=await Product.find({})
    res.status(200).send(data)

   }catch(e){
      console.log(e)
      return res.status(500).send(e)
   }
})  
app.delete("/:id",async(req,res)=>{
   try{
      
    let data=await Product.findByIdAndDelete({_id:req.params.id})
res.status(200).send("Deleteed Successfully")

   }catch(e){
      console.log(e)
      return res.status(500).send(e)
   }
}) 
app.post("/",async(req,res)=>{
   try{
   let data=await Product.create(req.body)
    res.status(200).send(data)

   }catch(e){
      console.log(e)
      return res.status(500).send(e)
   }
})     



module.exports =app