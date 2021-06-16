import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppProgressBar from './ProgressBar';


export default function CardDonation({image, title, desc, progress, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{
            uri: `http://tesapp.asdosku.com/uploads/images/store/${image}`,
          }} />
        <View style={styles.component}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc} numberOfLines={1} lineBreakMode="tail">
            {desc}
          </Text>
          <AppProgressBar progress={progress} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
    marginTop:10,
  },
  component: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
    // width: '90%',
  },
  desc: {
    fontSize: 11,
    fontFamily: 'Overpass-light',
    width: 200,
  },
  image: {
    width: 100,
    height: 70,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Overpass-SemiBold',
    width: 200,
  },
});
