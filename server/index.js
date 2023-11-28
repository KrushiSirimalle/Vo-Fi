const express=require('express')
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const app=express()

dotEnv.config()
const port=5000;

app.listen(()=>{
    console.log("Server running on port",port)
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY")
})

