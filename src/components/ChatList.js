import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../config/colors';

const ChatList = ({name, lastchat, time, readstatus, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.page}>
        <Image
          style={styles.photo}
          source={require('../assets/Images/ricardo.png')}
        />
        <View style={styles.viewText}>
          <Text style={styles.nama}>{name}</Text>
          <Text style={styles.lastChat}>{lastchat}</Text>
        </View>
        <View style={styles.waktu}>
          <Text style={styles.jam}>{time}</Text>
          <View style={styles.circle}>
            <Text style={styles.statusRead}>{readstatus}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flex: 1,
  },
  photo: {
    width: 76,
    height: 76,
    borderRadius: 30,
    marginTop:15,
  },
  viewText: {
    padding: 15,
    flex:3,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  lastChat: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '500',
  },
  waktu: {
    padding: 13,
  },
  jam: {
    color: colors.blackgray,
    fontSize: 17,
    fontWeight: '500',
  },
  circle: {
    backgroundColor: colors.blue,
    width: 22,
    height: 22,
    marginTop: 5,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  statusRead: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 2,
  },
});
