import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../config/colors';

export default function Card({title, desc, onPress, image}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: `http://tesapp.asdosku.com/uploads/images/store/${image}`,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.desc} numberOfLines={2} lineBreakMode="tail">
            {desc}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 14,
    shadowColor: colors.black,
    elevation: 2,
    shadowOpacity: 0.25,
    shadowOffset: {width: 10, height: 2},
    width: 327,
    height: 225,
    padding: 10,
  },
  image: {
    width: 304,
    height: 142,
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontFamily: 'Overpass-Bold',
    fontSize: 14,
    marginBottom: 7,
  },
  desc: {
    fontFamily: 'Overpass-light',
    fontSize: 11,
  },
});
