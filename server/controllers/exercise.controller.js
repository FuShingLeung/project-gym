const Exercise = require('../models/exercise.model');

exports.getExercises = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const exercises = await Exercise.find(query);
    res.status(200).json(exercises);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addExercise = async (req, res) => {
  const exerciseData = req.body;
  console.log('exerciseData', exerciseData);
  try {
    const newExercise = new Exercise(exerciseData);
    const result = await newExercise.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const result = await Exercise.updateOne({ _id: req.params.id }, req.body);
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeExercise = async (req, res) => {
  try {
    const result = await Exercise.deleteOne({ _id: req.params.id });
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
