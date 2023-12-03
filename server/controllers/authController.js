import User from "../models/User.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  //validate fileds

  if (!username) {
    next("username is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Password is required");
  }

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      next("Email Address already exists");
      return;
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    // user token
    const token = await user.createJWT();

    res.status(201).send({
      success: true,
      message: "Account created successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
       
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      next("Please Provide AUser Credentials");
      return;
    }

    // find user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid -email or password");
      return;
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    user.password = undefined;

    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};