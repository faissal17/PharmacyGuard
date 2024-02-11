import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import Logo from './assets/images/pharmacy.png';

export default function App() {
  return (
    <View>
      <Image source={Logo} style={logoStyle.container} resizeMode="contain" />
      <StatusBar style="auto" />
    </View>
  );
}

const logoStyle = StyleSheet.create({
  container: {
    width: '70%',
    height: 100,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
