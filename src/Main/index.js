import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export default function Main({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home/Main Screen</Text>
      {/* eslint-disable-next-line react/prop-types */}
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </View>
  );
}
