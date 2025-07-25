import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../constants'
import { hp, wp } from './ResponsiveComponent'
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from "react-native-vector-icons/EvilIcons"


const InputText = ({ handleRightIconPress,paddingLeft=0, rightIcon, label, value, onChangeText, placeholder, secureTextEntry, style, placeholderTextColor, handleIconPress, isPasswordVisible, icon, width = wp(80) }) => {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.inputWrapper}>
                {/* Left Icon (Search) */}
                {rightIcon && (
                    <View style={styles.leftIcon}>
                        <EvilIcons name="search" color={colors.mainColor} size={25} />
                    </View>
                )}

                {/* TextInput */}
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    style={[
                        styles.input,
                        { paddingLeft: rightIcon ? wp(8) : paddingLeft, width: width }
                    ]}
                    placeholderTextColor={placeholderTextColor}
                />


                {/* Right Icon (Password Eye) */}
                {icon && (
                    <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                        <Feather name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.iconColor} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        color: colors.white,
        fontFamily: fontFamily.appTextRegular
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    input: {
        height: hp(6),
        borderRadius: wp(3),
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: "300",
        backgroundColor: colors.InputTextCOlor,
        fontFamily: fontFamily.appTextLight,
        width: wp(80),
        color: colors.white
    },
    iconContainer: {
        position: "absolute",
        right: wp(5),
        bottom: hp(2)
    },
    rightIconContainer: {
        position: "absolute",
        right: wp(5),
        bottom: hp(2)

    },
    leftIcon: {
        position: "absolute",
        left: 5,
        zIndex: 1,
        bottom: hp(1.8)
    },
})
