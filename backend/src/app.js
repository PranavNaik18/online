const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDatabase } = require('./utils/database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/behavior', require('./routes/behaviorRoutes'));

// Database connection
connectDatabase();

module.exports = app;
