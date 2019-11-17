import { fetchBloodList } from '../../services/api';
import { sortTestsByDate } from '../../utils/sort';
import { BLOOD_LIST_LOAD } from './actions';

export const loadBloodListAC = () => dispatch =>
  dispatch({
    type: BLOOD_LIST_LOAD,
    payload: async () => {
      const tests = await fetchBloodList();
      const sortedTests = sortTestsByDate(tests);
      return sortedTests;
    },
  }).catch(e => {
    console.warn('loadBloodListAC error - ', e);
  });
