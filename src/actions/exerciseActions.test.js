import { addExercise, ADD_EXERCISE } from "./exerciseActions";

describe('exercise actions', () => {
  it('describes a ADD_EXERCISE action', () => {
    const action = addExercise({
      _id: '927349283749328',
      name: 'Pull-ups',
      description: 'Using a pronated grip, grasp the pull bar with a wider than shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
      sets: 3,
      reps: 5,
      url: 'https://youtu.be/5oxviYmdHCY',
    });

    expect(action).toEqual({
      type: ADD_EXERCISE,
      payload: {
        _id: '927349283749328',
        name: 'Pull-ups',
        description: 'Using a pronated grip, grasp the pull bar with a wider than shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
        sets: 3,
        reps: 5,
        url: 'https://youtu.be/5oxviYmdHCY',
      }
    });
  });
});