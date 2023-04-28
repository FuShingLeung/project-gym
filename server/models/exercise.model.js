const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  exerciseName: { type: String, required: true, minLength: 3 },
  muscleGroup: { type: String, required: true, minLength: 3 },
  avatar_url: {
    type: String,
    default:
      'https://static.strengthlevel.com/images/illustrations/dumbbell-curl-1000x1000.jpg',
  },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
