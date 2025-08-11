import React, { useMemo } from 'react';
import { StatusBar, StyleSheet, View, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { wp } from './ResponsiveComponent';

export const AuthMainContainer = ({
  style,
  containerStyle,
  children,
  paddingHorizontal = 0,
  // allow screens to tweak the offset if they have a header
  keyboardVerticalOffset = 0,
  behavior = Platform.OS === 'ios' ? 'padding' : 'height',
}) => {
  // Use screen height so the gradient ignores window resize when keyboard shows
  const screenHeight = useMemo(() => Dimensions.get('screen').height, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#011316' }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Fixed full-screen gradient that never moves */}
            <View style={{ flex: 1 }}>

      <LinearGradient
        pointerEvents="none"
        colors={['#0a2a2f', '#011316']}
        locations={[0, 0.54]}
        start={{ x: 0.5, y: 0.15 }}
        end={{ x: 0.5, y: 0.6 }}
        style={[StyleSheet.absoluteFillObject, { height: screenHeight }]}
      />

      {/* Content + built-in KeyboardAvoidingView */}
      <SafeAreaView style={[styles.safeArea, style]} edges={['top', 'left', 'right','bottom']}>
        <View style={styles.flex}>
          <View
            style={[
              styles.container,
              { paddingHorizontal: wp(paddingHorizontal) },
              containerStyle,
            ]}
          >
            <KeyboardAvoidingView
              style={styles.flex}
              behavior={behavior}
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              {children}
            </KeyboardAvoidingView>
            
          </View>
        </View>
      </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  flex: { flex: 1 },
  container: { flex: 1 },
});
