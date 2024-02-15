import { View, Text } from 'react-native';
import React from 'react';
import { PharmacyListsScreenStyle } from '../../styles/globalStyle';
const PharmacyListScreen = () => {
  return (
    <View style={PharmacyListsScreenStyle.conatiner}>
      <Text style={PharmacyListsScreenStyle.text}>Pharmacy List</Text>
    </View>
  );
};

export default PharmacyListScreen;
