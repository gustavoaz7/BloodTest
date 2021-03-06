import React, { Component } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { isRejected } from '../redux/utils/status';
import { stateWithStatusType, stackNavigationType } from '../types';
import ListItem from '../components/ListItem';
import PendingWrapper from '../components/PendingWrapper';
import { SCREENS } from '../constants';

export default class BloodListScreen extends Component {
  static propTypes = {
    loadBloodList: PropTypes.func.isRequired,
    tests: stateWithStatusType.isRequired,
    navigation: stackNavigationType.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadTests();
  }

  loadTests = () => {
    const { loadBloodList } = this.props;
    loadBloodList();
  };

  navigateTemplate = () => {
    this.props.navigation.navigate(SCREENS.TEMPLATE, { from: 'BloodListScreen' });
  };

  handleError() {
    Alert.alert(
      'Something went wrong :(',
      'There was a problem connecting to our servers.\n\nPlease try again in a few seconds.',
      [
        {
          text: 'Try again',
          onPress: this.loadTests,
        },
      ],
    );
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem = ({ item }) => {
    return <ListItem item={item} onPress={this.navigateTemplate} />;
  };

  renderSeparator() {
    return <Separator />;
  }

  render() {
    const { tests } = this.props;

    if (isRejected(tests)) {
      this.handleError();
      return null;
    }

    return (
      <PendingWrapper value={tests}>
        <FlatListUI
          data={tests.value}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={false}
          onRefresh={this.loadTests}
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
