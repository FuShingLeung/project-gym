const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  exerciseName: { type: String, required: true, minLength: 5 },
  muscleGroup: { type: String, required: true, minLength: 3 },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
