import {hookForm, Settings} from '../index';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export const SettingScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Settings" headerMode={'none'}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="hookForm" component={hookForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
