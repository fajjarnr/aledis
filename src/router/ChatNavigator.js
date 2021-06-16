import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ChatRoom, ChatScreen} from '../pages';

const Stack = createStackNavigator();

const ChatNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ChatScreen" component={ChatScreen} />
    <Stack.Screen name="ChatRoom" component={ChatRoom} />
  </Stack.Navigator>
);

export default ChatNavigator;
