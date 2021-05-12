import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './screens/onBoarding';
import MainTabbar from './screens/MainTabbar/index';
import Splash from './screens/Auth/Splash/Splash.index';
import Signin from './screens/Auth/SignIn/Signin.index';
import SignUp from './screens/Auth/SignUp/SignUp.index';
import Home from './screens/Home';
import TextFile from './screens/Text/index';
import {HomeScreen} from './screens/Stacks';

const stack = createStackNavigator();

export default function AppStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator headerMode="Onboarding">
          <stack.Screen name="Onboarding" component={Onboarding} />
          <stack.Screen name="Splash" component={Splash} />
          <stack.Screen name="Signin" component={Signin} />
          <stack.Screen name="SignUp" component={SignUp} />
          <stack.Screen name="MainTabbar" component={MainTabbar} />
          {/* <stack.Screen name="Home" component={Home} />
          <stack.Screen name="TextFile" component={TextFile} /> */}
          <stack.Screen name="HomeScreen" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
