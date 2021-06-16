import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import Communications from 'react-native-communications';
import ListItemSeparator from '../../components/ListItemSeparator';
import PhoneNumber from '../../components/PhoneNumber';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import colors from '../../config/colors';
import filter from 'lodash';

export default function ListPhoneNumber() {
  const [isLoading, setIsLoading] = useState(false);
  const [listPhoneNumber, setListPhoneNumber] = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    getListPhoneNumber();
    getItem();
  }, []);

  const getItem = () => {
    Axios.get('http://tesapp.asdosku.com/api/nomer-penting/search?nama=alam')
      .then((res) => {
        setFullData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getListPhoneNumber = () => {
    setIsLoading(true);
    Axios.get('http://tesapp.asdosku.com/api/nomer-penting')
      .then((res) => {
        setListPhoneNumber(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <Screen>
      {/* <View style={styles.searchBar}>
        <SearchBar autoCapitalize="none" autoCorrect={false} />
      </View> */}
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listPhoneNumber}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({item}) => (
            <PhoneNumber
              title={item.name}
              phoneNumber={item.no_hp}
              onPress={() => Communications.phonecall(item.no_hp, true)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
});
