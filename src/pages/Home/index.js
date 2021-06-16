import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AnimasiLoading} from '..';
import Button from '../../components/Button';
import Card from '../../components/Card';
import colors from '../../config/colors';
import {getData, storeData} from '../../config/localStorage';
import info from '../../json/infoBencana.json';
import Axios from 'axios';

export default function Home({navigation}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: '',
    saldo: 0,
    token: '',
    no_hp: '',
  });
  const [berita, setBerita] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      getData('user').then((res) => {
        setData(res);
      });
      getData('berita').then((res) => {
        setBerita(res);
        // console.log(res);
      });
    }, 1000);

    setLoading(false);
  }, []);

  useEffect(() => {
    Axios.get(`http://tesapp.asdosku.com/api/user?no_hp=${data.no_hp}`).then(
      function (response) {
        if (response.data.status === 'success') {
          console.log(response.data);
          storeData('user', response.data.data);
        }
      },
    );
  }, []);

  const BeritaList = () => {
    if (berita !== undefined) {
      return (
        <View>
          {berita.map((item) => (
            <View style={styles.content} key={item.id}>
              <Card
                title={item.title}
                desc={item.description}
                image={item.image}
                onPress={() => navigation.navigate('DisasterDetail', item)}
              />
            </View>
          ))}
        </View>
      );
    } else {
      return <Text>Berita Belum Tersedia</Text>;
    }
  };

  return (
    <>
      <FlatList
        data={info}
        keyExtractor={info.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.profile}>
                  <Image
                    source={require('../../assets/Images/profile.jpg')}
                    style={styles.imgProfile}
                  />
                  <View style={styles.icon}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ListPhoneNumber')}
                      style={{marginRight: 8}}>
                      <Feather name="phone" size={23} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('NotificationScreen')}>
                      <Ionicons
                        name="notifications-outline"
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.welcome}>
                  <Text style={styles.title}>Hi, {data.name} </Text>
                  <Text style={styles.subTitle}>Welcome to Aledis</Text>
                </View>
              </View>
              <View style={styles.cardTopUp}>
                <View>
                  <Text style={styles.saldo}>Saldo</Text>
                  <Text style={styles.balance}>Rp. {data.saldo}</Text>
                </View>
                <Button
                  title="Top Up"
                  width={100}
                  borderRadius={6}
                  onPress={() => navigation.navigate('TopUpList')}
                />
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.sliderContainer}>
                <Swiper height={140} autoplay activeDot={colors.primary}>
                  <View style={styles.slide}>
                    <Image
                      source={require('../../assets/Images/banner1.png')}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                </Swiper>
              </View>
            </View>
            <View style={styles.disasterContainer}>
              <Text style={styles.titleInfo}>Info Bencana</Text>
            </View>
            <BeritaList />
          </>
        }
      />

      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 215,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imgProfile: {
    width: 42,
    height: 42,
    borderRadius: 50,
    left: 30,
    top: 40,
  },
  profile: {
    flexDirection: 'row',
  },
  icon: {
    top: 43,
    left: 240,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Overpass-Bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Overpass-light',
    color: 'white',
  },
  welcome: {
    marginLeft: 35,
    top: 43,
  },
  cardTopUp: {
    backgroundColor: colors.background,
    width: 327,
    height: 80,
    borderRadius: 14,
    shadowColor: colors.black,
    elevation: 14,
    shadowOpacity: 0.25,
    shadowOffset: {width: 10, height: 2},
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: -25,
  },
  saldo: {
    fontSize: 18,
    fontFamily: 'Overpass-Bold',
    color: colors.primary,
  },
  balance: {
    fontSize: 16,
    fontFamily: 'Overpass-Bold',
    color: colors.primary,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  body: {
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  titleInfo: {
    fontSize: 16,
    fontFamily: 'Overpass-Bold',
    marginVertical: 10,
  },
  sliderContainer: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginHorizontal: 20,
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
  content: {
    alignItems: 'center',
  },
  disasterContainer: {
    marginHorizontal: 20,
  },
});
