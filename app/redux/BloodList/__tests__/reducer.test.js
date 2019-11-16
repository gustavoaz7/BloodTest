import reducer, { initialState } from '../reducer';
import {
  BLOOD_LIST_LOAD_PENDING,
  BLOOD_LIST_LOAD_FULFILLED,
  BLOOD_LIST_LOAD_REJECTED,
} from '../actions';
import {
  LOAD_BLOOD_LIST_PENDING_ACTION,
  LOAD_BLOOD_LIST_PENDING_STATE,
  LOAD_BLOOD_LIST_SUCCESS_ACTION,
  LOAD_BLOOD_LIST_SUCCESS_STATE,
  LOAD_BLOOD_LIST_REJECTED_ACTION,
  LOAD_BLOOD_LIST_REJECTED_STATE,
} from '../test.data';

describe('Redux - BloodList - reducer', () => {
  it('should be instantiated with `initialState`', () => {
    expect(reducer()).toEqual(initialState);
  });

  it(`should handle ${BLOOD_LIST_LOAD_PENDING}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_LIST_PENDING_ACTION);
    expect(state).toEqual(LOAD_BLOOD_LIST_PENDING_STATE);
  });

  it(`should handle ${BLOOD_LIST_LOAD_FULFILLED}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_LIST_SUCCESS_ACTION);
    expect(state).toEqual(LOAD_BLOOD_LIST_SUCCESS_STATE);
  });

  it(`should handle ${BLOOD_LIST_LOAD_REJECTED}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_LIST_REJECTED_ACTION);
    expect(state).toEqual(LOAD_BLOOD_LIST_REJECTED_STATE);
  });
});
