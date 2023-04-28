import { createTheme } from '@mui/material/styles';
import { orange, grey } from '@mui/material/colors';
import { ThemeContext } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: grey[900],
    },
    secondary: {
      main: '#edf2ff',
      contrastTest: grey[900],
    },
  },
});

export default theme;