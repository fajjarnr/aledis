import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';

export default function TopUpSuccess({navigation, route}) {
  const top_up = route.params;
  return (
    <Screen style={styles.container}>
      <Image source={require('../../assets/Images/Ceklist.png')} />
      <Text style={styles.title}>Top Up Rp. {top_up} Success</Text>
      <Text style={styles.subTitle}>Your Top Up has ben Successfully</Text>
      <View style={styles.btnContainer}>
        <Button title="Done" onPress={() => navigation.navigate('Home')} />
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
