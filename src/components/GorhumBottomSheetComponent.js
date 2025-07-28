import React, { useCallback, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';


export const GorhomBottomSheet = ({ sheetRef, onCloseRequest, children }) => {

  const renderBackdrop = useCallback((props) => (
    <BottomSheetBackdrop
      {...props}
      opacity={0.3}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior="close"
    />
  ), []);
  try {
    return (

      <BottomSheet
        ref={sheetRef}
        index={-1}
        enablePanDownToClose={true}
        onClose={onCloseRequest}
        backdropComponent={renderBackdrop}
        keyboardBehavior="interactive"
        android_keyboardInputMode="adjustResize"
        backgroundStyle={{ backgroundColor: 'transparent' }}
        handleIndicatorStyle={{ display: 'none' }}
        animationConfigs={{
    duration: 500, // default is ~250ms — increase for slower
  }}
      // enableContentPanningGesture={false}
      // enableHandlePanningGesture={false}

      >
        <BottomSheetView style={styles.sheetContainer}>
          <View style={styles.contentWrapper}>
            {children}
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  } catch (error) {
    console.error("Error rendering GorhomBottomSheet:", error);
  }
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: colors.bottomSheetBackgroundColor,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4)
  },

  contentWrapper: {
    alignItems: 'center',
    paddingBottom: wp(5),
  },
});
