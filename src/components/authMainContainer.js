import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from './ResponsiveComponent';
import LinearGradient from 'react-native-linear-gradient';

export const AuthMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal = 0
}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Gradient Background */}
      <LinearGradient
        colors={['#0a2a2f', '#011316']} // Top: dark teal, Bottom: blackish
        locations={[0, 0.54]}            // Move blackish color up slightly (was 0.9 before)
        start={{ x: 0.5, y: 0.15 }}
        end={{ x: 0.5, y: 0.6 }}
        style={styles.linearGradient}
      >

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
      </LinearGradient>
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
  },
  container: {
    flex: 1,
  },
});
