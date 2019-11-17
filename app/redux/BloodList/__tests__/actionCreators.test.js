import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { loadBloodListAC } from '../actionCreators';
import {
  BLOOD_LIST_LOAD_PENDING,
  BLOOD_LIST_LOAD_FULFILLED,
  BLOOD_LIST_LOAD_REJECTED,
} from '../actions';
import { testsMock } from '../../../mocks/tests';
import { initialState } from '../reducer';

const middlewares = [thunk, createPromise()];

const mockStore = configureMockStore(middlewares);

describe('Redux - BloodList - actionCreators', () => {
  const store = mockStore(initialState);

  beforeEach(() => {
    store.clearActions();
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: testsMock }));
  });

  describe('loadBloodListAC', () => {
    it('loadBloodListAC dispatches actions on successful request', async () => {
      const expectedActions = [BLOOD_LIST_LOAD_PENDING, BLOOD_LIST_LOAD_FULFILLED];

      await store.dispatch(loadBloodListAC());

      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });

    it('loadBloodListAC dispatches actions on rejected request', async () => {
      const expectedActions = [BLOOD_LIST_LOAD_PENDING, BLOOD_LIST_LOAD_REJECTED];
      axios.get = jest.fn().mockImplementation(() => Promise.reject());

      await store.dispatch(loadBloodListAC());

      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
