import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';

export default function Privacy({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image source={require('../../assets/Images/noaccess.png')} />
      <Text style={styles.title}>Maaf Halaman Ini Belum Tersedia</Text>
      <Text style={styles.subTitle}>
        Silahkan kembali ke halman yang sebelumnya
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack('Profile')} />
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
    fontSize: 20,
    marginTop: 30,
  },
  btnContainer: {
    marginTop: 60,
  },
  subTitle: {
    fontFamily: 'Overpass-Light',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
  },
});
