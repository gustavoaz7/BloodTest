import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const logo = require('../../../assets/logo.png');

export default function NavigationHeaderImage() {
  return (
    <Container>
      <HeaderImage source={logo} resizeMode="contain" resizeMethod="resize" />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;

export const HeaderImage = styled(Image)`
  flex: 1;
  width: 100%;
`;
