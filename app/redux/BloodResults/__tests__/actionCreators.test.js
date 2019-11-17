import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { loadBloodResultsAC } from '../actionCreators';
import {
  BLOOD_RESULTS_LOAD_PENDING,
  BLOOD_RESULTS_LOAD_FULFILLED,
  BLOOD_RESULTS_LOAD_REJECTED,
} from '../actions';
import { resultsMock } from '../../../mocks/results';
import { initialState } from '../reducer';

const middlewares = [thunk, createPromise()];

const mockStore = configureMockStore(middlewares);

describe('Redux - BloodList - actionCreators', () => {
  const store = mockStore(initialState);

  beforeEach(() => {
    store.clearActions();
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: resultsMock }));
  });

  describe('loadBloodResultsAC', () => {
    it('loadBloodResultsAC dispatches actions on successful request', async () => {
      const expectedActions = [BLOOD_RESULTS_LOAD_PENDING, BLOOD_RESULTS_LOAD_FULFILLED];

      await store.dispatch(loadBloodResultsAC());

      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });

    it('loadBloodResultsAC dispatches actions on rejected request', async () => {
      const expectedActions = [BLOOD_RESULTS_LOAD_PENDING, BLOOD_RESULTS_LOAD_REJECTED];
      axios.get = jest.fn().mockImplementation(() => Promise.reject());

      await store.dispatch(loadBloodResultsAC());

      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
