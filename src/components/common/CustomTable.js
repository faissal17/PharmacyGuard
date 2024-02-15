import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const CustomTable = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{`Distance: ${item.distance} meters`}</Text>
        <Text>{`Opening Hours: ${item.openingHours} - ${item.closingHours}`}</Text>
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomTable;
