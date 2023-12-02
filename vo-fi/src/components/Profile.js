// Profile.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const Profile = () => {
  return (
    <><NavBar/>
    <div className="container mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placekitten.com/200/300" alt="Profile" />
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>
            Email: john.doe@example.com
          </Card.Text>
          <Card.Text>
            Date of Birth: January 1, 1990
          </Card.Text>
          <Button variant="primary">Edit Profile</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Profile;
