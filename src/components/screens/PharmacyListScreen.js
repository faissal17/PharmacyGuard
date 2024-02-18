import React from 'react';
import { View, Text, useWindowDimensions, Image, FlatList } from 'react-native';
import { PharmacyListsScreenStyle } from '../../styles/globalStyle';
import CustomTable from '../common/CustomTable';
import PharmacyData from '../../services/PharmacyData';
import image from '../../assets/images/welcom.png';

const PharmacyListScreen = () => {
  const { height } = useWindowDimensions();

  const renderItem = () => (
    <View style={{ flex: 1 }}>
      <View style={PharmacyListsScreenStyle.conatiner}>
        <Image
          style={[PharmacyListsScreenStyle.image, { height: height * 0.3 }]}
          source={image}
          resizeMode="contain"
        />
        <Text style={PharmacyListsScreenStyle.text}>Pharmacy List</Text>
      </View>
      <CustomTable data={PharmacyData} />
    </View>
  );

  return (
    <FlatList
      data={['header']}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

export default PharmacyListScreen;
