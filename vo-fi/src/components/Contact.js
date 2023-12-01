// Contact.js
import React from 'react';
import './Contact.css';
import NavBar from './NavBar';

const Contact = () => {
  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or feedback.
      </p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
