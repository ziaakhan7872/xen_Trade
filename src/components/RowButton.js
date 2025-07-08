import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';
import { HorizontalSpacer } from './Spacer';

const RowButton = ({ iconShow = true, image1, label1, image2, label2,borderRadius,onPressFirstButton,onPressSecondButton }) => {
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity onPress={onPressFirstButton} style={[styles.buttonStyling,{borderRadius:borderRadius}]}>
        {iconShow && image1}
        <HorizontalSpacer width={wp(3)} />
        {label1}
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSecondButton} style={[styles.buttonStyling,{borderRadius:borderRadius}]}>
        {iconShow && image2}
        <HorizontalSpacer width={wp(3)} />
        {label2}
      </TouchableOpacity>
    </View>
  );
};

export default RowButton;

const styles = StyleSheet.create({
  buttonRow: {
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyling: {
    width: wp(38),
    paddingVertical: wp(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.authButtonColor,
    borderRadius: wp(16.5),
  },
  labelText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
    marginLeft: wp(3),
  },
});
