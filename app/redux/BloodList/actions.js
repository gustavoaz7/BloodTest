import { ActionType } from 'redux-promise-middleware';

const NAMESPACE = 'BLOOD_LIST/';

export const BLOOD_LIST_LOAD = `${NAMESPACE}LOAD`;
export const BLOOD_LIST_LOAD_PENDING = `${NAMESPACE}LOAD_${ActionType.Pending}`;
export const BLOOD_LIST_LOAD_FULFILLED = `${NAMESPACE}LOAD_${ActionType.Fulfilled}`;
export const BLOOD_LIST_LOAD_REJECTED = `${NAMESPACE}LOAD_${ActionType.Rejected}`;
