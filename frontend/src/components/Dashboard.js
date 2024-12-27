// import React, { useState, useEffect } from 'react';
// import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { getAttendanceSummary, getBehaviorSummary } from '../api/api';

// const Dashboard = () => {
//   const [attendanceSummary, setAttendanceSummary] = useState(null);
//   const [behaviorSummary, setBehaviorSummary] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const attendanceResponse = await getAttendanceSummary();
//         const behaviorResponse = await getBehaviorSummary();
//         setAttendanceSummary(attendanceResponse.data);
//         setBehaviorSummary(behaviorResponse.data);
//       } catch (err) {
//         setError('Failed to load dashboard data.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="text-center">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Row>
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Attendance Summary</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">Overview of student attendance</Card.Subtitle>
//               <Card.Text>
//                 Total Students: {attendanceSummary.totalStudents}
//               </Card.Text>
//               <Card.Text>
//                 Average Attendance: {attendanceSummary.averageAttendance}%
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Behavior Summary</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">Overview of student behavior</Card.Subtitle>
//               <Card.Text>
//                 Total Students: {behaviorSummary.totalStudents}
//               </Card.Text>
//               <Card.Text>
//                 Average Behavior Rating: {behaviorSummary.averageRating}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;
// import { getBehaviorSummary } from '../api/api';

// const fetchSummary = async () => {
//   try {
//     const response = await getBehaviorSummary();
//     setBehaviorSummary(response.data);
//   } catch (err) {
//     setError('Failed to load behavior summary.');
//   }
// };
// import React, { useState, useEffect } from 'react';
// import { getAttendanceSummary, getBehaviorSummary } from '../api/api';
// import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';

// const Dashboard = () => {
//   const [attendanceSummary, setAttendanceSummary] = useState(null);
//   const [behaviorSummary, setBehaviorSummary] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const attendanceResponse = await getAttendanceSummary();
//         const behaviorResponse = await getBehaviorSummary();
//         setAttendanceSummary(attendanceResponse.data);
//         setBehaviorSummary(behaviorResponse.data);
//       } catch (err) {
//         setError('Failed to load dashboard data.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (isLoading) {
//     return <Spinner animation="border" variant="primary" />;
//   }

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Row>
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Attendance Summary</Card.Title>
//               <Card.Text>Total Students: {attendanceSummary.totalStudents}</Card.Text>
//               <Card.Text>Average Attendance: {attendanceSummary.averageAttendance}%</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Behavior Summary</Card.Title>
//               <Card.Text>Total Students: {behaviorSummary.totalStudents}</Card.Text>
//               <Card.Text>Average Behavior Rating: {behaviorSummary.averageRating}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getAttendanceSummary, getBehaviorSummary } from '../api/api';

const Dashboard = () => {
  const [attendanceSummary, setAttendanceSummary] = useState(null);
  const [behaviorSummary, setBehaviorSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const attendanceResponse = await getAttendanceSummary();
        const behaviorResponse = await getBehaviorSummary();
        setAttendanceSummary(attendanceResponse.data);
        setBehaviorSummary(behaviorResponse.data);
      } catch (err) {
        setError('Failed to load dashboard data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Attendance Summary</Card.Title>
              <Card.Text>Total Students: {attendanceSummary.totalStudents}</Card.Text>
              <Card.Text>Average Attendance: {attendanceSummary.averageAttendance}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Behavior Summary</Card.Title>
              <Card.Text>Total Students: {behaviorSummary.totalStudents}</Card.Text>
              <Card.Text>Average Behavior Rating: {behaviorSummary.averageRating}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
