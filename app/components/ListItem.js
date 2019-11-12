import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from './base/Text';
import Card from './base/Card';
import { bloodListItemType } from '../types';
import ResultDiagram from './ResultDiagram';

export default function ListItem({ item: { title, date, result } }) {
  return (
    <Card>
      <Header>
        <Bold>{title}</Bold>
        <Date>{date}</Date>
      </Header>
      <ResultDiagramUI result={result} />
    </Card>
  );
}

const Row = styled(View)`
  flex-direction: row;
`;

const Header = styled(Row)`
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Bold = styled(Text)`
  font-weight: bold;
`;

const Date = styled(Text)`
  color: 'rgba(0, 0, 0, 0.5)';
`;

const ResultDiagramUI = styled(ResultDiagram)`
  margin: 2px 10px;
`;

ListItem.propTypes = {
  item: bloodListItemType.isRequired,
};
