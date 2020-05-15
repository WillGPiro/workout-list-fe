import React, { useState } from 'react';
import { postExercise } from '../../services/exerciseFetch';
import { useDispatch } from 'react-redux'
import { addExercise } from '../../actions/exerciseActions';

const ExerciseForm = () => {
 const dispatch = useDispatch();
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [sets, setSets] = useState(2);
 const [reps, setReps] = useState(6);
 const [url, setUrl] = useState('');   

 const handleSubmit = event => {
   event.preventDefault();
   postExercise({ name, description, sets, reps, url })
    .then(exercise => {


      dispatch(addExercise(exercise));
    });
 };

 //On submitting an exercise, we want to add this to our local state, redux state, and our backend database. 
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={({ target }) => setName(target.value)} placeholder="Exercise Name" />

      <textarea 
        value={description} 
        onChange={({ target }) => setDescription(target.value)} 
        placeholder="Write the description of your exercise here.">
      </textarea>

      <input 
        type="number" 
        value={sets} 
        onChange={({ target }) => setSets(target.value)} 
        placeholder="Enter number of sets." />

      <input 
        type="number" 
        value={reps} 
        onChange={({ target }) => setReps(target.value)} 
        placeholder="Enter number of reps." />

      <input 
        type="text" 
        value={url} 
        onChange={({ target }) => setUrl(target.value)} 
        placeholder="Enter photo url" />

      <button>Add Exercise</button>
    </form>
  )
};

export default ExerciseForm;
