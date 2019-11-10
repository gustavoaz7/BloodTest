import { Text } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export default styled(Text)`
  color: ${theme.secondary};
  font-family: ${theme.fontFamily};
`;
