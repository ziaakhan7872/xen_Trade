import { ImageBackground, Platform, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import images from '../images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from './ResponsiveComponent';

export const AuthMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal
}) => {
  return (
<<<<<<< HEAD
    <View style={[{
      ...styles?.mainContainer,
      // paddingTop: Platform.OS == 'ios' ? insets.top : 0,
      //  paddingBottom: Platform.OS == 'ios' ? insets.bottom - hp(1) : 0,
        paddingHorizontal: paddingHorizontal ?? wp(0),
    }, style]}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <ImageBackground
        source={images.authBgImage}
        resizeMode='cover'
        style={{
          flex: 1,
          // width: wp(100),
        }}
=======
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={images.authBgImage}
        resizeMode="cover"
        style={styles.imageBackground}
>>>>>>> 43c6c8bc375dff14e8d8df4f6f88ab58af3cea72
      >
        <SafeAreaView style={[styles.safeArea, style]}>
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: paddingHorizontal ?? wp(0),
              },
              containerStyle,
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: wp(100),
    height: hp(100),
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
