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
import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../FireBase.config';

const RegisterScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  onRegisterPressed = () => {
    console.warn('you have been registred');
  };
  onLoginPressed = () => {
    console.warn('Login page');
    navigation.navigate('Login');
  };

  const auth = FIREBASE_AUTH;

  const Register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password,
      );
      console.log(response.user.email);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
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

      <CustomButton text="Register" onPress={Register} type="primary" />
      <Text style={style.text}>
        By registering, you conform that you accept our{' '}
        <Text style={style.link}>Terms of Use</Text> and{' '}
        <Text style={style.link}>Privacy police</Text>
      </Text>
      <CustomButton
        text="Already have an account? Login here"
        type="sec"
        onPress={onLoginPressed}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 24, margin: 10, color: '#051C60' },
  text: { color: 'grey', marginVertical: 10 },
  link: {
    color: '#FDB075',
  },
});

export default RegisterScreen;
