// CustomTable.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import { CustomTableStyle } from '../../styles/globalStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CustomTable = ({ data }) => {
  const [favorites, setFavorites] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
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
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
      saveFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, item];
      saveFavorites(updatedFavorites);
    }
  };

  const sendDetails = (item) => {
    navigation.navigate('Details', { item });
  };

  const renderItem = ({ item }) => (
    <View style={CustomTableStyle.row}>
      <Image source={{ uri: item.images[0] }} style={CustomTableStyle.image} />
      <View style={CustomTableStyle.info}>
        <Text style={CustomTableStyle.name} onPress={() => sendDetails(item)}>
          {item.name}
        </Text>
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
