import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import ExerciseForm from '../components/forms/ExerciseForm';
import { ExercisesContext } from '../components/contexts/exercise.context';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const { addExercise } = useContext(ExercisesContext);

  const submitHandler = (data) => {
    addExercise(data);
    navigate('/');
  };

  return (
    <>
      <Typography variant="h2" component="h1">
        Add Exercise
      </Typography>
      <ExerciseForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
