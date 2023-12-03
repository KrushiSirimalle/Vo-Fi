import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: validator.isEmail,
  },
  createPassword: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: true,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (val) {
        return val === this.createPassword;
      },
      message: 'Passwords do not match',
    },
  },
}, { timestamps: true });

// Middleware to hash the password before saving to the database
registerSchema.pre('save', async function () {
  if (!this.isModified('createPassword')) return;
  const salt = await bcrypt.genSalt(10);
  this.createPassword = await bcrypt.hash(this.createPassword, salt);
});

// Compare password method
registerSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.createPassword);
  return isMatch;
};

// JSON Web Token creation method
registerSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });
};

const Register = mongoose.model('Register', registerSchema);

export default Register;
