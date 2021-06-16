import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import {
  default as Ic,
  default as Icons,
} from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import {getData} from '../../config/localStorage';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {AnimasiLoading} from '..';

const Profile = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    token: '',
    email: '',
  });

  const signOut = async () => {
    setLoading(true);
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      showMessage({
        message: 'Logout',
        description: 'Sampai Jumpa, Semoga Bertemu kembali',
        type: 'danger',
      });
      BackHandler.exitApp();
    } catch (error) {
      alert('Error clearing app data.');
    }
  };

  useEffect(() => {
    getData('user').then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.cardTopUp}>
          <View>
            <Image
              source={require('../../assets/Images/profile.jpg')}
              style={styles.imgProfile}
            />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.email}>{data.email}</Text>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          {/* <View style={styles.content}>
            <TouchableOpacity
              style={styles.isContent}
              onPress={() => navigation.navigate('ProfileSettings')}>
              <Ic
                name="setting"
                color="#0047CC"
                size={25}
                style={styles.isIcon}
              />
              <Text style={styles.txt}>Profile Settings</Text>
              <Icons
                name="right"
                color="#DDDDDD"
                size={20}
                style={styles.icRight}
              />
            </TouchableOpacity>
          </View> */}

          <View style={styles.content}>
            <TouchableOpacity
              style={styles.isContent}
              onPress={() => navigation.navigate('NotificationScreen')}>
              <Icon
                name="notifications-outline"
                color="#0047CC"
                size={25}
                style={styles.isIcon}
              />
              <Text style={styles.txt3}>Notifications</Text>
              <Icons
                name="right"
                color="#DDDDDD"
                size={20}
                style={styles.icRight}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <TouchableOpacity style={styles.isContent} onPress={signOut}>
              <Icon
                name="log-out-outline"
                color="#0047CC"
                size={25}
                style={styles.isIcon}
              />
              <Text style={styles.txt4}>Logout</Text>
              <Icons
                name="right"
                color="#DDDDDD"
                size={20}
                style={styles.icRight}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
      {loading && <AnimasiLoading />}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    height: 215,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTopUp: {
    backgroundColor: colors.white,
    width: 327,
    height: 170,
    borderRadius: 14,
    shadowColor: colors.white,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 16,
    top: -120,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Overpass-Bold',
    color: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    fontFamily: 'Overpass-Bold',
    color: '#77869E',
  },
  imgProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 10,
    width: 90,
    height: 90,
    marginVertical: 5,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  isContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  isIcon: {
    backgroundColor: '#DFE7F5',
    borderRadius: 4,
    padding: 4,
  },
  txt: {
    fontFamily: 'Overpass-Reguler',
    fontSize: 16,
    right: 50,
  },
  txt2: {
    fontFamily: 'Overpass-Reguler',
    fontSize: 16,
    right: 75,
  },
  txt3: {
    fontFamily: 'Overpass-Reguler',
    fontSize: 16,
    right: 55,
  },
  txt4: {
    fontFamily: 'Overpass-Reguler',
    fontSize: 16,
    right: 75,
  },
  menuWrapper: {
    marginTop: -80,
  },
  footer: {
    height: 200,
    backgroundColor: colors.background,
  },
});
