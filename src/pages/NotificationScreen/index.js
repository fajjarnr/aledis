import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import notifications from '../../json/notifications.json';
import Screen from '../../components/Screen';
import CardNotifications from '../../components/CardNotifications';
import ListItemSeparator from '../../components/ListItemSeparator';

export default function NotificationScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          keyExtractor={notifications.id}
          renderItem={({item}) => (
            <CardNotifications
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
