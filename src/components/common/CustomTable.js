// CustomTable.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import { CustomTableStyle } from '../../styles/globalStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomTable = ({ data }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from AsyncStorage when the component mounts
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async (updatedFavorites) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const onPositionClick = ({ item }) => {
    console.log(item.latitude);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`;
    Linking.openURL(mapUrl);
  };

  const onHeartClick = ({ item }) => {
    // Check if the pharmacy is already in favorites
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    if (!isFavorite) {
      // Add the pharmacy to favorites
      const updatedFavorites = [...favorites, item];
      saveFavorites(updatedFavorites);
    }
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
        <Ionicons
          name="heart"
          size={20}
          onPress={() => onHeartClick({ item })}
          color={favorites.some((fav) => fav.id === item.id) ? 'red' : 'gray'}
        />
        <MaterialCommunityIcons
          name="map-marker"
          size={20}
          color="blue"
          onPress={() => onPositionClick({ item })}
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
