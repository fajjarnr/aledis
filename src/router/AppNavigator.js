import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';
import DonationNavigator from './DonationNavigator';
import {PostDisaster} from '../pages';
import ChatNavigator from './ChatNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="home" size={24} color={colors.primary} />
        ),
      }}
    />
    <Tab.Screen
      name="Donasi"
      component={DonationNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="heart" size={24} color={colors.primary} />
        ),
      }}
    />
    <Tab.Screen
      name="Post"
      component={PostDisaster}
      options={{
        tabBarIcon: ({color, size}) => (
          <View style={styles.add_container}>
            <Feather name="plus-square" size={24} color={colors.white} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="message-circle" size={24} color={colors.primary} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="user" size={24} color={colors.dark} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  add_container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 40,
    width: 40,
  },
});
