import { StyleSheet, Text, View, ImageBackground,SafeAreaView } from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import background from './src/assets/images/background.png';

export default function App() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <RegisterScreen />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
