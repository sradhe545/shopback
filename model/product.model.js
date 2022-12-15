const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true,min:4},
   quantity:{type:Number,required:true},
   priority:{type:String,enum:["Mens","Womens","Kids"]},
},{timestamps:true})


const Product=mongoose.model("product",productSchema)
module.exports=Product
