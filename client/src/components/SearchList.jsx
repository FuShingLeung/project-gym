import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function SearchList({ exercises = [], searchValue = '' }) {
  if (searchValue.trim() > 0) {
    return (
      <>
        <List>
          {exercises.map(({ exerciseName, muscleGroup, avatar_url, _id }) => (
            <ListItem key={_id}>
              <ListItemAvatar>
                <Avatar alt="" src={avatar_url} />
              </ListItemAvatar>
              <ListItemText>
                {exerciseName} ({muscleGroup})
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </>
    );
  } else {
    return (
      <>
        <List>
          {exercises.filter(
            (searchValue, { exerciseName, muscleGroup, avatar_url, _id }) => (
              <ListItem key={_id}>
                <ListItemAvatar>
                  <Avatar alt="" src={avatar_url} />
                </ListItemAvatar>
                <ListItemText>
                  {exerciseName} ({muscleGroup})
                </ListItemText>
              </ListItem>
            ),
          )}
        </List>
      </>
    );
  }
}

export default SearchList;
