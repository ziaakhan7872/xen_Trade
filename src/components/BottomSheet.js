import React, { forwardRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';

const BottomSheet = forwardRef(({ children, height }, ref) => {
  return (
    <RBSheet
      ref={ref} 
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={height}
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
          alignItems:"center"        
        },
      }}
    >
      {children} 
    </RBSheet>
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
    padding: 20,
    textAlign: 'center',
  },
});

export default BottomSheet;
