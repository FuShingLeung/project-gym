import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import { ExercisesContext } from '../components/contexts/exercise.context';
import TextField from '@mui/material/TextField';

import ExercisesList from '../components/ExercisesList';
import SearchList from '../components/SearchList';
import FilterButtons from '../components/FilterButtons';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const { addExercise } = useContext(ExercisesContext);

  const { exercises, fetchExercises, deleteExercise } =
    useContext(ExercisesContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  useEffect(() => {
    console.log('Search value', searchValue);
  }, [searchValue]);

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
      <Box>
        <FilterButtons />
      </Box>

      {/* <SearchList exercises={exercises} /> */}
      <ExercisesList exercises={exercises} />
    </>
  );
}

export default Search;
