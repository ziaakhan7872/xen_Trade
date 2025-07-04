import { ImageBackground, Platform, StatusBar, StyleSheet, View, } from 'react-native';
import React from 'react';
import images from '../images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wp, hp } from './ResponsiveComponent';

export const AuthMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{
      ...styles?.mainContainer,
      marginTop: Platform.OS == 'ios' ? insets.top : 0, marginBottom: Platform.OS == 'ios' ? insets.bottom - hp(1) : 0, paddingHorizontal: paddingHorizontal ?? wp(0),
    }, style]}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <ImageBackground
        source={images.authBgImage}
        resizeMode='cover'
        style={{
          flex: 1,
          width: wp(100),
        }}
      >
        <View style={[{ flex: 1 }, containerStyle]}>{children}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

});