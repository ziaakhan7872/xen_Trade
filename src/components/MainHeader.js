import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wp } from './ResponsiveComponent'
import { ResponsiveText } from './ResponsiveText'
import { colors, fontFamily } from '../constants'
import { appStyles } from '../utilities'

export const MainHeader = ({ leftImage, rightImage, title, onBackPress, onRightPress }) => {
  return (
    <View style={{ ...appStyles.row, ...styles.headerMainContainer }}>
      <TouchableOpacity onPress={onBackPress} style={styles.leftIconWrapper}>
        <Image source={leftImage} style={styles.leftImage} />
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <ResponsiveText style={styles.title}>{title}</ResponsiveText>
      </View>
      <TouchableOpacity onPress={onRightPress} style={styles.rightIconWrapper}>
        <Image source={rightImage} style={styles.rightImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerMainContainer: {
    paddingTop: wp(4),
  },
  leftImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  rightImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.mainTextMedium,
    color: colors.white,
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  leftIconWrapper: {
    width: wp(10),
    alignItems: 'flex-start',
  },
  rightIconWrapper: {
    width: wp(10),
    alignItems: 'flex-end',
  },
})