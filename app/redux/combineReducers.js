import { combineReducers } from 'redux';
import bloodList from './BloodList/reducer';

const rootReducer = combineReducers({
  bloodList,
});

export default rootReducer;
