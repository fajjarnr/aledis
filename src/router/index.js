import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from '../components/BottomNavigator';
import {
  ChatRoom,
  ChatScreen,
  DisasterDetail,
  DonateSuccess,
  EditProfile,
  DonationDetail,
  Home,
  ListDonation,
  ListPhoneNumber,
  Login,
  LoginSuccess,
  Messages,
  NotificationScreen,
  OnboardingScreen,
  PostDisaster,
  Privacy,
  Profile,
  Register,
  Splash,
  TopUp,
  TopUpSuccess,
  VerifyOTP,
  Welcome,
  ProfileSettings,
  TopUpList,
  BlankPages,
} from '../pages';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Bottom.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Bottom.Screen name="home" component={Home} />
      <Bottom.Screen name="love" component={ListDonation} />
      <Bottom.Screen name="add" component={PostDisaster} />
      <Bottom.Screen name="chat" component={ChatScreen} />
      <Bottom.Screen name="person" component={Profile} />
    </Bottom.Navigator>
  );
};

const Router = () => {
  return (
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
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ListDonation" component={ListDonation} />
      <Stack.Screen name="TopUpSuccess" component={TopUpSuccess} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="DonateSuccess" component={DonateSuccess} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="TopUp" component={TopUp} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="ListPhoneNumber" component={ListPhoneNumber} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="TopUpList" component={TopUpList} />
      <Stack.Screen name="BlankPages" component={BlankPages} />
      <Stack.Screen name="DisasterDetail" component={DisasterDetail} />
      <Stack.Screen name="DonationDetail" component={DonationDetail} />
    </Stack.Navigator>
  );
};

export default Router;
