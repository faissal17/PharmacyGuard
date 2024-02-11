import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = () => {
  return (
    <View style={style.conatiner}>
      <TextInput style={style.input} placeholder="Your Email" />
    </View>
  );
};

export default CustomInput;

const style = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
