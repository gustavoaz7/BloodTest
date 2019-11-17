import { ActionType } from 'redux-promise-middleware';
import { getBloodListTests } from '../getters';
import { testsMock } from '../../../mocks/tests';
import { LOAD_BLOOD_LIST_FULFILLED_STATE } from '../test.data';

describe('Redux - BloodList - getters', () => {
  const state = {
    bloodList: {
      tests: LOAD_BLOOD_LIST_FULFILLED_STATE,
    },
  };
  it('should return blood list', () => {
    expect(getBloodListTests(state)).toEqual({
      tests: {
        value: testsMock,
        status: ActionType.Fulfilled,
      },
    });
  });
});
