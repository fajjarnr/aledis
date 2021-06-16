import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardNotifications({title, desc, date}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="bell-ring-outline" color="#777777" size={25} />
      <View style={styles.component}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle} numberOfLines={1} lineBreakMode="tail">
          {desc}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 22,
  },
  component: {
    width: 280,
    marginLeft: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Overpass-SemiBold',
    marginBottom: 5,
  },
  date: {
    color: '#777777',
  },
});
