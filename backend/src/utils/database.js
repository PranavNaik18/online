const mongoose = require('mongoose');

async function connectDatabase() {
  const MONGO_URI = 'mongodb://localhost:27017/attendanceSystem';
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

module.exports = { connectDatabase };
