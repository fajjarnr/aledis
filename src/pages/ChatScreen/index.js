import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ChatList from '../../components/ChatList';
import Screen from '../../components/Screen';

const ChatScreen = ({navigation}) => {
  return (
    <Screen>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
          onPress={() => navigation.navigate('ChatRoom')}
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
        <ChatList
          name="vandy ahmad"
          lastchat="tolong saya butuh  "
          time="15:20"
          readstatus="2"
        />
      </ScrollView>
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    // flex: 1,
    padding: 10,
  },
});
