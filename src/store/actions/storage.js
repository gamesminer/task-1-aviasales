import {StorageService} from '../../services/StorageService'
import * as actionTypes from '../actionTypes';
import {compare} from "../../components/helpers";

export const fetchData = async (dispatch, callback) => {
  const storage = await StorageService.fetchAllStorage();
  storage.sort(compare);
  callback();

  return dispatch({
    type: actionTypes.FETCH_STORAGE,
    payload: storage
  });
};