import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';
import { ResponsiveText } from './ResponsiveText';
import Ionicons from 'react-native-vector-icons/Octicons';

const HomeHeader = ({headerTitle,onpress}) => {
  return (
    <View style={styles.HeaderView}>
      <ResponsiveText style={styles.headerTitle}>{headerTitle}</ResponsiveText>
      <TouchableOpacity onPress={onpress}>
      <Ionicons  name="three-bars" size={25} color={colors.mainColor} />  
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  HeaderView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,  
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
  },
});
