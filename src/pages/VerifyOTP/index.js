import axios from 'axios';
import { showMessage, hideMessage } from 'react-native-flash-message';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AnimasiLoading } from '..';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import useForm from '../../config/form';
import { getData, storeData } from '../../config/localStorage';

export default function VerifyOTP({ navigation, route }) {
  const { token, no_hp, name } = route.params;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    otp: '',
  });

  // alert(token);
  const handleSend = () => {
    setLoading(true);
    axios
      .post('http://tesapp.asdosku.com/api/send-otp', {
        token: token,
        otp: form.otp,
      })
      .then(function (response) {
        setLoading(false);
        if (response.data.status === 'success') {
          showMessage({
            message: response.data.status,
            description: 'Hore Akun Anda Telah Aktif',
            type: 'success',
          });
         
          navigation.replace('Home');
        } else {
          showMessage({
            message: response.data.status,
            description: 'Maaf OTP Yang Anda Masukkan Salah',
            type: 'danger',
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleReSend = () => {
    setLoading(true);
    console.log(form.token);
    axios
      .post('http://tesapp.asdosku.com/api/resend-otp', {
        token: token,
      })
      .then(function (response) {
        setLoading(false);
        if (response.data.status === 'success') {
          showMessage({
            message: response.data.status,
            description: 'Pesan OTP Telah dikirim ulang silahkan coba lagi',
            type: 'success',
          });
          // navigation.replace('Home');
        } else {
          showMessage({
            message: response.data.status,
            description: response.data.data,
            type: 'danger',
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Screen style={styles.container}>
        <Text style={styles.title}>
          Hello, {name} Please Enter The Verify Code
        </Text>
        <Text style={styles.subTitle}>
          We just send you a verification code via phone
        </Text>
        <Text style={styles.subTitle}>{no_hp}</Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpCode}
            keyboardType="numeric"
            maxLength={4}
            value={form.otp}
            onChangeText={(value) => setForm('otp', value)}
          />
          <View style={styles.btnContainer}>
            <Button title="Submit Code" onPress={handleSend} />
            <Text style={styles.expire}>Not get OTP Number?</Text>
            <TouchableOpacity onPress={handleReSend}>
              <Text style={styles.resend}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 50,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: colors.primary,
  },
  container: {
    flex: 1,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: colors.primary,
  },
  otpCode: {
    width: '80%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.primary,
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Overpass-Bold',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Overpass-Reguler',
    marginHorizontal: 20,
    color: colors.secondary,
  },
  resend: {
    color: colors.primary,
  },
  expire: {
    fontSize: 15,
    fontFamily: 'Overpass-Reguler',
    marginHorizontal: 20,
    color: colors.secondary,
    marginVertical: 20,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
