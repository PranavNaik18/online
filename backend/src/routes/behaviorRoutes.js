<<<<<<< HEAD
=======
// backend/routes/behaviorRoutes.js
>>>>>>> ea2f446 (Your commit message)
const express = require('express');
const { getBehaviorReports, getBehaviorSummary } = require('../controllers/behaviorController');
const router = express.Router();

<<<<<<< HEAD
// Route for getting detailed behavior reports
router.get('/reports', getBehaviorReports);

// Route for getting behavior summary
router.get('/summary', getBehaviorSummary);
=======
router.get('/reports', getBehaviorReports);  // Fetch behavior reports
router.get('/summary', getBehaviorSummary);  // Fetch behavior summary
>>>>>>> ea2f446 (Your commit message)

module.exports = router;
