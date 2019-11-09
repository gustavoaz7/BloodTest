import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { theme } from '../theme';

export default function Loading(props) {
  const { size, color } = props;
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
  color: theme.primary,
};
