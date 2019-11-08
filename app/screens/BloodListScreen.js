import React from 'react';
import { View, Text, Button } from 'react-native';
import { stackNavigationType } from '../types';

export default function BloodListScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BloodListScreen</Text>
      <Button
        title="Go to results screen"
        onPress={() => props.navigation.navigate('BloodResult')}
      />
    </View>
  );
}

BloodListScreen.propTypes = {
  navigation: stackNavigationType.isRequired,
};
