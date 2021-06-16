import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Login,
  LoginSuccess,
  Register,
  VerifyOTP,
  OnboardingScreen,
  Welcome,
  Splash,
  Home,
} from '../pages';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
    <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AuthNavigator;
