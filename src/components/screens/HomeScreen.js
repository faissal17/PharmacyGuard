import { View, Text, Image } from 'react-native';
import React from 'react';
import { HomeStyle } from '../../styles/globalStyle';
import welcom from '../../assets/images/welcom.png';

const HomeScreen = () => {
  return (
    <View style={HomeStyle.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
