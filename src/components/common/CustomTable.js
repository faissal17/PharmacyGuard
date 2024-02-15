import React from 'react';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import { CustomTableStyle } from '../../styles/globalStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const CustomTable = ({ data }) => {
  const onHeartLike = ({ item }) => {
    console.log(item.latitude);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`;
    Linking.openURL(mapUrl);
  };

  const renderItem = ({ item }) => (
    <View style={CustomTableStyle.row}>
      <Image source={{ uri: item.images[0] }} style={CustomTableStyle.image} />
      <View style={CustomTableStyle.info}>
        <Text style={CustomTableStyle.name}>{item.name}</Text>
        <Text>{`Distance: ${item.distance} meters`}</Text>
        <Text>{`Opening Hours: ${item.openingHours} - ${item.closingHours}`}</Text>
      </View>
      <View style={CustomTableStyle.icons}>
        <Ionicons name="heart" size={20} />
        <MaterialCommunityIcons
          name="map-marker"
          size={20}
          color="blue"
          onPress={() => onHeartLike({ item })}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default CustomTable;
