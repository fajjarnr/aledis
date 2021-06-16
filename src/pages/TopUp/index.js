import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';
import useForm from '../../config/form';
import {getData, storeData} from '../../config/localStorage';
import Axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {AnimasiLoading} from '..';

export default function TopUp({navigation}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    token: '',
    saldo: '',
    no_hp: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      setData(res);
    });
  }, []);

  const [form, setForm] = useForm({
    top_up: '',
  });

  const handleTopUp = () => {
    setLoading(true);
    Axios.post('http://tesapp.asdosku.com/api/top-up', {
      token: data.token,
      top_up: form.top_up,
      no_hp: data.no_hp,
    })
      .then(function (response) {
        setLoading(false);
        if (response.data.status === 'success') {
          showMessage({
            message: response.data.status,
            description: 'User berhasil didaftarkan',
            type: 'success',
          });
          // navigation.replace('TopUpSuccess', form.top_up);
          Axios.get(
            `http://tesapp.asdosku.com/api/user?no_hp=${data.no_hp}`,
          ).then(function (response) {
            storeData('user', response.data.data);
          });
          navigation.replace('TopUpSuccess', form.top_up);
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
      {loading && <AnimasiLoading />}
      <Screen style={styles.container}>
        <View style={styles.textInput}>
          <KeyboardAvoidingView
            animation="fadeInUpBig"
            behavior="padding"
            style={styles.footer}>
            <TextInput
              autoCorrect={false}
              icon="phone"
              name="phone"
              placeholder="No. Handphone"
              keyboardType="phone-pad"
              maxLength={14}
              value={data.no_hp}
              editable={false}
              // onChangeText={(text) => setNomorHandphone(text)}
            />
            <TextInput
              autoCorrect={false}
              icon="wallet"
              placeholder="Jumlah Top Up"
              name="wallet"
              keyboardType="numeric"
              maxLength={7}
              value={form.saldo}
              onChangeText={(value) => setForm('top_up', value)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Top Up" onPress={handleTopUp} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 200,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
