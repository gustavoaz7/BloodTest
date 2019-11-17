import { ActionType } from 'redux-promise-middleware';
import { getBloodResults } from '../getters';
import { resultsMock } from '../../../mocks/results';
import { LOAD_BLOOD_RESULTS_FULFILLED_STATE } from '../test.data';

describe('Redux - BloodResult - getters', () => {
  const state = {
    bloodResults: {
      results: LOAD_BLOOD_RESULTS_FULFILLED_STATE,
    },
  };
  it('should return blood result', () => {
    expect(getBloodResults(state)).toEqual({
      results: {
        value: resultsMock,
        status: ActionType.Fulfilled,
      },
    });
  });
});
