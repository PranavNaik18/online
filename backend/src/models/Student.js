const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // URL or file path to the student's photo
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
