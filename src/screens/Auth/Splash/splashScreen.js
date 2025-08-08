import { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Routes } from '../../../constants';
import { hp, wp } from '../../../components/ResponsiveComponent';
import images from '../../../images';
import { useSelector } from 'react-redux';

const SplashScreen = (props) => {
  const { token, refreshToken } = useSelector((state) => state.user);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (token || refreshToken) {
        props?.navigation.replace(Routes.BottomNavigator);

      }
      else {
        props?.navigation.replace(Routes.AuthNavigator);

      }
    };

    setTimeout(hideSplashScreen, 3000);
  }, []);

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
