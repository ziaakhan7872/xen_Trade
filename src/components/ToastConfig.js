import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ResponsiveText } from './ResponsiveText';
import { appStyles } from '../utilities';
import { hp, wp } from './ResponsiveComponent';
import { colors, fontFamily } from '../constants';
import images from '../images';
import LinearGradient from 'react-native-linear-gradient';

export const ToastConfig = {
  verificationAlert: ({ text1, text2, props }) => (
    <LinearGradient
      colors={['rgba(1, 26, 31, 1)', 'rgba(1, 19, 22, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, appStyles.rowBasic]}
    >
      <Image source={images.verifyTick} style={styles.icon} />
      <View >
        <ResponsiveText style={styles.title}>{text1}</ResponsiveText>
        <View style={appStyles.rowBasic}>
          <ResponsiveText style={styles.subtitle}>{text2} </ResponsiveText>
          <ResponsiveText style={[styles.subtitle, { color: colors.mainColor }]}>{props?.email}</ResponsiveText>
        </View>
      </View>
    </LinearGradient>
  ),

  successAlert: ({ text1, text2, props }) => (
    <LinearGradient
      colors={['rgba(1, 26, 31, 1)', 'rgba(1, 19, 22, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, appStyles.rowBasic]}
    >
      <Image source={images.verifyTick} style={styles.icon} />
      <View >
        <ResponsiveText style={styles.title}>{text1}</ResponsiveText>
        <View style={appStyles.rowBasic}>
          <ResponsiveText style={styles.subtitle}>{text2} </ResponsiveText>
          <ResponsiveText style={[styles.subtitle, { color: colors.mainColor }]}>{props?.email}</ResponsiveText>
        </View>
      </View>
    </LinearGradient>
  ),
};



const styles = StyleSheet.create({
  container: {
    marginTop: hp(1),
    width: wp(91.5),
    backgroundColor: colors.cardsBgColor,
    paddingHorizontal: wp(2.5),
    borderRadius: wp(3),
    elevation: 10,
    zIndex: 1000,
  },
  icon: {
    width: wp(7.5),
    height: hp(7.5),
    marginHorizontal: wp(3),
    resizeMode: 'contain',
  },
  title: {
    color: colors.mainColor,
    fontFamily: fontFamily.mainTextSemiBold,
    fontSize: 16,
  },
  subtitle: {
    color: colors.lightTextColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 12,
    marginTop: hp(0.5),
  },
});
