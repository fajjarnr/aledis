import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  BlankPages,
  DisasterDetail,
  Home,
  ListPhoneNumber,
  NotificationScreen,
  TopUp,
  TopUpList,
  TopUpSuccess,
} from '../pages';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="TopUp" component={TopUp} />
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    <Stack.Screen name="DisasterDetail" component={DisasterDetail} />
    <Stack.Screen name="TopUpList" component={TopUpList} />
    <Stack.Screen name="TopUpSuccess" component={TopUpSuccess} />
    <Stack.Screen name="BlankPages" component={BlankPages} />
    <Stack.Screen name="ListPhoneNumber" component={ListPhoneNumber} />
  </Stack.Navigator>
);

export default HomeNavigator;
