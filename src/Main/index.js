import React from 'react';
import { View ,Text,Button} from 'react-native';

// import { Container } from './styles';

export default function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home/Main Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}
