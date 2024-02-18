import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { SettingScreenStyle } from '../../styles/globalStyle';
import Setting from '../../assets/images/Setting.png';
import CustomButton from '../common/CustomButton';
import { FIREBASE_AUTH } from '../../../FireBase.config';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLogoutPress = () => {
    FIREBASE_AUTH.signOut()
      .then(() => {
        console.log('Logout successful');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <View style={SettingScreenStyle.container}>
        <Image
          source={Setting}
          style={[SettingScreenStyle.image, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={SettingScreenStyle.text}>Settings</Text>
        <CustomButton text="Logout" type="primary" onPress={onLogoutPress} />
      </View>
    </React.Fragment>
  );
};

export default SettingScreen;
