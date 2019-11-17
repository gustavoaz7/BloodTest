import { ActionType } from 'redux-promise-middleware';
import { initialState } from './reducer';
import {
  BLOOD_RESULTS_LOAD_PENDING,
  BLOOD_RESULTS_LOAD_FULFILLED,
  BLOOD_RESULTS_LOAD_REJECTED,
} from './actions';
import { resultsMock } from '../../mocks/results';

export const LOAD_BLOOD_RESULTS_PENDING_ACTION = { type: BLOOD_RESULTS_LOAD_PENDING };
export const LOAD_BLOOD_RESULTS_PENDING_STATE = {
  ...initialState,
  results: { value: null, status: ActionType.Pending },
};

export const LOAD_BLOOD_RESULTS_FULFILLED_ACTION = {
  type: BLOOD_RESULTS_LOAD_FULFILLED,
  payload: resultsMock,
};
export const LOAD_BLOOD_RESULTS_FULFILLED_STATE = {
  ...initialState,
  results: { value: resultsMock, status: ActionType.Fulfilled },
};

export const LOAD_BLOOD_RESULTS_REJECTED_ACTION = { type: BLOOD_RESULTS_LOAD_REJECTED };
export const LOAD_BLOOD_RESULTS_REJECTED_STATE = {
  ...initialState,
  results: { value: null, status: ActionType.Rejected },
};
