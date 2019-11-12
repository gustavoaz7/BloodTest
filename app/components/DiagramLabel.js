import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';
import Text from './base/Text';
import { testResultType } from '../types';

export default function DiagramLabel({ style, result: { color, percentage, biomarker } }) {
  return (
    <Container style={style}>
      <ColoredDot color={color} />
      <Percentage>{`${percentage}%`}</Percentage>
      <Biomarker>{biomarker}</Biomarker>
    </Container>
  );
}

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ColoredDot = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  ${({ color }) => `background-color: ${color}`};
`;

const Percentage = styled(Text)`
  margin: 0 6px;
`;

const Biomarker = styled(Text)``;

DiagramLabel.propTypes = {
  result: testResultType.isRequired,
  style: ViewPropTypes.style,
};

DiagramLabel.defaultProps = {
  style: null,
};
