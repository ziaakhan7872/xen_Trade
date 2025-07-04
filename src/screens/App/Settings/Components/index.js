import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { wp, hp } from '../../../../components/ResponsiveComponent';
import images from '../../../../images';
import { appStyles } from '../../../../utilities';
import { colors } from '../../../../constants';

const SettingOption = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={[styles.optionCard, appStyles.row]} onPress={onPress}>
      <View style={styles.optionDirection}>
        <Image source={icon} style={styles.optionIcon} />
        <ResponsiveText style={styles.optionText}>{label}</ResponsiveText>
      </View>
      <Image source={images.rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );
};

export default SettingOption;

const styles = StyleSheet.create({
  optionCard: {
    backgroundColor: '#011A1F',
    padding: wp(4),
    borderRadius: wp(3),
    borderColor: '#10272C',
    borderWidth: 1.1,
  },
  optionDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: wp(7),
    height: wp(7),
    marginRight: wp(4),
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 15.5,
    fontWeight: '600',
  },
  rightArrow: {
    width: wp(5),
    height: wp(5),
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});
