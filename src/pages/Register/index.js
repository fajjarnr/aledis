import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import colors from '../../config/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import useForm from '../../config/form';
import {AnimasiLoading} from '..';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    no_hp: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post('http://tesapp.asdosku.com/api/register', {
        name: form.fullName,
        email: form.email,
        password: form.password,
        password_confirmation: form.passwordConfirm,
        no_hp: form.no_hp,
      })
      .then(function (response) {
        setLoading(false);
        if (response.data.status === 'success') {
          showMessage({
            message: response.data.status,
            description: 'User berhasil didaftarkan',
            type: 'success',
          });
          navigation.navigate('Login');
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
        <View>
          <Text style={styles.createAccount}>Create Account</Text>
        </View>
        <ScrollView>
          <KeyboardAvoidingView
            animation="fadeInUpBig"
            behavior="padding"
            style={styles.form}>
            <TextInput
              autoCorrect={false}
              icon="user"
              name="Yourname"
              placeholder="Nama"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
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
              autoCorrect={false}
              icon="phone"
              name="phone"
              placeholder="No. Handphone"
              keyboardType="phone-pad"
              maxLength={14}
              value={form.no_hp}
              onChangeText={(value) => setForm('no_hp', value)}
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
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Confirm Password"
              name="confirmPassword"
              secureTextEntry
              value={form.passwordConfirm}
              onChangeText={(value) => setForm('passwordConfirm', value)}
            />
            <View style={styles.buttonContainer}>
              <Button title="CREATE ACCOUNT" onPress={handleSubmit} />
            </View>
            <View style={styles.registerContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </Screen>
      {loading && <AnimasiLoading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 3,
    paddingVertical: 17,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
  },
  createAccount: {
    fontSize: 24,
    fontFamily: 'Overpass-Bold',
    marginLeft: 20,
    marginTop: 30,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  signInText: {
    color: colors.primary,
  },
});
