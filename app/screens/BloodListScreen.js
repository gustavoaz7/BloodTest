import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import ListItem from '../components/ListItem';

export default class BloodListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadTests();
  }

  loadTests = async () => {
    try {
      const { data: tests } = await axios.get('http://192.168.0.13:4000/tests');
      const sortedTests = this.sortTests(tests);
      this.setState({ tests: sortedTests, loading: false, error: false });
    } catch (e) {
      this.setState({ tests: [], error: true, loading: false });
      console.warn('BloodListScreen load tests error - ', e);
    }
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
    const { tests, loading, error } = this.state;
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
