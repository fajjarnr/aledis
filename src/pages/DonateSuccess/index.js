import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
import axios from 'axios';
import {getData, setData} from '../../config/localStorage';
import {AnimasiLoading} from '..';

export default function DonateSuccess({navigation, route}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const {saldo, id, title} = route.params;
  useEffect(() => {
    const interval = setInterval(() => {
      getData('user').then((res) => {
        setData(res);
      });
    }, 1000);
  }, []);

  const handlehome = () => {
    setLoading(true);
    axios
      .post('http://tesapp.asdosku.com/api/list-bencana', {
        token: data.token,
      })
      .then(function (response) {
        if (response.data.current_page === 1) {
          console.log(response.data.data);
          setData('berita', response.data.data);
        } else {
          console.log(response.data);
        }
        setLoading(false);
        navigation.replace('Home');
      });
  };

  return (
    <>
      <Screen style={styles.container}>
        <Image source={require('../../assets/Images/Ceklist.png')} />
        <Text style={styles.title}>Donasi Berhasil</Text>
        <Text style={styles.subTitle}> Terimakasih !</Text>
        <Text style={styles.subTitle}>
          Saat ini sumbangan untuk {title}. terkumpul sebanyak Rp. {saldo}
        </Text>
        <Text style={styles.subTitle}>Semuanya berkat bantuan anda</Text>

        <View style={styles.btnContainer}>
          <Button title="CONTINUE" onPress={handlehome} />
        </View>
      </Screen>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Overpass-Bold',
    fontSize: 20,
    marginTop: 30,
  },
  btnContainer: {
    marginTop: 60,
  },
  subTitle: {
    fontFamily: 'Overpass-Light',
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
  },
});
