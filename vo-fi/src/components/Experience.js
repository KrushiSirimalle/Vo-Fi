// Experience.js
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavBar from './NavBar';

const Experience = () => {
  const [image, setImage] = useState(null);
  const [experience, setExperience] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log('Submitted:', { image, experience });
  };

  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <h2>Share Your Volunteering Experience</h2>

      <Form>
        <Form.Group controlId="imageUpload">
          <Form.Label>Upload Your Selfie</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          {image && (
            <Card className="mt-3">
              <Card.Img variant="top" src={image} alt="Uploaded Selfie" />
            </Card>
          )}
        </Form.Group>

        <Form.Group controlId="experienceTextarea">
          <Form.Label>Share Your Experience (max 100 words)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            maxLength={100}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};

export default Experience;
