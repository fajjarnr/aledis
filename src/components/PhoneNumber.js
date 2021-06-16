import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';

export default function PhoneNumber({title, phoneNumber, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
      <TouchableOpacity style={styles.btnCall} onPress={onPress}>
        <Feather name="phone" size={22} color="white" />
        <Text style={styles.call}>Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 22,
    // backgroundColor: colors.primary,
  },
  btnCall: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 6,
    width: 96,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  call: {
    color: colors.white,
    fontFamily: 'Overpass-SemiBold',
    fontSize: 18,
  },
  title: {
    fontFamily: 'Overpass-SemiBold',
    fontSize: 18,
    marginBottom: 5,
  },
  txtContainer: {
    width: 200,
  },
});
