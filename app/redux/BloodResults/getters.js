import { createSelector } from 'reselect';

const getState = state => state;

export const getBloodResults = createSelector(
  getState,
  ({ bloodResults }) => bloodResults.results,
);
