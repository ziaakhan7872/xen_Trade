// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { wp } from './ResponsiveComponent'
// import { ResponsiveText } from './ResponsiveText'
// import { colors, fontFamily } from '../constants'

// export const MainHeader = ({ leftImage, title, onBackPress }) => {
//   return (
//     <View style={styles.headerContainer}>
//       <TouchableOpacity onPress={onBackPress} style={styles.leftIconWrapper}>
//         <Image source={leftImage} style={styles.leftImage} />
//       </TouchableOpacity>

//       <View style={styles.titleWrapper}>
//         <ResponsiveText style={styles.title}>{title}</ResponsiveText>
//       </View>

// {/* Placeholder to balance the left icon */}
// <View style={styles.rightSpacer} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     //paddingHorizontal: wp(4),
//     paddingTop: wp(4),
//     justifyContent: 'space-between',
//   },
// leftIconWrapper: {
//   width: wp(10),
//   alignItems: 'flex-start',
// },
//   leftImage: {
//     width: wp(6),
//     height: wp(6),
//     resizeMode: 'contain',
//   },
// titleWrapper: {
//   flex: 1,
//   alignItems: 'center',
// },
//   title: {
//     fontSize: 17,
//     fontWeight: '500',
//     letterSpacing: 0.1,
//     fontFamily: fontFamily.appTextMedium,
//     color: colors.white,
//   },
// rightSpacer: {
//   width: wp(10),
// }
// })
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wp } from './ResponsiveComponent'
import { ResponsiveText } from './ResponsiveText'
import { colors, fontFamily } from '../constants'
import { appStyles } from '../utilities'

export const MainHeader = ({ leftImage, title, onBackPress }) => {
  return (
    <View style={{ ...appStyles.row, ...styles.headerMainContainer }}>
      <TouchableOpacity onPress={onBackPress} style={styles.leftIconWrapper}>
        <Image source={leftImage} style={styles.leftImage} />
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <ResponsiveText style={styles.title}>{title}</ResponsiveText>
      </View>

      {/* Placeholder to balance the left icon */}
      <View style={styles.rightSpacer} />
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
  title: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
    fontFamily: fontFamily.appTextMedium,
    color: colors.white,
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  rightSpacer: {
    width: wp(10),
  },
  leftIconWrapper: {
    width: wp(10),
    alignItems: 'flex-start',
  },
})