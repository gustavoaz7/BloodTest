import React, { Component } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import BloodResultItem from '../components/BloodResultItem';
import { getBloodResult } from '../services/api';

export default class BloodResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: false,
      loading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.loadResults();
  }

  loadResults = async () => {
    try {
      const results = await getBloodResult();
      this.setState({ results, loading: false, error: false, refreshing: false });
    } catch (e) {
      this.setState({ results: [], error: true, loading: false, refreshing: false });
      console.warn('BloodListScreen load tests error - ', e);
    }
  };

  handleRefresh = () => {
    this.setState({ refreshing: true });
    this.loadResults();
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

  renderItem({ item }) {
    return <BloodResultItem item={item} />;
  }

  renderSeparator() {
    return <Separator />;
  }

  render() {
    const { results, loading, error, refreshing } = this.state;
    if (loading) return <Loading />;
    if (error) {
      this.handleError();
      return null;
    }
    return (
      <FlatListUI
        data={results}
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

const FlatListUI = styled(FlatList)`
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
