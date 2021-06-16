import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {logo, SplashBackground} from '../../assets/Images';
import {getData, storeData} from '../../config/localStorage';
import Axios from 'axios';

export default function Splash({navigation}) {
  const [data, setData] = useState({
    name: '',
    saldo: '',
    token: '',
    active_otp: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      if (res === undefined) {
        setTimeout(() => {
          navigation.replace('OnboardingScreen');
        }, 2000);
      } else {
        console.log(res.active_otp);
        if (res.active_otp === 0) {
          setTimeout(() => {
            navigation.replace('VerifyOTP', res);
          }, 2000);
        } else if (res.active_otp === 1) {
          // alert("aktif")
          Axios.post('http://tesapp.asdosku.com/api/list-bencana', {
            token: res.token,
          }).then(function (response) {
            if (response.data.current_page === 1) {
              storeData('berita', response.data.data);
            }
            console.log(response.data.current_page);
          });
          setTimeout(() => {
            navigation.replace('Home');
          }, 2000);
        } else {
          console.log(res);
          alert('Something error');
        }
      }
      setData(res);
    });
  }, [navigation]);

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground source={SplashBackground} style={styles.imgBackground}>
        <Image source={logo} style={styles.imgLogo} />
        <Text style={styles.txt}>ALEDIS</Text>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 74,
    height: 74,
  },
  txt: {
    fontSize: 24,
    fontFamily: 'Overpass-ExtraBold',
    color: '#FFFFFF',
  },
});
