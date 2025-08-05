import { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Routes } from '../../../constants';
import { hp, wp } from '../../../components/ResponsiveComponent';
import images from '../../../images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const hideSplashScreen = async () => {
      navigation.replace(Routes.IntroductMainScreem); 
    };

    setTimeout(hideSplashScreen, 3000);
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.splashBgContainer} source={images.splashScreenBg}>
        <Image style={styles.splashImage} source={images.splashLogoImage} resizeMode='contain' />
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  splashBgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: wp(50),
    height: hp(100),
  },
});
