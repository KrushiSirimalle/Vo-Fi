// WelcomePage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; // Assuming you have the react-icons library installed
import NavBar from './NavBar';

const Open = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa', // Light ash color
    color: 'rgb(255,215,0)', // White color for text
    boxShadow: '0 4px 6px rgba(0, 123, 255, 0.1)', // Sky blue shadow
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  };

  const arrowStyle = {
    fontSize: '24px',
    marginLeft: '5px'
  };

  const handleClick = () => {
    // Handle redirection logic here
    console.log('Redirecting...');
  };

  return (
    <><NavBar/>
    <Container style={containerStyle} className="mt-4">
      <h1><strong>Welcome to SevaSamartha</strong></h1>
      <h6>A place to spread humanity</h6>
      <Button variant="success" onClick={handleClick}>
        Explore <FaArrowRight style={arrowStyle} />
      </Button>
    </Container>
    </>
  );
};

export default Open;
