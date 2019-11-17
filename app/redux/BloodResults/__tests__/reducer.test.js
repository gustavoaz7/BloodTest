import reducer, { initialState } from '../reducer';
import {
  BLOOD_RESULTS_LOAD_PENDING,
  BLOOD_RESULTS_LOAD_FULFILLED,
  BLOOD_RESULTS_LOAD_REJECTED,
} from '../actions';
import {
  LOAD_BLOOD_RESULTS_PENDING_ACTION,
  LOAD_BLOOD_RESULTS_PENDING_STATE,
  LOAD_BLOOD_RESULTS_FULFILLED_ACTION,
  LOAD_BLOOD_RESULTS_FULFILLED_STATE,
  LOAD_BLOOD_RESULTS_REJECTED_ACTION,
  LOAD_BLOOD_RESULTS_REJECTED_STATE,
} from '../test.data';

describe('Redux - BloodResult - reducer', () => {
  it('should be instantiated with `initialState`', () => {
    expect(reducer()).toEqual(initialState);
  });

  it(`should handle ${BLOOD_RESULTS_LOAD_PENDING}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_RESULTS_PENDING_ACTION);

    expect(state).toEqual(LOAD_BLOOD_RESULTS_PENDING_STATE);
  });

  it(`should handle ${BLOOD_RESULTS_LOAD_FULFILLED}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_RESULTS_FULFILLED_ACTION);
    expect(state).toEqual(LOAD_BLOOD_RESULTS_FULFILLED_STATE);
  });

  it(`should handle ${BLOOD_RESULTS_LOAD_REJECTED}`, () => {
    const state = reducer(initialState, LOAD_BLOOD_RESULTS_REJECTED_ACTION);
    expect(state).toEqual(LOAD_BLOOD_RESULTS_REJECTED_STATE);
  });
});
