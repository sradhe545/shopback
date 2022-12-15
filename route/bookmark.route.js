const express=require("express")
const Bookmark=require("../model/bookmark.model")
const app=express.Router()
app.get("/",async(req,res)=>{
   try{
   let data=await Bookmark.find({})
    res.status(200).send(data)

   }catch(e){
      console.log(e)
      return res.status(500).send(e)
   }
})  

app.post("/",async(req,res)=>{
   try{
   let data=await Bookmark.create(req.body)
    res.status(200).send(data)

   }catch(e){
      console.log(e)
      return res.status(500).send(e)
   }
})     



module.exports =app