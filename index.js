const express= require('express')
const cors=require("cors")
const productRoute = require('./route/product.routes')
const bookmarkRoute=require('./route/bookmark.route')
const dotenv=require('dotenv').config()
const mongoose = require('mongoose')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL||8080).then(()=>console.log('Connected')).catch((err)=>console.log(err))

app.use("/product",productRoute)

app.use("/bookmark",bookmarkRoute)



app.listen(process.env.PORT, async()=>{

    console.log(`Listening at port ${process.env.PORT}`);
})