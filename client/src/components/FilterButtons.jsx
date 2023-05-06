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
            <Button variant="outlined" onClick={() => filterHandler('Chest')}>
              Chest
            </Button>
          </ListItem>

          <ListItem>
            <Button
              variant="outlined"
              onClick={() => filterHandler('Shoulders')}
            >
              Shoulders
            </Button>
          </ListItem>

          <ListItem>
            <Button variant="outlined" onClick={() => filterHandler('Legs')}>
              Legs
            </Button>
          </ListItem>

          <ListItem>
            <Button variant="outlined" onClick={() => filterHandler('Biceps')}>
              Biceps
            </Button>
          </ListItem>

          <ListItem>
            <Button variant="outlined" onClick={() => filterHandler('Triceps')}>
              Triceps
            </Button>
          </ListItem>
        </Box>
      </List>
    </>
  );
}

export default FilterButtons;
