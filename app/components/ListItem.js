import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { bloodListItemType } from '../types';
import ResultDiagram from './ResultDiagram';

export default function ListItem({ item: { title, date, result } }) {
  return (
    <Container>
      <Header>
        <Bold>{title}</Bold>
        <Date>{date}</Date>
      </Header>
      <ResultDiagramUI result={result} />
    </Container>
  );
}

const Container = styled(View)`
  padding: 10px 16px;
  border-radius: 12px;
  background-color: white;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: 'rgba(0, 0, 0, 0.5)';
`;

const Row = styled(View)`
  flex-direction: row;
`;

const Header = styled(Row)`
  justify-content: space-between;
  margin-bottom: 4px;
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
