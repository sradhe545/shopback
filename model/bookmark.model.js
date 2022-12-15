const mongoose=require('mongoose')
const bookmarkSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true,min:4},
   quantity:{type:Number,required:true},
   priority:{type:String,enum:["Mens","Womens","Kids"]},
},{timestamps:true})


const Bookmark=mongoose.model("bookmark",bookmarkSchema)
module.exports=Bookmark
