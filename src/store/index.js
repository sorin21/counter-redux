import { combineReducers } from 'redux';
import rootReducer from './counterReducer';
import resultReducer from './resultReducer';

export default combineReducers({
  count: rootReducer,
  results: resultReducer
});