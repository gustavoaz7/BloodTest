import { ActionType } from 'redux-promise-middleware';
import { getBloodList } from '../getters';
import { testsMock } from '../../../mocks/tests';
import { LOAD_BLOOD_LIST_SUCCESS_STATE } from '../test.data';

describe('Redux - BloodList - getters', () => {
  it('should return blood list', () => {
    expect(getBloodList({ bloodList: LOAD_BLOOD_LIST_SUCCESS_STATE })).toEqual({
      tests: {
        value: testsMock,
        status: ActionType.Fulfilled,
      },
    });
  });
});
