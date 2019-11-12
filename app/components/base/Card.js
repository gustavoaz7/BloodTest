import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

export default function Card({ style, children }) {
  return <Container style={style}>{children}</Container>;
}

const Container = styled(View)`
  padding: 10px 16px;
  border-radius: 12px;
  background-color: white;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: 'rgba(0, 0, 0, 0.5)';
`;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

Card.defaultProps = {
  style: null,
};
