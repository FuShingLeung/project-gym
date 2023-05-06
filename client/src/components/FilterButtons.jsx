import React from 'react';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

function FilterButtons({ exercises = [], filterHandler = () => {} }) {
  return (
    <>
      <List>
        <Box display="flex">
          <ListItem>
            <Button
              variant="outlined"
              onClick={() => filterHandler('Chest', 'muscleGroup')}
            >
              Chest
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined">Shoulders</Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined">Legs</Button>
          </ListItem>
        </Box>
      </List>
    </>
  );
}

export default FilterButtons;
