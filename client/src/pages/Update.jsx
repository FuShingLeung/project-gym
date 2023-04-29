import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExerciseForm from '../components/forms/ExerciseForm';
import { ExercisesContext } from '../components/contexts/exercise.context';

function Update() {
  const { id } = useParams();
  const { exercises, updateExercise } = useContext(ExercisesContext);

  const exercise = exercises.find(({ _id }) => id === _id);
  // Send car and handler to form
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2 }}>
        Update {exercise.exerciseName}
      </Typography>
      <ExerciseForm exercise={exercise} submitHandler={updateExercise} />
    </>
  );
}

export default Update;
