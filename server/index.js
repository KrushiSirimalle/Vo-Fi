const express=require('express')
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const userRoutes = require('./routes/userRoutes');
const complaintRoutes = require('./routes/complaintRoutes');


const app=express()

dotEnv.config()
const port=5000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/complaints', complaintRoutes);

app.listen(()=>{
    console.log("Server running on port",port)
})

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY")
}).catch((err)=>console.log(err));

