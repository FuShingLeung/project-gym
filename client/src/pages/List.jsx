import React, { useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { ExercisesContext } from '../components/contexts/exercise.context';
import ExercisesList from '../components/ExercisesList';

function ExercisesListPage() {
  const { exercises, fetchExercises, deleteExercise } =
    useContext(ExercisesContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const deleteHandler = (id) => {
    deleteExercise(id);
  };

  return (
    <>
      <Typography variant="h4" component="h4">
        Exercises
      </Typography>
      <ExercisesList exercises={exercises} deleteHandler={deleteHandler} />
    </>
  );
}

export default ExercisesListPage;
