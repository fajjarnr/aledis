import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderChatroom = ({onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="md-chevron-back" size={27} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.containerProfile}>
        <Image
          source={require('../assets/Images/ricardo.png')}
          style={styles.profile}
        />
        <View style={styles.containerText}>
          <Text style={styles.nama}>Nama</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderChatroom;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerProfile: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  profile: {
    height: 64,
    width: 64,
    borderRadius: 23,
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: 19,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.blue,
  },
});
