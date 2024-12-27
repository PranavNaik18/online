import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Alert, Spinner } from 'react-bootstrap';
import { getBehaviorReports } from '../api/api';

const BehaviorReport = () => {
  const [reports, setReports] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await getBehaviorReports();
        setReports(response.data);
      } catch (err) {
        setError('Failed to load behavior reports.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReports();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div>
      <h3>Behavior Reports</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {reports && reports.length > 0 ? (
        reports.map((report, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{report.studentName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Behavior Rating: {report.behaviorRating}
              </Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item>Attendance: {report.attendance}</ListGroup.Item>
                <ListGroup.Item>Notes: {report.notes}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant="info">No behavior reports available.</Alert>
      )}
    </div>
  );
};

export default BehaviorReport;
import { getBehaviorReports } from '../api/api';

const fetchReports = async () => {
  try {
    const response = await getBehaviorReports();
    setReports(response.data);
  } catch (err) {
    setError('Failed to load behavior reports.');
  }
};
