import {Signin, SignUp, Splash} from '../index';

export const AuthScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode={'none'}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
