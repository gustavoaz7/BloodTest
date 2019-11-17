import { fetchBloodResults } from '../../services/api';
import { BLOOD_RESULTS_LOAD } from './actions';

export const loadBloodResultsAC = () => dispatch =>
  dispatch({
    type: BLOOD_RESULTS_LOAD,
    async payload() {
      return fetchBloodResults();
    },
  }).catch(e => {
    console.warn('loadBloodResultsAC error - ', e);
  });
