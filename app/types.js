import PropTypes from 'prop-types';

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

export const resultType = PropTypes.shape({
  biomarker: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
});

export const bloodListItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(resultType).isRequired,
});
