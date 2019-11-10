import React from 'react';
import { View } from 'react-native';
import PropType from 'prop-types';
import styled from 'styled-components/native';
import Text from './base/Text';
import { resultType } from '../types';

export default function ResultDiagram({ result, style }) {
  return result.map(({ biomarker, color, percentage }) => (
    <Row style={style} key={`${biomarker}-${color}`}>
      <BiomarkerContainer>
        <Text>{biomarker}</Text>
      </BiomarkerContainer>
      <Diagram>
        <Text>{`${percentage}%`}</Text>
        <BarContainer>
          <Bar color={color} percentage={35} />
        </BarContainer>
      </Diagram>
    </Row>
  ));
}

const Row = styled(View)`
  flex-direction: row;
`;

const BiomarkerContainer = styled(View)`
  flex: 2;
`;

const Diagram = styled(View)`
  flex: 3;
  flex-direction: row;
  align-items: center;
`;

const BarContainer = styled(View)`
  flex: 1;
`;

const Bar = styled(View)`
  ${({ color }) => `background-color: ${color}`};
  ${({ percentage }) => `width: ${percentage}%`};
  height: 16px;
  border-radius: 8px;
  margin-left: 8px;
`;

ResultDiagram.propTypes = {
  result: PropType.arrayOf(resultType).isRequired,
};
