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
  .post('/', body('exerciseName').trim().isLength({ min: 5 }), (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    addExercise(req, res);
  })
  .put('/:id', updateExercise)
  .delete('/:id', removeExercise);

module.exports = router;
