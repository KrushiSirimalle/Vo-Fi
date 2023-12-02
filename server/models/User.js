import mongoose from 'mongoose';
import validator  from 'validator';

const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "First Name is required"], 
        unique: true 
    },
    email: { 
        type: String, 
        required: [true, "First Name is required"], 
        unique: true, 
        validate: validator.isEmail },
    password: { 
        type: String, 
        required:[true, "Password is required"],
        minlength: [6, "Password must be atleast"]
     },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;