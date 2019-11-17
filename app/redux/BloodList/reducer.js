import { setPending, setFulfilled, setRejected, stateWithStatus } from '../utils/status';
import {
  BLOOD_LIST_LOAD_PENDING,
  BLOOD_LIST_LOAD_FULFILLED,
  BLOOD_LIST_LOAD_REJECTED,
} from './actions';

export const initialState = {
  tests: stateWithStatus,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case BLOOD_LIST_LOAD_PENDING:
      return {
        ...state,
        tests: setPending(state.tests),
      };
    case BLOOD_LIST_LOAD_FULFILLED:
      return {
        ...state,
        tests: setFulfilled(state.tests, payload),
      };
    case BLOOD_LIST_LOAD_REJECTED:
      return {
        ...state,
        tests: setRejected(state.tests),
      };
    default:
      return state;
  }
}
