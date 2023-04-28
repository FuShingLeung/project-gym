import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';

const schema = yup
  .object()
  .shape({
    name: yup.string().max(30).required(),
    muscleGroup: yup.string().max(30).required(),
    avatar_url: yup.string().url(),
  })
  .required();

const defaults = {
  name: '',
  muscleGroup: '',
  avatar_url: '',
};

export default function ExerciseForm({ exercise, submitHandler }) {
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: exercise || defaults,
  });

  useEffect(() => {
    if (exercise) {
      reset(exercise);
    }
  }, [exercise, reset]);

  let submitFn = (vals) => {
    reset();
    exercise ? submitHandler(exercise._id, vals) : submitHandler(vals);
  };

  const formRowStyle = {
    marginBlockEnd: '1em',
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="name"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="name"
              {...field}
              label="name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="muscleGroup"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="muscleGroup"
              fullWidth
              error={!!errors.muscleGroup}
              helperText={errors.muscleGroup?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="avatar_url"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="name"
              {...field}
              label="Avatar URL"
              fullWidth
              error={!!errors.avatar_url}
              helperText={errors.avatar_url?.message}
            />
          )}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          sx={{ mr: 2 }}
          disabled={!isDirty}
        >
          Reset
        </Button>

        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (!isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
