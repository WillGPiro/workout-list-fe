export const postExercise = exercise => {
  return fetch(`${process.env.API_URL}/api/v1/exercises`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exercise)
  })
  .then(res => res.json());
};

