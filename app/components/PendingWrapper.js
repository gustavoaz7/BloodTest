import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { isPending } from '../redux/utils/status';

export default function PendingWrapper({ children, value, loadingProps }) {
  if (isPending(value)) return <Loading {...loadingProps} />;

  return children;
}

/* eslint-disable react/forbid-prop-types */
PendingWrapper.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
  loadingProps: PropTypes.objectOf(PropTypes.string),
};

PendingWrapper.defaultProps = {
  loadingProps: null,
};
