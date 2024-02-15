import { View, useWindowDimensions } from 'react-native';
import React from 'react';
import { HomeScreenStyle } from '../../styles/globalStyle';
import CustomNavbar from '../common/CustomNavbar';

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <React.Fragment>
      <View style={HomeScreenStyle.navbar}>
        <CustomNavbar />
      </View>
    </React.Fragment>
  );
};

export default HomeScreen;
