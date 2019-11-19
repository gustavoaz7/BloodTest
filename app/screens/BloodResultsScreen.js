import React, { Component } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import BloodResultItem from '../components/BloodResultItem';
import PendingWrapper from '../components/PendingWrapper';
import { isRejected } from '../redux/utils/status';
import { stateWithStatusType, stackNavigationType } from '../types';
import { SCREENS } from '../constants';

export default class BloodResultScreen extends Component {
  static propTypes = {
    loadBloodResults: PropTypes.func.isRequired,
    results: stateWithStatusType.isRequired,
    navigation: stackNavigationType.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadResults();
  }

  loadResults = async () => {
    const { loadBloodResults } = this.props;
    loadBloodResults();
  };

  navigateTemplate = () => {
    this.props.navigation.navigate(SCREENS.TEMPLATE, { from: 'BloodResultsScreen' });
  };

  handleError() {
    Alert.alert(
      'Something went wrong :(',
      'There was a problem connecting to our servers.\n\nPlease try again in a few seconds.',
      [
        {
          text: 'Try again',
          onPress: this.loadResults,
        },
      ],
    );
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem = ({ item }) => {
    return <BloodResultItem item={item} onPress={this.navigateTemplate} />;
  };

  renderSeparator() {
    return <Separator />;
  }

  render() {
    const { results } = this.props;

    if (isRejected(results)) {
      this.handleError();
      return null;
    }
    return (
      <PendingWrapper value={results}>
        <FlatListUI
          data={results.value}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={false}
          onRefresh={this.loadResults}
          contentContainerStyle={styles.contentStyle}
        />
      </PendingWrapper>
    );
  }
}

export const FlatListUI = styled(FlatList)`
  background-color: 'rgba(0, 0, 0, 0.05)';
`;

const Separator = styled(View)`
  height: 12px;
`;

const styles = StyleSheet.create({
  contentStyle: {
    padding: 12,
  },
});
