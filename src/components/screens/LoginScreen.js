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

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  return (
    <View style={style.root}>
      <Image
        source={Logo}
        style={[style.Logo, { height: height * 0.3 }]}
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
      <CustomButton/>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  Logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default LoginScreen;
