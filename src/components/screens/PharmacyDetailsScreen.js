import { View, Text, useWindowDimensions, Image } from 'react-native';
import React from 'react';
import Details from '../../assets/images/Details.png';
import { PharmacyDetailsScreenStyle } from '../../styles/globalStyle';
const PharmacyDetailsScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <React.Fragment>
      <View style={PharmacyDetailsScreenStyle.container}>
        <Image
          source={Details}
          style={[PharmacyDetailsScreenStyle.image, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={PharmacyDetailsScreenStyle.text}>Pharmacy Details</Text>
      </View>
    </React.Fragment>
  );
};

export default PharmacyDetailsScreen;
