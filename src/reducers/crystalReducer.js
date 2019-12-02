import * as TYPES from '../actions/types';

const initialState = { lsef: 32768, lsecl: 0, lsegmcrit: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
