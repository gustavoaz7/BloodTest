import { ActionType } from 'redux-promise-middleware';
import { initialState } from './reducer';
import {
  BLOOD_LIST_LOAD_PENDING,
  BLOOD_LIST_LOAD_FULFILLED,
  BLOOD_LIST_LOAD_REJECTED,
} from './actions';
import { testsMock } from '../../mocks/tests';

export const LOAD_BLOOD_LIST_PENDING_ACTION = { type: BLOOD_LIST_LOAD_PENDING };
export const LOAD_BLOOD_LIST_PENDING_STATE = {
  ...initialState,
  tests: { value: null, status: ActionType.Pending },
};

export const LOAD_BLOOD_LIST_FULFILLED_ACTION = {
  type: BLOOD_LIST_LOAD_FULFILLED,
  payload: testsMock,
};
export const LOAD_BLOOD_LIST_FULFILLED_STATE = {
  ...initialState,
  tests: { value: testsMock, status: ActionType.Fulfilled },
};

export const LOAD_BLOOD_LIST_REJECTED_ACTION = { type: BLOOD_LIST_LOAD_REJECTED };
export const LOAD_BLOOD_LIST_REJECTED_STATE = {
  ...initialState,
  tests: { value: null, status: ActionType.Rejected },
};
