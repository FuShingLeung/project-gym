import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';

import FilterButtons from './FilterButtons';

function FilteredList({ filteredExercises = [], filterHandler = () => {} }) {
  return (
    <>
      <Box>
        <FilterButtons
          filteredExercises={filteredExercises}
          filterHandler={filterHandler}
        />
      </Box>
      <List>
        {filteredExercises.map(
          ({ exerciseName, muscleGroup, avatar_url, _id }) => (
            <ListItem key={_id}>
              <ListItemAvatar>
                <Avatar alt="" src={avatar_url} />
              </ListItemAvatar>
              <ListItemText>
                {exerciseName} ({muscleGroup})
              </ListItemText>
              <IconButton aria-label="favouriteBorder">
                <FavoriteBorderIcon />
              </IconButton>
            </ListItem>
          ),
        )}
      </List>
    </>
  );
}

export default FilteredList;
