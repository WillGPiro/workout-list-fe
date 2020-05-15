import { ADD_EXERCISE } from "../actions/exerciseActions";

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_EXERCISE:
      return [...state, action.payload];
    default:
      return state;
  }
}