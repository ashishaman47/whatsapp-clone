// initialState --> is how the data layer looks before we added anything to it.
export const initialState = {
  user: null,
};

// this set_actions is where we push info into data layer
export const actionTypes = {
  SET_USER: 'SET_USER',
};

// reducer --> is the listener which listens to the action beign dispatch --> on the basis of the action return the value
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // keep the state of the data layer but change the user to whatever we dispatch

    default:
      return state;
  }
};

export default reducer;
