import React, { forwardRef, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';

const BottomSheet = forwardRef(({ maxHeight, customHeight, children, height }, ref) => {
  const [measuredHeight, setMeasuredHeight] = useState(null);

  const handleContentLayout = (event) => {
    const { height } = event.nativeEvent.layout;

    // Set the max height for the BottomSheet
    const maxSheetHeight = Dimensions.get('window').height * (customHeight || 0.85);

    // Calculate the height dynamically, ensuring it doesn't exceed the available space
    setMeasuredHeight(maxHeight ? maxSheetHeight : Math.min(height, maxSheetHeight));
  };

  // Fallback to hardcoded height if measuredHeight is not calculated
  const finalHeight = height || measuredHeight  // Fallback to wp(100) or custom height

  return (
    <>
      {/* Layout measurement only once */}
      {!measuredHeight && (
        <View onLayout={handleContentLayout} style={{ position: 'absolute', left: -9999 }}>
          {children}
        </View>
      )}

      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={finalHeight} // Use the final height (either measured or fallback)
        openDuration={600}
        closeDuration={400}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.3)',
          },
          draggableIcon: {
            backgroundColor: "#E4E4E4",
            width: wp('30%'),
          },
          container: {
            backgroundColor: colors.bottomSheetBackgroundColor,
            alignItems: 'center',
            paddingTop: 20, // You can adjust the padding if needed
          },
        }}
      >
        {children} {/* Render children here */}
      </RBSheet>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BottomSheet;
