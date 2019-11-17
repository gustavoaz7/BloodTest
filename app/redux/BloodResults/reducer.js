import { setPending, setFulfilled, setRejected, stateWithStatus } from '../utils/status';
import {
  BLOOD_RESULTS_LOAD_PENDING,
  BLOOD_RESULTS_LOAD_FULFILLED,
  BLOOD_RESULTS_LOAD_REJECTED,
} from './actions';

export const initialState = {
  results: stateWithStatus,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case BLOOD_RESULTS_LOAD_PENDING:
      return {
        ...state,
        results: setPending(state.results),
      };
    case BLOOD_RESULTS_LOAD_FULFILLED:
      return {
        ...state,
        results: setFulfilled(state.result, payload),
      };
    case BLOOD_RESULTS_LOAD_REJECTED:
      return {
        ...state,
        results: setRejected(state.result),
      };
    default:
      return state;
  }
}
