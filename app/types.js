import PropTypes from 'prop-types';
import { ActionType } from 'redux-promise-middleware';

export const themeType = PropTypes.shape({
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
});

export const tabBarIconTypes = PropTypes.shape({
  focused: PropTypes.bool,
  horizontal: PropTypes.bool,
  tintColor: PropTypes.string,
});

export const stackNavigationType = PropTypes.shape({
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  dismiss: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  getParam: PropTypes.func.isRequired,
  setParams: PropTypes.func.isRequired,
  emit: PropTypes.func.isRequired,
  addListener: PropTypes.func.isRequired,
  isFocused: PropTypes.func.isRequired,
  isFirstRouteInParent: PropTypes.func.isRequired,
  dangerouslyGetParent: PropTypes.func.isRequired,
  router: PropTypes.func,
});

export const testResultType = PropTypes.shape({
  biomarker: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
});

export const bloodListItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(testResultType).isRequired,
});

export const sampleType = PropTypes.shape({
  time: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

export const resultType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  samples: PropTypes.arrayOf(sampleType).isRequired,
});

export const statusType = PropTypes.PropTypes.oneOf(Object.values(ActionType));

export const stateWithStatusType = PropTypes.shape({
  value: PropTypes.any,
  status: statusType,
});
