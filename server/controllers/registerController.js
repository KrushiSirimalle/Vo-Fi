import Register from "../models/Registermodel.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, createPassword, confirmPassword, dateOfBirth, username } = req.body;

  // Validate fields
  if (!firstName || !lastName || !email || !createPassword || !confirmPassword || !dateOfBirth || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExist = await Register.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email Address already exists" });
    }

    if (createPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await Register.create({
      firstName,
      lastName,
      email,
      createPassword,
      dateOfBirth,
      username,
    });

    // Generate user token
    const token = await user.createJWT();

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // Add other user properties as needed
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

// Add other controllers or functionalities as needed
