const express=require('express')
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const userRoutes = require('./routes/userRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const registerRoutes = require('./routes/registerRoutes');

const app=express()

dotEnv.config()
const port=5000;

app.use(express.json());
app.use('/User', userRoutes);
app.use('/Complaint', complaintRoutes);
app.use('/Register', registerRoutes);

app.listen(()=>{
    console.log("Server running on port",port)
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGODB CONNECTED SUCCESSFULLY")
}).catch((err)=>console.log(err));

