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
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground
        source={images.authBgImage}
        resizeMode="cover"
        style={styles.imageBackground}
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
})