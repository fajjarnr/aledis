import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';

export default function LoginSuccess({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image source={require('../../assets/Images/Ceklist.png')} />
      <Text style={styles.title}>Phone Number Verified</Text>
      <Text style={styles.subTitle}>Congradulations, your phone </Text>
      <Text style={styles.subTitle}> number has been verified. You can </Text>
      <Text style={styles.subTitle}>start using the app</Text>
      <View style={styles.btnContainer}>
        <Button
          title="CONTINUE"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Overpass-Bold',
    fontSize: 24,
    marginTop: 30,
  },
  subTitle: {
    fontFamily: 'Overpass-Light',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 60,
  },
});
