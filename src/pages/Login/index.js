import {showMessage, hideMessage} from 'react-native-flash-message';
import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimasiLoading} from '..';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';
import colors from '../../config/colors';
import useForm from '../../config/form';
import {getData, storeData} from '../../config/localStorage';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const handleSignIn = () => {
    setLoading(true);

    axios
      .post('http://tesapp.asdosku.com/api/login', {
        email: form.email,
        password: form.password,
      })
      .then(function (response) {
        setLoading(false);
        if (response.data.status === 'success') {
          storeData('user', response.data.data);

          showMessage({
            message: response.data.status,
            description: `Selamat Datang ${response.data.data.name}`,
            type: 'success',
          });
          if (response.data.data.active_otp === 0) {
            showMessage({
              message: response.data.status,
              description: `Selamat Datang, ${response.data.data.name} Silahkan Verifikasi OTP Dahulu`,
              type: 'info',
            });

            axios
              .post('http://tesapp.asdosku.com/api/list-bencana', {
                token: response.data.data.token,
              })
              .then(function (response) {
                if (response.data.current_page === 1) {
                  storeData('berita', response.data.data);
                }
                console.log(response.data);
              });

            navigation.replace('VerifyOTP', response.data.data);
          } else {
            showMessage({
              message: response.data.status,
              description: `Selamat Datang, ${response.data.data.name}`,
              type: 'success',
            });

            axios
              .post('http://tesapp.asdosku.com/api/list-bencana', {
                token: response.data.data.token,
              })
              .then(function (response) {
                if (response.data.current_page === 1) {
                  storeData('berita', response.data.data);
                  navigation.replace('Home');
                }
                console.log(response);
              });
          }
          // navigation.navigate('Login');
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
        <Text style={styles.txtWelcome}> Welcome Back !</Text>
        <View style={styles.textInput}>
          <View style={styles.footer}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              placeholder="Email"
              keyboardType="email-address"
              name="email"
              textContentType="emailAddress"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              name="password"
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
            />

            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleSignIn} />

              <Text>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Screen>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtWelcome: {
    fontSize: 24,
    fontFamily: 'Overpass-Bold',
    marginLeft: 20,
    marginTop: 30,
  },
  textInput: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderBottomColor: 'black',
  },
  btnSingup: {
    fontSize: 12,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signUpText: {
    color: colors.primary,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
