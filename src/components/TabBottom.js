import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../config/colors';

const TabBottom = ({label, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'home') {
      return active ? (
        <Feather name="home" size={24} color={colors.primary} />
      ) : (
        <Feather name="home" size={24} color={colors.dark} />
      );
    }
    if (label === 'love') {
      return active ? (
        <Feather name="heart" size={24} color={colors.primary} />
      ) : (
        <Feather name="heart" size={24} color={colors.dark} />
      );
    }
    if (label === 'add') {
      return (
        <View style={styles.add_container}>
          <Feather name="plus-square" size={24} color={colors.white} />
        </View>
      );
    }
    if (label === 'chat') {
      return active ? (
        <Feather name="message-circle" size={24} color={colors.primary} />
      ) : (
        <Feather name="message-circle" size={24} color={colors.dark} />
      );
    }
    if (label === 'person') {
      return active ? (
        <Feather name="user" size={24} color={colors.primary} />
      ) : (
        <Feather name="user" size={24} color={colors.dark} />
      );
    }
    return <Feather name="user" size={24} color={colors.primary} />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabBottom;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  add_container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 40,
    width: 40,
  },
});
