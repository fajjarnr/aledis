import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

export default function AppButton({
  title,
  onPress,
  backgroundColor = 'primary',
  color = 'white',
  width = 300,
  borderRadius = 30,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors[backgroundColor],
          width: width,
          borderRadius: borderRadius,
        },
      ]}>
      <Text style={[styles.text, {color: colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    // shadowColor: colors.primary,
    // elevation: 10,
    // shadowRadius: 10,
    // shadowOffset: {width: 10, height: 2},
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Overpass-Bold',
    textTransform: 'uppercase',
  },
});
