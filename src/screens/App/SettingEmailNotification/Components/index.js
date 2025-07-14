import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'

const ToggleSwitch = ({ isEnabled, setIsEnabled, toggleText, isGroup = false, disabled = false, isDisableAll = false }) => {
    const handleToggle = () => {
        if (!disabled) setIsEnabled(!isEnabled)
    }
    return (
        <View style={[appStyles.row, !isGroup]}>
            <ResponsiveText style={[!isGroup && styles.optionText, isGroup && styles.groupParentText, isDisableAll && styles.disableAllText]}>{toggleText}</ResponsiveText>
            <TouchableOpacity activeOpacity={0.8} onPress={handleToggle} disabled={disabled}>
                <Image
                    source={isEnabled ? images.toggleSwitchOn : images.toggleSwitchOff}
                    style={[styles.toggleImage, disabled && { opacity: 0.4 }]}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ToggleSwitch


const styles = StyleSheet.create({
    optionCard: {
        backgroundColor: colors.cardsBgColor,
        padding: wp(4.5),
        borderRadius: wp(3),
        borderColor: colors.cardBorderColor,
        borderWidth: 1.5,
    },
    optionText: {
        fontSize: 14,
        color: colors.lightTextColor,
        fontWeight: '600'
    },
    groupParentText: {
        fontWeight: '700',
        fontSize: 16,
        color: colors.white,
    },
    toggleImage: {
        width: wp(10),
        height: wp(6),
        resizeMode: 'contain',
    },
    disableAllText: {
        color: colors.white,
        fontWeight: 700,
    }
});