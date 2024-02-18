import {
  View,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Details from '../../assets/images/Details.png';
import { PharmacyDetailsScreenStyle } from '../../styles/globalStyle';
import { FontAwesome } from '@expo/vector-icons';
const PharmacyDetailsScreen = ({ route }) => {
  const { height } = useWindowDimensions();
  const { item } = route.params;
  return (
    <ScrollView>
      <View style={PharmacyDetailsScreenStyle.container}>
        <Image
          source={Details}
          style={[PharmacyDetailsScreenStyle.image, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={PharmacyDetailsScreenStyle.text}>Pharmacy Details</Text>
        <Image
          source={{ uri: item.images[0] }}
          style={PharmacyDetailsScreenStyle.image}
        />

        <View style={PharmacyDetailsScreenStyle.detailsContainer}>
          <Text style={PharmacyDetailsScreenStyle.name}>{item.name}</Text>
          <Text style={PharmacyDetailsScreenStyle.address}>{item.address}</Text>
          <Text
            style={PharmacyDetailsScreenStyle.distance}
          >{`Distance: ${item.distance} meters`}</Text>

          <View style={PharmacyDetailsScreenStyle.servicesContainer}>
            <Text style={PharmacyDetailsScreenStyle.servicesTitle}>
              Services:
            </Text>
            {item.services.map((service, index) => (
              <Text key={index} style={PharmacyDetailsScreenStyle.service}>
                {service}
              </Text>
            ))}
          </View>

          <View style={PharmacyDetailsScreenStyle.openingHoursContainer}>
            <FontAwesome name="clock-o" size={18} color="#333" />
            <Text
              style={PharmacyDetailsScreenStyle.openingHours}
            >{`Opening Hours: ${item.openingHours} - ${item.closingHours}`}</Text>
          </View>

          <Text style={PharmacyDetailsScreenStyle.contactTitle}>
            Contact Information:
          </Text>
          <Text
            style={PharmacyDetailsScreenStyle.contactInfo}
          >{`Phone: ${item.phone}`}</Text>
          <Text
            style={PharmacyDetailsScreenStyle.contactInfo}
          >{`Email: ${item.email}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PharmacyDetailsScreen;
