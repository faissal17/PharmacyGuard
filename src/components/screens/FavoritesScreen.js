import {
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FavoritesScreenStyle } from '../../styles/globalStyle';
import Logo from '../../assets/images/Favorite.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomTableStyle } from '../../styles/globalStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const FavoritesScreen = () => {
  const { height } = useWindowDimensions();
  const [favorites, setFavorites] = useState([]);

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
        <MaterialCommunityIcons name="map-marker" size={20} color="blue" />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={FavoritesScreenStyle.container}>
        <Image
          style={[FavoritesScreenStyle.image, { height: height * 0.3 }]}
          source={Logo}
          resizeMode="contain"
        />
        <Text style={FavoritesScreenStyle.text}>Favorites List</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        windowSize={5}
      />
    </View>
  );
};

export default FavoritesScreen;
