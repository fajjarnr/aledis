import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import colors from '../../config/colors';

const AnimasiLoading = () => {
  return (
    <View style={styles.wrapper}>
        <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text} >Mohon Tunggu</Text>
    </View>
  );
};

export default AnimasiLoading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
  },
  text:{
    fontSize:15,
    color:'white',
    marginTop:25
  },
});
