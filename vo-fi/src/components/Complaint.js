// Complaint.js
import React from 'react';
import './Complaint.css';
const Complaint = () => {
  return (
    <div className="container mt-5">
      <h2>File a Complaint</h2>
      <p>
        We're sorry to hear that you have a complaint. Please provide details below, and we'll address it as soon as possible.
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
          <label htmlFor="complaint" className="form-label">
            Complaint Details
          </label>
          <textarea className="form-control" id="complaint" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-danger">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Complaint;