import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false, // apenas para IOS nao aparecer o titulo de retorno / android ja eh default
          headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: '#fff', // cor do titulo
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Início',
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          // inserindo titulo da apgina nome por parametro
          options={({route}) => ({title: route.params.user.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
