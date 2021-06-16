import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../config/colors';

export default function Banner() {
  return (
    <View style={styles.sliderContainer}>
      <Swiper height={140} autoplay activeDot={colors.primary}>
        <View style={styles.slide}>
          <Image
            style={styles.sliderImage}
            resizeMode="cover"
            source={{uri: require('../assets/Images/banner1.png')}}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
