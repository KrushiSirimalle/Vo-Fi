import mongoose from 'mongoose';
import validator  from 'validator';
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";


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
        minlength: [6, "Password must be atleast"],
        select: true,
     },
    
},
{timestamps: true}
);

// middelwares
userSchema.pre("save", async function () {
    if (!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  //compare password
  userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  };
  //JSON WEBTOKEN
userSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  };
  
  
  
  
  const User = mongoose.model("User", userSchema);
  
  export default User;