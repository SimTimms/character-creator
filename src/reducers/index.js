import { combineReducers } from 'redux';
import ContentReducer from './reducer-content';

const rootReducer = combineReducers({
  content: ContentReducer,
});

export default rootReducer;
