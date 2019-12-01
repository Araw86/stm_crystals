import * as TYPES from './types';

export const updateStateAction = objectToUpdate => dispatch => {
  dispatch({
    type: TYPES.UPDATE_STATE,
    payload: objectToUpdate
  });
};
