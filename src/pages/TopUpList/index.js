import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Screen from '../../components/Screen';
import Icon from 'react-native-vector-icons/Entypo';
import Ic from 'react-native-vector-icons/AntDesign';

const TopUpList = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen style={styles.container}>
        <View style={styles.header}>
          <View style={styles.txt}>
            <Text style={styles.tittle}>
              How would you like to Top Up Wallet
            </Text>
            <Text style={styles.tittle}>Balance ?</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bankContainer}>
            <TouchableOpacity
              style={styles.topUp}
              onPress={() => navigation.navigate('TopUp')}>
              <Icon name="plus" color="#0056A6" size={30} style={styles.plus} />
              <Text style={styles.textTopUp}>Top Up</Text>
              <Ic name="right" size={25} style={styles.right} />
            </TouchableOpacity>
          </View>
          <View style={styles.txtBank}>
            <Text style={styles.tittle}>Bank Transfer</Text>
          </View>
          <View style={styles.bodyBank}>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/BCA.png')}
                  style={styles.imgBankBCA}
                />
                <Ic name="right" size={25} style={styles.rightBankBCA} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/Bank-BRI.png')}
                  style={styles.imgBankBRI}
                />
                <Ic name="right" size={25} style={styles.rightBankBRI} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/CIMBNIAGA.png')}
                  style={styles.imgBankCIMBNIAGA}
                />
                <Ic name="right" size={25} style={styles.rightBankCIMBNIAGA} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/BNI.png')}
                  style={styles.imgBankBNI}
                />
                <Ic name="right" size={25} style={styles.rightBankBNI} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/Bank-Mandiri.png')}
                  style={styles.imgBankMandiri}
                />
                <Ic name="right" size={25} style={styles.rightBankMandiri} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/Danamon.png')}
                  style={styles.imgBankDanamon}
                />
                <Ic name="right" size={25} style={styles.rightBankDanamon} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/btpn.png')}
                  style={styles.imgBankBtpn}
                />
                <Ic name="right" size={25} style={styles.rightBankBtpn} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/HSBC.png')}
                  style={styles.imgBankHSBC}
                />
                <Ic name="right" size={25} style={styles.rightBankHSBC} />
              </TouchableOpacity>
            </View>
            <View style={styles.bankContainer}>
              <TouchableOpacity
                style={styles.bankBody}
                onPress={() => navigation.navigate('BlankPages')}>
                <Image
                  source={require('../../assets/Bank/Permata.png')}
                  style={styles.imgBankPermata}
                />
                <Ic name="right" size={25} style={styles.rightBankPermata} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

export default TopUpList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7FBFF',
    marginTop: 20,
  },
  txt: {
    marginLeft: 30,
  },
  tittle: {
    fontFamily: 'Overpass-Light',
    fontSize: 16,
    color: '#989898',
  },
  body: {
    paddingVertical: 35,
    justifyContent: 'space-around',
  },
  header: {
    width: '100%',
  },
  txtBank: {
    marginTop: 20,
    marginLeft: 30,
  },
  bodyBank: {
    marginTop: 20,
  },
  topUp: {
    flexDirection: 'row',
    margin: 2,
    padding: 10,
  },
  textTopUp: {
    fontFamily: 'Overpass-Reguler',
    fontSize: 16,
    marginLeft: 10,
  },
  bankContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 2,
  },
  right: {
    left: 214,
  },
  plus: {
    marginTop: -3,
  },
  bankBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    margin: 2,
  },
  imgBankBRI: {
    marginLeft: -4,
  },
  imgBankBCA: {
    width: 100,
    height: 47,
    marginLeft: 10,
  },
  imgBankCIMBNIAGA: {
    width: 150,
    height: 47,
    marginLeft: 15,
  },

  imgBankBNI: {
    width: 120,
    height: 40,
    marginLeft: 5,
  },
  imgBankMandiri: {
    width: 130,
    height: 42,
    marginLeft: 1,
  },
  imgBankBRI: {
    width: 150,
    height: 47,
    marginLeft: -5,
  },
  imgBankDanamon: {
    width: 130,
    height: 42,
    marginLeft: 10,
  },
  imgBankBtpn: {
    width: 120,
    height: 45,
  },
  imgBankHSBC: {
    width: 130,
    height: 42,
  },
  imgBankPermata: {
    width: 190,
    height: 48,
    marginTop: -15,
    marginLeft: 14,
  },
});
