import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import axios from 'axios';
import Loading from '../components/Loading';

export default class BloodListScreen extends Component {
  state = {
    tests: [],
    error: false,
    loading: true,
  };

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
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    const { tests, loading, error } = this.state;
    if (loading) return <Loading />;
    if (error) {
      this.handleError();
      return null;
    }
    return <FlatList data={tests} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />;
  }
}
