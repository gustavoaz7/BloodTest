import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import DiagramLabel from './DiagramLabel';
import { testResultType } from '../types';

export default function ResultDiagram({ result }) {
  return (
    <>
      <BarContainer>
        {result.map(({ color, percentage }, index) => (
          <Bar key={`${color}-${percentage}`}>
            {index !== 0 && <Separator />}
            <BarSection color={color} percentage={percentage} />
          </Bar>
        ))}
      </BarContainer>
      <LabelBox>
        {result.map(resultItem => (
          <DiagramLabel
            key={`${resultItem.biomarker}-${resultItem.color}`}
            style={styles.diagramLabel}
            result={resultItem}
          />
        ))}
      </LabelBox>
    </>
  );
}

const styles = StyleSheet.create({
  diagramLabel: {
    width: '50%',
  },
});

const Row = styled(View)`
  flex-direction: row;
`;

const Bar = styled(Row)`
  flex: 1;
`;

const BarContainer = styled(View)`
  flex-direction: row;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const Separator = styled(View)`
  width: 1px;
`;

const BarSection = styled(View)`
  ${({ color }) => `background-color: ${color}`};
  ${({ percentage }) => `flex: ${percentage}`};
`;

const LabelBox = styled(Row)`
  flex: 1;
  flex-wrap: wrap;
`;

ResultDiagram.propTypes = {
  result: PropTypes.arrayOf(testResultType).isRequired,
};
