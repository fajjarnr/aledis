import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors'

const ChatisMe = () => {
  return (
    <View style={styles.page}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
        Hi, son, how are you doing? Today, my father and I went to buy a car, bought a cool car.
        </Text>
      </View>
      <Text style={styles.date}>4.45 AM</Text>
    </View>
  );
};

export default ChatisMe;

const styles = StyleSheet.create({
  page: {
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingRight: 16,
  },
  chatContent: {
    backgroundColor: colors.blue,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
  date: {
    fontSize: 11,
    color: colors.blackgray,
    marginTop: 8,
  },
});
