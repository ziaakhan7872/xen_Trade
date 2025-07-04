import { StyleSheet, Text } from 'react-native'
import React from 'react'
// import { appStyles } from '../utilities'
import { colors, fontFamily, fontSize } from '../constants'

export const ResponsiveText = ({ children, style, animation, duration, delay, onPress, numberOfLines }) => {
    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles?.textStyle, style]}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        fontFamily: fontFamily?.appTextMedium,
        color: colors?.appTextColor1
    }
})