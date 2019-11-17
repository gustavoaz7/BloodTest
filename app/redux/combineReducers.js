import { combineReducers } from 'redux';
import bloodList from './BloodList/reducer';
import bloodResults from './BloodResults/reducer';

const rootReducer = combineReducers({
  bloodList,
  bloodResults,
});

export default rootReducer;
