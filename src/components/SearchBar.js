import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

export default function SearchBar({...props}) {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-outline" size={24} style={styles.icon} />
      <TextInput placeholder="seacrh" style={styles.textInput} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.light,
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    width: '90%',
  },
  textInput: {
    color: 'black',
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 10,
  },
});
