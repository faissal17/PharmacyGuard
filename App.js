import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import Logo from './assets/images/pharmacy.png';
import CustomInput from './src/components/common/CustomInput';

export default function App() {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[logoStyle.container, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
      <CustomInput />
    </View>
  );
}

const logoStyle = StyleSheet.create({
  container: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 300,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    padding: 20,
  },
});
