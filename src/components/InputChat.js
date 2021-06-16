import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import colors from '../config/colors';
import Feather from 'react-native-vector-icons/Feather';

const InputChat = () => {
  return (
    <View style={styles.page}>
      <TextInput style={styles.TextInput} placeholder="Kirim Pesan" />
      <TouchableOpacity>
        <Feather name="send" size={25} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  page: {
    padding: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
    maxHeight: 45,
    fontSize: 14,
    height: 40,
    flex: 1,
    color: '#000',
  },
  tombolKirim: {
    height: 30,
    width: 30,
    backgroundColor: '#4157FF',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 30 / 2,
  },
});
