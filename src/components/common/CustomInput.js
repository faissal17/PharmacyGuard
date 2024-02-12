import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={style.conatiner}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={style.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const style = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    padding:5,
    borderWidth: 3,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
