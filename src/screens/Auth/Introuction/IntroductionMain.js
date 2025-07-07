import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import images from '../../../images';
import { SimpleButton } from '../../../components/SimpleButton';
import { style } from './Style';
import { useNavigation } from '@react-navigation/native';
import { colors, Routes } from '../../../constants';
import Spacer from '../../../components/Spacer';
import images from '../../../images';
import LinearGradient from 'react-native-linear-gradient';

const LoginMainScreen = () => {
  const navigation = useNavigation();
  console.log('Entered login Main Screen');

  return (
    <View style={style.container}>
      <ImageBackground source={images.splashScreenBg} style={style.imageBackGround} resizeMode="cover">
        <View style={style.centeredContent}>
          <Image source={images.splashLogoImage} resizeMode="contain" style={style.logoImage} />
          <Spacer />
          <Text style={style.titleText}>
            Aut quia quia eos sunt dolores aut voluptate nobis aut error omnis eum adipisci dolores quo minus velit.
          </Text>
        </View>

        <View style={style.buttonContainer}>
          <SimpleButton
            textColor={colors.black}
            fontSize={14}
            fontWeight={500}
            onPress={() => { navigation.navigate(Routes.AppNavigator); }}
            backgroundColor="#05BADA"
            text="Login"

          />
          <Spacer />
          <LinearGradient
            colors={['#FFFFFF12', '#FFFFFF12']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.gradientContainer}
          >
            <SimpleButton
              textColor={colors.white}
              fontSize={14}
              fontWeight={500}
              onPress={() => { navigation.navigate(Routes.AppNavigator); }}
              backgroundColor={colors.transparent}
              text="Sign Up"
            />
          </LinearGradient>

        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginMainScreen;


