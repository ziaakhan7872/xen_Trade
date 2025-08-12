import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../constants'
import { wp, hp } from './ResponsiveComponent'

const TextInputField = ({ placeholder, placeholderTextColor, multiline, maxLength, height, borderColor, textAlignVertical, value, onChangeText, fontFamily, editable }) => {

    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.inputField, height ? { height } : {}, borderColor ? { borderColor } : {}, fontFamily ? { fontFamily } : {}]}
            editable={editable}
            multiline={multiline}
            maxLength={maxLength}
            textAlignVertical={textAlignVertical}
            value={value}
            onChangeText={onChangeText}
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
        color: colors.white,
        fontFamily: fontFamily.appTextLight,
    },
})