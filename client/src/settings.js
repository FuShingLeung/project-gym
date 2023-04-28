// export const EXERCISES_ENDPOINT =
//   'mongodb+srv://c13-user:passwordA@cluster0.is7nv6a.mongodb.net/?retryWrites=true&w=majority';
// export const EXERCISES_ENDPOINT = 'http://localhost:3333/api/v1/exercises';
export const STORAGE_KEY = 'exercises';
export const EXERCISES_ENDPOINT = JSON.parse(localStorage.getItem(STORAGE_KEY));
