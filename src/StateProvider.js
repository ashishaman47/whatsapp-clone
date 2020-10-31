import React, { createContext, useContext, useReducer } from 'react';

// preparing the data layer --> creating context where the data actually lives
export const StateContext = createContext();

// StateProvider is the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* App is our children --> present in index.js */}
    {children}
  </StateContext.Provider>
);

// this allow us to pull info from our data layer
export const useStateValue = () => useContext(StateContext);
