import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import background from './src/assets/images/background.png';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
