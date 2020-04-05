import React from 'react';
import {Text, Button} from 'react-native';

import {Container} from './styles';

// eslint-disable-next-line react/prop-types
export default function Main({navigation}) {
  return (
    <Container>
      <Text>Home/Main Screen</Text>
      {/* eslint-disable-next-line react/prop-types */}
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </Container>
  );
}
