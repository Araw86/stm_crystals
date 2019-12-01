import * as TYPES from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
