import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors'

const ChatisOther = () => {
  return (
    <View style={styles.page}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.45 AM</Text>
    </View>
  );
};

export default ChatisOther;

const styles = StyleSheet.create({
  page: {
    marginBottom: 10,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    backgroundColor: colors.whiteGray,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
  date: {
    fontSize: 11,
    color: colors.blackgray,
    marginTop: 8,
  },
});
