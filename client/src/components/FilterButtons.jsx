import React, { useState } from 'react';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function FilterButtons({ filterHandler = () => {} }) {
  const [formats, setFormats] = useState();

  const filterButton = (event, newFormats) => {
    filterHandler(newFormats);
    setFormats(newFormats);
  };

  return (
    <>
      <List>
        <Box display="flex">
          <ToggleButtonGroup
            value={formats}
            onChange={filterButton}
            aria-label="text formatting"
          >
            <ToggleButton value="Abs" aria-label="Abs">
              Abs
            </ToggleButton>
            <ToggleButton value="Back" aria-label="Back">
              Back
            </ToggleButton>
            <ToggleButton value="biceps" aria-label="biceps">
              Biceps
            </ToggleButton>
            <ToggleButton value="chest" aria-label="chest">
              Chest
            </ToggleButton>
            <ToggleButton value="legs" aria-label="legs">
              Legs
            </ToggleButton>
            <ToggleButton value="shoulders" aria-label="shoulders">
              Shoulders
            </ToggleButton>
            <ToggleButton value="triceps" aria-label="triceps">
              Triceps
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </List>
    </>
  );
}

export default FilterButtons;
