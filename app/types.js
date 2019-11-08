import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
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
