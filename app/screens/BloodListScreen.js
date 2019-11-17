import React, { Component } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { isRejected } from '../redux/utils/status';
import { statusType } from '../types';
import ListItem from '../components/ListItem';
import PendingWrapper from '../components/PendingWrapper';

export default class BloodListScreen extends Component {
  static propTypes = {
    loadBloodList: PropTypes.func.isRequired,
    tests: PropTypes.shape({
      value: PropTypes.any,
      status: statusType,
    }).isRequired,
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

  renderItem({ item }) {
    return <ListItem item={item} />;
  }

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
