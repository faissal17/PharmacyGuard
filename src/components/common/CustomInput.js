import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { customInputStyle } from '../../styles/globalStyle';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={customInputStyle.conatiner}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={customInputStyle.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
