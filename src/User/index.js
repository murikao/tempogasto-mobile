/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Button} from 'react-native';
// import 'react-native-gesture-handler';
// import { Container } from './styles';

export default function User({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Screen</Text>
      <Button
        title="Go to User... again"
        onPress={() => navigation.push('User')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Main')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
