import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DonateSuccess, DonationDetail, ListDonation} from '../pages';

const Stack = createStackNavigator();

const DonationNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ListDonation" component={ListDonation} />
    <Stack.Screen name="DonationDetail" component={DonationDetail} />
    <Stack.Screen name="DonateSuccess" component={DonateSuccess} />
  </Stack.Navigator>
);

export default DonationNavigator;
