import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/registerbackground.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { LoginScreenStyle } from '../../styles/globalStyle';

const RegisterScreen = () => {
  const [userEmail, setUserEmail] = useState('');
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
      <Text style={style.title}>Create an Account</Text>
      <CustomInput
        placeholder="User Name"
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="User Email"
        value={userEmail}
        setValue={setUserEmail}
      />
      <CustomInput
        placeholder="User Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton text="Register" onPress={onLoginPressed} type="primary" />
      <CustomButton text="Already have an account? Login here" type="sec" />
      <CustomButton text="Forget password?" type="third" />
    </View>
  );
};

const style = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 24, margin: 10, color: '#051C60' },
});

export default RegisterScreen;
