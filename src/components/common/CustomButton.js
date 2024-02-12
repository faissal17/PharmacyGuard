import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { CustomButtonStyle } from '../../styles/globalStyle';

const CustomButton = ({ onPress,text }) => {
  return (
    <Pressable onPress={onPress} style={CustomButtonStyle.container}>
      <Text style={CustomButtonStyle.text}>{text}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  
});

export default CustomButton;
