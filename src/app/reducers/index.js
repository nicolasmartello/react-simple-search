import { combineReducers } from 'redux';
import list from './list';
import favorites from './favorites';

export default combineReducers({
  list,
  favorites,
});
