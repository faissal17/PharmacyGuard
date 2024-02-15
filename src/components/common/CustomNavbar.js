import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PharmacyListScreen from '../screens/PharmacyListScreen';
import SettingScreen from '../screens/SettingScreen';
import PharmacyDetailsScreen from '../screens/PharmacyDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const PharmacyDetailsScreenName = 'Pharmacy Details';
const SettingScreenName = 'Settings';
const PharmacyListScreenName = 'Pharmacy List';
const FavoritesScreenName = 'Favorites ';

const CustomNavbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="PharmacyListScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const { name } = route;

          switch (name) {
            case PharmacyListScreenName:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case PharmacyDetailsScreenName:
              iconName = focused ? 'list' : 'list-outline';
              break;
            case FavoritesScreenName:
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case SettingScreenName:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipsis-horizontal';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarActiveTintColor="tomato"
      tabBarInactiveTintColor="grey"
      tabBarLabelStyle={{ paddingBottom: 10, fontSize: 10 }}
      tabBarStyle={{ padding: 10, height: 70 }}
    >
      <Tab.Screen
        name={PharmacyListScreenName}
        component={PharmacyListScreen}
      />
      <Tab.Screen name={FavoritesScreenName} component={FavoritesScreen} />
      <Tab.Screen
        name={PharmacyDetailsScreenName}
        component={PharmacyDetailsScreen}
      />
      <Tab.Screen name={SettingScreenName} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default CustomNavbar;
