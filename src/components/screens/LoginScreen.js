import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/pharmacy.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { LoginScreenStyle } from '../../styles/globalStyle';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  onLoginPressed = () => {
    console.warn('cool');
  };
  return (
    <View style={LoginScreenStyle.root}>
      <Image
        source={Logo}
        style={[LoginScreenStyle.Logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="User Email"
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="User Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onLoginPressed} type='primary' />
      <CustomButton
        text="Don't you have an account?"
        onPress={onLoginPressed}
        type="sec"
      />
    </View>
  );
};

export default LoginScreen;
