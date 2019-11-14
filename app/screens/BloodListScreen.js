import React, { Component } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import ListItem from '../components/ListItem';
import { getBloodList } from '../services/api';

export default class BloodListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      error: false,
      loading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.loadTests();
  }

  loadTests = async () => {
    try {
      const tests = await getBloodList();
      const sortedTests = this.sortTests(tests);
      this.setState({ tests: sortedTests, loading: false, error: false, refreshing: false });
    } catch (e) {
      this.setState({ tests: [], error: true, loading: false, refreshing: false });
      console.warn('BloodListScreen load tests error - ', e);
    }
  };

  handleRefresh = () => {
    this.setState({ refreshing: true });
    this.loadTests();
  };

  sortTests(tests) {
    return tests.sort((a, b) => {
      const aa = a.date
        .split('.')
        .reverse()
        .join();
      const bb = b.date
        .split('.')
        .reverse()
        .join();
      if (aa < bb) return 1;
      if (aa > bb) return -1;
      return 0;
    });
  }

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
    const { tests, loading, error, refreshing } = this.state;
    if (loading) return <Loading />;
    if (error) {
      this.handleError();
      return null;
    }
    return (
      <FlatListUI
        data={tests}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
        contentContainerStyle={styles.contentStyle}
      />
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
