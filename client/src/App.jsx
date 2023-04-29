import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

import Layout from './components/Layout';

import { ExercisesProvider } from './components/contexts/exercise.context';

// Import pages
import ExercisesListPage from './pages/List';
import Add from './pages/Add';
import Update from './pages/Update';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ExercisesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ExercisesListPage />} />
              <Route path="/add" element={<Add />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/search" element={<Search />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </ExercisesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
