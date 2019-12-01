import { combineReducers } from 'redux';
import crystalReducer from './crystalReducer';

export default combineReducers({
  crystal: crystalReducer
});
