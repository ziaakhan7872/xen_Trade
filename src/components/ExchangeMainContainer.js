import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from './ResponsiveComponent';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants';

export const ExchangeMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal = 0
}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <SafeAreaView style={[styles.safeArea, style]}>
          <View
            style={[
              styles.container,
              { paddingHorizontal: wp(paddingHorizontal) },
              containerStyle,
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: wp(100),
    height: hp(100),
  },
  safeArea: {
    flex: 1,
    backgroundColor:colors.backGroundCOlor
  },
  container: {
    flex: 1,
  },
});
