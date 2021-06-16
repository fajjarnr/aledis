import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NotificationScreen, Privacy, Profile, ProfileSettings} from '../pages';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    <Stack.Screen name="Privacy" component={Privacy} />
  </Stack.Navigator>
);

export default ProfileNavigator;
