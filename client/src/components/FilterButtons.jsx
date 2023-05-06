import React from 'react';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

function FilterButtons({ filteredExercises = [], filterHandler = () => {} }) {
  return (
    <>
      <List>
        <Box display="flex">
          <ListItem>
            <Button
              variant="outlined"
              onClick={() =>
                filterHandler(filteredExercises, 'Chest', 'muscleGroup')
              }
            >
              Chest
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              onClick={() =>
                filterHandler(filteredExercises, 'Shoulders', 'muscleGroup')
              }
            >
              Shoulders
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              onClick={() =>
                filterHandler(filteredExercises, 'Legs', 'muscleGroup')
              }
            >
              Legs
            </Button>
          </ListItem>
        </Box>
      </List>
    </>
  );
}

export default FilterButtons;
