import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ChatisMe from '../../components/ChatisMe';
import ChatisOther from '../../components/ChatisOther';
import HeaderChatroom from '../../components/HeaderChatroom';
import InputChat from '../../components/InputChat';

const ChatRoom = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderChatroom onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatisMe />
        <ChatisOther />
      </ScrollView>
      <View style={styles.containerInput}>
        <InputChat />
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
  },
  containerInput: {
    flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 36,
    // backgroundColor: 'blue',
  },
});
