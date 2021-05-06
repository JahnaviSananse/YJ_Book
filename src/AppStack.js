import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './screens/onBoarding';
import Home from './screens/Home/Home.index';

const stack = createStackNavigator();

export default function AppStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator headerMode="Onboarding">
          <stack.Screen name="Onboarding" component={Onboarding} />
          <stack.Screen name="Home" component={Home} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
