import React, { createContext, useState, useCallback } from 'react';
import { EXERCISES_ENDPOINT, STORAGE_KEY } from '../../settings';
import { useNavigate } from 'react-router-dom';

export const ExercisesContext = createContext({
  fetchExercises: () => [],
  addExercise: () => {},
  updateExercise: () => {},
  deleteExercise: () => {},
  filterExact: () => {},
  filterTextfield: () => {},
  resetFilteredExercise: () => {},
  loaded: false,
  loading: false,
  error: null,
  exercises: [],
  filteredExercises: [],
});

export const ExercisesProvider = ({ children }) => {
  const navigate = useNavigate();

  const [filtersList, setFiltersList] = useState(() => []);

  const [exercises, setExercises] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  });
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchExercises = useCallback(async () => {
    if (loading || loaded || error) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(EXERCISES_ENDPOINT);
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setExercises(data);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoaded(true);
      setLoading(false);
    }
  }, [error, loaded, loading]);

  const addExercise = useCallback(
    async (formData) => {
      console.log('about to add', formData);
      if (formData.avatar_url === '') {
        delete formData.avatar_url;
      }
      console.log(JSON.stringify(formData));
      try {
        const response = await fetch(EXERCISES_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.status !== 201) {
          throw response;
        }
        const savedExercise = await response.json();
        console.log('got data', savedExercise);
        const newExercises = [...exercises, savedExercise];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newExercises));
        setExercises(newExercises);
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    },
    [exercises, setExercises],
  );

  const updateExercise = useCallback(
    async (id, formData) => {
      console.log('updating', id, formData);
      let updatedExercise = null;
      // Get index
      const index = exercises.findIndex((exercise) => exercise._id === id);
      console.log(index);
      if (index === -1) throw new Error(`Exercise with index ${id} not found`);
      const oldExercise = exercises[index];
      console.log('oldExercise', oldExercise);

      // Send the differences, not the whole update
      const updates = {};
      for (const key of Object.keys(oldExercise)) {
        if (key === '_id') continue;
        if (oldExercise[key] !== formData[key]) {
          updates[key] = formData[key];
        }
      }
      console.log(JSON.stringify(updates));
      try {
        const response = await fetch(`${EXERCISES_ENDPOINT}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates),
        });

        if (response.status !== 200) {
          throw response;
        }

        // Merge with formData
        updatedExercise = {
          ...oldExercise,
          ...formData, // order here is important for the override!!
        };
        console.log('updatedExercise', updatedExercise);
        const updatedExercises = [
          ...exercises.slice(0, index),
          updatedExercise,
          ...exercises.slice(index + 1),
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedExercises));
        setExercises(updatedExercises);
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    },
    [exercises, setExercises],
  );

  const deleteExercise = useCallback(
    async (id) => {
      let deletedExercise = null;
      try {
        const response = await fetch(`${EXERCISES_ENDPOINT}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status !== 204) {
          throw response;
        }
        // Get index
        const index = exercises.findIndex((exercise) => exercise._id === id);
        deletedExercise = exercises[index];
        const updatedExercises = [
          ...exercises.slice(0, index),
          ...exercises.slice(index + 1),
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedExercises));
        setExercises(updatedExercises);
        console.log(`Deleted ${deletedExercise.exerciseName}`);
      } catch (err) {
        console.log(err);
      }
    },
    [exercises, setExercises],
  );

  const filterExact = useCallback(
    async (searchValue) => {
      if (filtersList.indexOf(searchValue) == -1) {
        filtersList.push(searchValue);
      }
      let filteredList = [];

      for (const value of filtersList) {
        let valueList = exercises.filter(
          (exercise) => value === exercise.muscleGroup,
        );
        filteredList = filteredList.concat(valueList);
      }
      setFilteredExercises(filteredList);
    },
    [exercises, setExercises],
  );

  const filterTextfield = useCallback(
    async (searchValue) => {
      let filteredList = [];
      if (filtersList !== []) {
        for (const value of filtersList) {
          let valueList = exercises.filter(
            (exercise) => value === exercise.muscleGroup,
          );
          filteredList = filteredList.concat(valueList);
          console.log('before textfield', filteredList);
          let pattern = new RegExp('^' + searchValue, 'i');
          filteredList = filteredList.filter((exercise) =>
            exercise.exerciseName.match(pattern),
          );
          console.log('after textfield', filteredList);
        }
      } else {
        let pattern = new RegExp('^' + searchValue, 'i');
        filteredList = exercises.filter((exercise) =>
          exercise.exerciseName.match(pattern),
        );
        console.log(filteredList);
      }

      setFilteredExercises(filteredList);
    },
    [exercises, setExercises],
  );

  const resetFilteredExercise = useCallback(async () => {
    setFilteredExercises(exercises);
  });
  return (
    <ExercisesContext.Provider
      value={{
        exercises,
        loading,
        error,
        filteredExercises,
        fetchExercises,
        addExercise,
        updateExercise,
        deleteExercise,
        filterExact,
        filterTextfield,
        resetFilteredExercise,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};
