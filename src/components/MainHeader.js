import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from './ResponsiveComponent'
import { ResponsiveText } from './ResponsiveText'
import { colors, fontFamily } from '../constants'
import { appStyles } from '../utilities'

export const MainHeader = ({ leftImage, title }) => {
  return (
    <View style={{ ...appStyles.row, width: wp(56.5) }}>
      <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
      <ResponsiveText style={styles.title}>{title}</ResponsiveText>
    </View>
  )
}


const styles = StyleSheet.create({
  leftImage: {
    width: wp(6),
    height: wp(6)
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
    fontFamily: fontFamily.appTextMedium,
    color: colors.white
  }
})