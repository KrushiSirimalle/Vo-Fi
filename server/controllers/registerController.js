const Register = require('../models/Register');

// Handle registration logic
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, dateOfBirth, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Create a new instance of the Register model
    const newRegistration = new Register({
      firstName,
      lastName,
      username,
      dateOfBirth,
      email,
      password,
      confirmPassword,
    });

    // Save the new registration to the database
    const savedRegistration = await newRegistration.save();

    res.status(201).json({ message: 'Registration successful', data: savedRegistration });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

module.exports = { registerUser };
