import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import defaultStyle from '../config/styles';

export default function AppTextInput({icon, width = '100%', ...props}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <AntDesign
          name={icon}
          color={defaultStyle.colors.medium}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.medium}
        style={styles.textInput}
        width={width}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: defaultStyle.colors.primary,
  },
  textInput: {
    flex: 1,
    color: defaultStyle.colors.dark,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});
