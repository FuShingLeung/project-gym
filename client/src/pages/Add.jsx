import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import ExerciseForm from '../components/forms/ExerciseForm';
import { ExercisesContext } from '../components/contexts/exercise.context';

function Add() {
  const { addExercise } = useContext(ExercisesContext);

  const submitHandler = (data) => {
    addExercise(data);
  };

  return (
    <>
      <Typography variant="h4" component="h4">
        Add Exercise
      </Typography>
      <ExerciseForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
