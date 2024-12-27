const path = require('path');
const faceapi = require('@vladmandic/face-api');

async function loadModels() {
  const modelPath = path.join(__dirname, '../models/faceModels');
  await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
  await faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath);
  await faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath);
}

async function recognizeFace(inputImage, knownDescriptors) {
  const input = await faceapi.bufferToImage(inputImage);
  const detections = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();

  if (!detections.length) {
    throw new Error('No faces detected');
  }

  const labeledDescriptors = knownDescriptors.map(desc => 
    new faceapi.LabeledFaceDescriptors(desc.label, desc.descriptors)
  );

  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
  const bestMatch = faceMatcher.findBestMatch(detections[0].descriptor);

  return bestMatch;
}

module.exports = { loadModels, recognizeFace };
