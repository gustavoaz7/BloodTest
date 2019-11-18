import React from 'react';
import { Text } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';
import { themeType } from '../../types';

function TextUI({ children, theme, ...rest }) {
  return <ThemedText {...rest}>{children}</ThemedText>;
}

const ThemedText = styled(Text)`
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.fontFamily};
`;

TextUI.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  theme: themeType.isRequired,
};

export default withTheme(TextUI);
