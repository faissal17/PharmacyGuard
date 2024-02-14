import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { HomeScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/welcom.png';
import CustomNavbar from '../common/CustomNavbar';

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View>
      <Image
        source={Logo}
        style={[HomeScreenStyle.Logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomNavbar />
    </View>
  );
};

export default HomeScreen;
