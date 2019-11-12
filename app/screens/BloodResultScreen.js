import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import BloodResultItem from '../components/BloodResultItem';

export default class BloodResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadResults();
  }

  loadResults = async () => {
    try {
      const { data: results } = await axios.get('http://192.168.0.13:4000/results');
      this.setState({ results, loading: false, error: false });
    } catch (e) {
      this.setState({ results: [], error: true, loading: false });
      console.warn('BloodListScreen load tests error - ', e);
    }
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
    const { results, loading, error } = this.state;
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
      />
    );
  }
}

const FlatListUI = styled(FlatList)`
  padding: 12px;
  background-color: 'rgba(0, 0, 0, 0.05)';
`;

const Separator = styled(View)`
  height: 12px;
`;
