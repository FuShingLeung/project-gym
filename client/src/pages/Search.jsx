import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import { ExercisesContext } from '../components/contexts/exercise.context';
import TextField from '@mui/material/TextField';

import ExercisesList from '../components/ExercisesList';
import FilterButtons from '../components/FilterButtons';
import FilteredList from '../components/FilteredList';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const { addExercise } = useContext(ExercisesContext);

  const { exercises, fetchExercises, deleteExercise, filterExercise } =
    useContext(ExercisesContext);

  const filterHandler = (filterValue, searchKey) => {
    filterExercise(filterValue, searchKey);
  };

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h4" display="inline">
          Search for exercises
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Box>
      {/* <ExercisesList exercises={exercises} /> */}
      <FilteredList exercises={exercises} filterHandler={filterHandler} />
    </>
  );
}

export default Search;
