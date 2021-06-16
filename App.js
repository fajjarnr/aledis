import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import theme from './src/config/theme';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';

export default function App({navigation}) {
  return (
    <>
      <NavigationContainer theme={theme}>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}
