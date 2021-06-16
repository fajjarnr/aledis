import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardDonation from '../../components/CardDonation';
import Screen from '../../components/Screen';
import donasi from '../../json/donasi.json';
import axios from 'axios';
import {getData, storeData} from '../../config/localStorage';
import {AnimasiLoading} from '..';

export default function ListDonation({navigation}) {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState(berita);

  useEffect(() => {
    const interval = setInterval(() => {
      getData('berita').then((res) => {
        setBerita(res);
        console.log(res);
      });
    }, 3000);
    setLoading(false);
  }, []);

  const BeritaList = () => {
    if (berita !== undefined) {
      return (
        <View>
          {berita.map((item) => (
            <View style={styles.content} key={item.id}>
              <CardDonation
                image={item.image}
                title={item.title}
                desc={item.description}
                progress={item.saldo}
                onPress={() => navigation.navigate('DonationDetail', item)}
              />
            </View>
          ))}
        </View>
      );
    } else {
      return <Text>Mohon Tunggu</Text>;
    }
  };

  return (
    <>
      <Screen>
        <View style={styles.container}>
          <BeritaList />
        </View>
      </Screen>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
