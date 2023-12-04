import React, { useState } from 'react';
import './Register.css';
import NavBar from './NavBar';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    dob: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post('http://localhost:8800/api-v1/auth/registerUser', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        setFormData({
          firstName: '',
          lastName: '',
          username: '',
          dob: '',
          email: '',
          createPassword: '',
          confirmPassword: '',
        })
        // Optionally, you can redirect the user or perform other actions upon successful registration
      })
      .catch((error) => {
        console.error('Error registering:', error.message);
      });
  };

  return (
    <>
    <NavBar/>
    <form onSubmit={handleSubmit} class='form-container'>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          id="createPassword"
          name="createPassword"
          value={formData.createPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
    </>
  );
};

export default Register;