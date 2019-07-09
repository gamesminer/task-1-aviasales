import React from 'react'
import * as StorageReducer from './reducers/storage';

export const Store = React.createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(StorageReducer.reducer, StorageReducer.initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>
};