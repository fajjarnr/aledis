import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import Screen from '../../components/Screen';

export default function Welcome({navigation}) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/Group4.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to Aledis</Text>
        <Text style={styles.subTitle}>
          dapatkan info bencana secara up to date
        </Text>
        <Text style={styles.subTitle}>daftarkan diri anda segera</Text>
        <View style={styles.btnContainer}>
          <Button
            title="Sign Up With Email"
            onPress={() => navigation.navigate('Register')}
          />
          <Button
            title="Login"
            backgroundColor="white"
            color="black"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Overpass-Bold',
    fontSize: 24,
    marginTop: 34,
  },
  subTitle: {
    fontFamily: 'Overpass-Light',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 104,
  },
});
