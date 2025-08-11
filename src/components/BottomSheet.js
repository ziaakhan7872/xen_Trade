import React, { forwardRef, useState } from 'react';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BlurView } from "@react-native-community/blur";
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';
import { Portal } from 'react-native-portalize';

const BottomSheet = forwardRef(({ maxHeight, customHeight, children, height }, ref) => {
  const [measuredHeight, setMeasuredHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    const maxSheetHeight = Dimensions.get('window').height * (customHeight || 0.85);
    setMeasuredHeight(maxHeight ? maxSheetHeight : Math.min(height, maxSheetHeight));
  };

  const finalHeight = height || measuredHeight;

  return (
    <>
      {/* Only render blur when open */}
      {isOpen && (
        <Portal>
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"
            blurAmount={6}
            reducedTransparencyFallbackColor="rgba(0,0,0,0.3)"
          />
        </Portal>

      )}

      {/* Layout measurement off-screen */}
      {!measuredHeight && (
        <View onLayout={handleContentLayout} style={{ position: 'absolute', left: -9999 }}>
          {children}
        </View>
      )}

      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={finalHeight}
        openDuration={500}
        closeDuration={400}
        animationType='slide'
        onOpen={() => setIsOpen(true)}   // Show blur
        onClose={() => setIsOpen(false)} // Hide blur
        customModalProps={{ statusBarTranslucent: true, transparent: true, presentationStyle: 'overFullScreen', }}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent', // Allow seeing behind
            ...(isOpen && Platform.OS === 'ios'
              ? { flex: 1 }
              : {})
          },
          container: {
            backgroundColor: colors.bottomSheetBackgroundColor,
            alignItems: 'center',
            borderTopLeftRadius: wp(3.5),
            borderTopRightRadius: wp(3.5),
            overflow: 'hidden', // required on iOS to clip corners
          },
        }}
      >
        {children}
      </RBSheet>
    </>
  );
});

export default BottomSheet;

