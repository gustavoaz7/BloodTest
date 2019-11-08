import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BloodResultScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BloodResultScreen</Text>
      <Button title="Back to blood list" onPress={() => props.navigation.goBack()} />
    </View>
  );
}
