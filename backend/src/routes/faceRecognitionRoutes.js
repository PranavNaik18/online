const express = require('express');
const multer = require('multer');
const { loadModels, recognizeFaces } = require('../controllers/faceRecognitionController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Load models before processing requests
loadModels().then(() => console.log('Face detection models loaded.'));

// Endpoint for face recognition
router.post('/recognize', upload.single('image'), recognizeFaces);

module.exports = router;
