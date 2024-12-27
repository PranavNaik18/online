import React from 'react';
import { Link } from 'react-router-dom';  // To navigate between pages (if using react-router)
import { Button, Jumbotron, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to the Automated Student Attendance & Behavior System</h1>
          <p>
            This platform helps you analyze student attendance and behavior using machine learning.
          </p>
          <p>
            <Button variant="primary" as={Link} to="/dashboard">
              Go to Dashboard
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
