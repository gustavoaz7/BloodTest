import React from 'react';
import { View, Text, Button } from 'react-native';
import { stackNavigationType } from '../types';

export default function BloodResultScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BloodResultScreen</Text>
      <Button title="Back to blood list" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

BloodResultScreen.propTypes = {
  navigation: stackNavigationType.isRequired,
};
