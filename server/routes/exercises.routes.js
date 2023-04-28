const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const {
  getExercises,
  addExercise,
  updateExercise,
  removeExercise,
} = require('../controllers/exercise.controller');

router
  .get('/:id?', getExercises)
  .post(
    '/',
    body('exerciseName').trim().isLength({ min: 3 }),
    body('muscleGroup').trim().isLength({ min: 3 }),
    (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      addExercise(req, res);
    },
  )
  .put(
    '/:id',
    body('exerciseName').trim().isLength({ min: 3 }),
    body('muscleGroup').trim().isLength({ min: 3 }),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      updateExercise(req, res);
    },
  )
  .delete('/:id', removeExercise);

module.exports = router;
