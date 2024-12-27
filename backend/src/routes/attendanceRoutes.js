<<<<<<< HEAD
const express = require('express');
const { markAttendance } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/', markAttendance);
=======
// backend/routes/attendanceRoutes.js
const express = require('express');
const { getAttendanceSummary } = require('../controllers/attendanceController');
const router = express.Router();

router.get('/summary', getAttendanceSummary);  // Summary of attendance
router.post('/', (req, res) => {
  // Your attendance marking logic
  res.send("Attendance marked");
});
>>>>>>> ea2f446 (Your commit message)

module.exports = router;
