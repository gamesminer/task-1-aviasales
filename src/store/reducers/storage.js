import * as actionTypes from '../actionTypes';

export const initialState = {
  storageData: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STORAGE:
      return {
        ...state,
        storageData: [...state.storageData, ...action.payload]
      };
    default:
      return state;
  }
};