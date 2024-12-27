import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings Saved:', settings);
    // You can also save the settings to local storage or a database here
  };

  return (
    <div>
      <h2>Settings</h2>
      <Card className="mb-3">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="notifications">
              <Form.Check
                type="checkbox"
                label="Enable Notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="darkMode">
              <Form.Check
                type="checkbox"
                label="Enable Dark Mode"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Settings
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
