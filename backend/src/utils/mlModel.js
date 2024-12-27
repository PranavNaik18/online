const tf = require('@tensorflow/tfjs-node');

async function loadBehaviorModel() {
  const modelPath = 'file://path/to/saved/model';
  const model = await tf.loadLayersModel(modelPath);
  return model;
}

async function predictBehavior(inputData, model) {
  const inputTensor = tf.tensor(inputData);
  const prediction = model.predict(inputTensor);
  return prediction.dataSync(); // Returns the prediction result
}

module.exports = { loadBehaviorModel, predictBehavior };
