import { ActionType } from 'redux-promise-middleware';

export const stateWithStatus = {
  value: null,
  status: null,
};

export function setPending(state) {
  return { ...state, status: ActionType.Pending };
}

export function setFulfilled(state, payload = null) {
  return { ...state, status: ActionType.Fulfilled, value: payload };
}

export function setRejected(state, payload = null) {
  return { ...state, status: ActionType.Rejected, value: payload };
}

export function isPending(value) {
  return value.status === ActionType.Pending;
}

export function isFulfilled(value) {
  return value.status === ActionType.Fulfilled;
}

export function isRejected(value) {
  return value.status === ActionType.Rejected;
}

export function isInitialized(value) {
  return Boolean(value.status);
}
