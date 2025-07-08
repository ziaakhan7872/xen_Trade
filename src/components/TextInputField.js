import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { wp, hp } from './ResponsiveComponent'

const TextInputField = ({ placeholder }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeHolderTextColor}
            style={styles.inputField}
        />
    )
}

export default TextInputField

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(3),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(5),
        padding: wp(3),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        height: hp(6),
        fontSize: 14,
    },
})