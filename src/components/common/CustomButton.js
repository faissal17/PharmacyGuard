import { Text, Pressable } from 'react-native';
import React from 'react';
import { CustomButtonStyle } from '../../styles/globalStyle';

const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        CustomButtonStyle.container,
        CustomButtonStyle[`container_${type}`],
      ]}
    >
      <Text style={[CustomButtonStyle[`container_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
