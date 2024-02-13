import {
  View,
  Image,
  useWindowDimensions,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/pharmacy.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { LoginScreenStyle } from '../../styles/globalStyle';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../FireBase.config';
const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const auth = FIREBASE_AUTH;

  onLoginPressed = () => {
    console.warn('cool');
  };

  onRegisterPress = () => {
    console.warn('Register Page');
    navigation.navigate('Register');
  };

  const Login = async () => {
    try {
      const response = auth.signInWithEmailAndPassword(userEmail, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={LoginScreenStyle.root}>
      <Image
        source={Logo}
        style={[LoginScreenStyle.Logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={style.title}>Welcom Back, Please login</Text>

      <CustomInput
        placeholder="User Email"
        value={userEmail}
        onChangeText={(text) => setUserEmail(text)}
      />
      <CustomInput
        placeholder="User Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onLoginPressed} type="primary" />
      <CustomButton
        text="Don't you have an account? Register Here"
        onPress={onRegisterPress}
        type="sec"
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 24, margin: 10, color: '#051C60' },
});

export default LoginScreen;
