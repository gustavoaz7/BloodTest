import { createSelector } from 'reselect';

const getState = state => state;

export const getBloodList = createSelector(
  getState,
  ({ bloodList }) => bloodList,
);
