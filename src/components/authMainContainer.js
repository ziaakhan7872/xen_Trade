import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from './ResponsiveComponent';
import LinearGradient from 'react-native-linear-gradient';

export const AuthMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal = 0,
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Gradient Background - Absolute full screen */}
      <LinearGradient
        colors={['#0a2a2f', '#011316']} // Top: dark teal, Bottom: blackish
        locations={[0, 0.54]}            // Adjust gradient position
        start={{ x: 0.5, y: 0.15 }}
        end={{ x: 0.5, y: 0.6 }}
        style={StyleSheet.absoluteFillObject} // Full screen overlay
      />

      {/* Content */}
      <SafeAreaView
        style={[styles.safeArea, style]}
        edges={['top', 'left', 'right']} // Ignore bottom safe area padding
      >
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
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
