import { createSelector } from 'reselect';

const getState = state => state;

export const getBloodListTests = createSelector(
  getState,
  ({ bloodList }) => bloodList.tests,
);
