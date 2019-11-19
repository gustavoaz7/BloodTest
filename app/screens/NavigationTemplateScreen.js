import React from 'react';
import { View } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import Text from '../components/base/Text';
import Touchable from '../components/base/Touchable';
import { stackNavigationType, themeType } from '../types';

function NavigationTemplateScreen({ navigation, theme }) {
  const navigatedFrom = navigation.getParam('from');
  return (
    <Container>
      <Header>{'Out of Scope'}</Header>
      <Description>
        {'This feature is beyond the sample app.\nPlease wait for the final release.'}
      </Description>
      <Button theme={theme} onPress={() => navigation.goBack()}>
        <ButtonText>{`Go back to ${navigatedFrom}`}</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const Header = styled(Text)`
  font-size: 26px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 20px;
`;

const Button = styled(Touchable)`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  margin-top: 16px;
`;

const ButtonText = styled(Text)`
  color: white;
`;

NavigationTemplateScreen.propTypes = {
  navigation: stackNavigationType.isRequired,
  theme: themeType.isRequired,
};

export default withTheme(NavigationTemplateScreen);
