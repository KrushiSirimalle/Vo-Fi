// AboutUs.js
import React from 'react';
import './About.css';
import NavBar from './NavBar';

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <div className="container-fluid">
      <h2>About Us</h2>
      <p>
        Welcome to our company! We are dedicated to providing quality products/services and ensuring customer satisfaction.
      </p>

      <p>
        Our team is passionate about what we do, and we strive to deliver excellence in everything. Learn more about our mission and values below.
      </p>

      <h4><strong>Our Mission</strong></h4>
      <p style={{textAlign: 'justify'}}>
        To At <strong>sevasamarth,</strong> we're on a 
        mission to connect passionate individuals with 
        impactful volunteer projects. Our goal is to
        empower change makers by offering diverse opportunities 
        that align with their skills and interests. Join us in creating a positive impact on communities and building a world where volunteering is a transformative and empowering 
        experience. Explore, match your passion, and make a difference today!
      </p>
      <div>
      <div class="row">
          <div class="col-sm-4"><img src="./images/food.jpg" alt="Website Logo" style={{height:'200px', weight:'200px', padding:'10px', borderRadius:'10' }}></img></div>
          <div class="col-sm-4"><img src="./images/vol21.png" alt="Website Logo" style={{height:'200px', weight:'200px', padding:'10px', borderRadius:'10' }}></img></div>
          <div class="col-sm-4"><img src="./images/don.jpg" alt="Website Logo" style={{height:'200px', weight:'200px',padding:'10px', borderRadius:'10px' }}></img></div>
        </div>
      </div>
      

      <h4><strong>Our Values</strong></h4>
      <ul>
        <li>Customer Satisfaction</li>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Teamwork</li>
      </ul>
    </div>
    </>

  );
};

export default AboutUs;