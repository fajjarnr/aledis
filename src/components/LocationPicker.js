import geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import colors from '../config/colors';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function LocationPicker() {
  const [currentPosition, setCurrentPosition] = useState(initialState);

  useEffect(() => {
    geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        });
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [currentPosition]);

  return currentPosition.latitude ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={currentPosition}
      style={styles.mapPreview}
      showsUserLocation>
      <MapView.Marker coordinate={currentPosition} />
    </MapView>
  ) : (
    <View>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>Mencari Lokasi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPreview: {
    marginVertical: 10,
    width: '90%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
