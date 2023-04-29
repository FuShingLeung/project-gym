import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import { ExercisesContext } from '../components/contexts/exercise.context';
import ExercisesList from '../components/ExercisesList';
import TextField from '@mui/material/TextField';

function Search() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const { addExercise } = useContext(ExercisesContext);

  const { exercises, fetchExercises, deleteExercise } =
    useContext(ExercisesContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  useEffect(() => {
    console.log('Text field value', textFieldValue);
  }, [textFieldValue]);

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" component="h4" display="inline-block">
          Search for exercises
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
      </Box>
      <ExercisesList exercises={exercises} />
    </>
  );
}

export default Search;
