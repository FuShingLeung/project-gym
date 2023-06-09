import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import { ExercisesContext } from '../components/contexts/exercise.context';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import FilteredList from '../components/FilteredList';

function Search() {
  const {
    filteredExercises,
    resetFilteredExercise,
    fetchExercises,
    filterExact,
    filterTextfield,
  } = useContext(ExercisesContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  useEffect(() => {
    resetFilteredExercise();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h4" display="inline">
          Search for exercises
        </Typography>
        <Button variant="contained" onClick={() => resetFilteredExercise()}>
          Reset
        </Button>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => filterTextfield(e.target.value)}
        />
      </Box>
      <FilteredList
        filteredExercises={filteredExercises}
        filterHandler={filterExact}
      />
    </>
  );
}

export default Search;
