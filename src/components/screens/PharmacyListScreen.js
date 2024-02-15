import { View, Text, useWindowDimensions, Image } from 'react-native';
import React from 'react';
import { PharmacyListsScreenStyle } from '../../styles/globalStyle';
import CustomTable from '../common/CustomTable';
import PharmacyData from '../../services/PharmacyData';
import image from '../../assets/images/welcom.png';
const PharmacyListScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <React.Fragment>
      <View style={PharmacyListsScreenStyle.conatiner}>
        <Image
          style={[PharmacyListsScreenStyle.image, { height: height * 0.3 }]}
          source={image}
          resizeMode="contain"
        />

        <Text style={PharmacyListsScreenStyle.text}>Pharmacy List</Text>
      </View>
      <View>
        <CustomTable data={PharmacyData} />
      </View>
    </React.Fragment>
  );
};

export default PharmacyListScreen;
