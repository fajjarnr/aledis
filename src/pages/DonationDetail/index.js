import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import colors from '../../config/colors';
import ProgressBar from '../../components/ProgressBar';
import AppButton from '../../components/Button';
import useForm from '../../config/form';
import Axios from 'axios';
import {getData, storeData} from '../../config/localStorage';
import {AnimasiLoading} from '..';

export default function DonationDetail({navigation, route}) {
  const [loading, setLoading] = useState(false);
  const {title, description, image, id, saldo} = route.params;
  const [form, setForm] = useForm({
    saldo: '',
  });

  const [data, setData] = useState({
    token: '',
  });
  useEffect(() => {
    const interval = setInterval(() => {
      getData('user').then((res) => {
        setData(res);
      });
    }, 1000);

    setLoading(false);
  }, []);

  const handle = () => {
    setLoading(true);
    Axios.post('http://tesapp.asdosku.com/api/donasi-bencana', {
      id: id,
      donasi: form.saldo,
    })
      .then(function (response) {
        if (response.data.status === 'success') {
          console.log(response.data.status);
          //post lgi
          navigation.replace('DonateSuccess', response.data.data);
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: `http://tesapp.asdosku.com/uploads/images/store/${image}`,
            }}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.cardProgress}>
            <Text style={styles.totalDonation}>Rp. {saldo}</Text>
            <ProgressBar width="100%" progress={saldo} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.desc}>Donasi Sekarang</Text>
            <TextInput
              style={styles.donasiNow}
              keyboardType="numeric"
              value={form.saldo}
              onChangeText={(value) => setForm('saldo', value)}
            />
            <AppButton title="donate" onPress={handle} />
          </View>
        </View>
      </ScrollView>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 255,
  },
  body: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 20,
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
  cardProgress: {
    marginTop: 20,
    backgroundColor: colors.white,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    shadowColor: colors.black,
    elevation: 15,
  },
  totalDonation: {
    fontFamily: 'Overpass-Bold',
    fontSize: 18,
  },
  donasiNow: {
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 70,
    color: '#000',
    fontSize: 20,
  },
});
