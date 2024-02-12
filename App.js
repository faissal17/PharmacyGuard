import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import background from './src/assets/images/background.png';

export default function App() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <LoginScreen />
      </View>
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
