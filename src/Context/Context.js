import React, { createContext } from 'react';

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const valueInfo = {};
  return (
    <ContextProvider.Provider value={valueInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
