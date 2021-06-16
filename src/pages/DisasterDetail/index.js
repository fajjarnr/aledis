import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import colors from '../../config/colors';
import MapView from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DisasterDetail({route}) {
  const {title, description, image, latitute, longtitute} = route.params;

  // const itemData = route.params;
  var SendIntentAndroid = require('react-native-send-intent');
  const handleClick = () => {
    SendIntentAndroid.openMaps(`${latitute}, ${longtitute}`);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Text />
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: `http://tesapp.asdosku.com/uploads/images/store/${image}`,
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <Button
            title="Kunjungi Lokasi"
            style={styles.lokasi}
            onPress={handleClick}
          />
        </View>

        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: Number(latitute),
              longitude: Number(longtitute),
              latitudeDelta: 0.094,
              longitudeDelta: 0.094,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: Number(latitute),
                longitude: Number(longtitute),
              }}
              title={'Lokasi'}
              description={title}
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 255,
  },
  lokasi: {
    padding: 50,
  },
  body: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: colors.white,
    top: -20,
    height: '100%',
  },
  desc: {
    marginVertical: 20,
    textAlign: 'justify',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Overpass-Regular',
    fontWeight: 'bold',
    marginTop: 20,
  },
  location: {
    fontSize: 16,
    fontFamily: 'Overpass-Regular',
  },
  containerMap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    // ...StyleSheet.absoluteFillObject,
  },
  map: {
    height: 300,
    width: '90%',
    // ...StyleSheet.absoluteFillObject,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});
