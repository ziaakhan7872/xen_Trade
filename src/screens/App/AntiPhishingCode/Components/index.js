import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import TextInputField from '../../../../components/TextInputField'

export const AntiPhishingComponent = ({ antiCode, setAntiCode }) => {
    return (
        <>
            <ResponsiveText style={styles.description}>Once the code is added, it will be included in all emails received from the system</ResponsiveText>
            <Spacer />

            <View style={styles.warningContainer}>
                <ResponsiveText style={styles.warningText}>Do not disclose your password and authentication code to anyone, including support.</ResponsiveText>
            </View>
            <Spacer height={hp(1.5)} />
            <ResponsiveText style={styles.inputLabel}>Anti-Phishing Code</ResponsiveText>
            <TextInputField value={antiCode} onChangeText={(text) => setAntiCode(text)} placeholder={'Enter Anti-phishing code here'} placeholderTextColor={colors.placeHolderTextColor} />
        </>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
        color: colors.lightTextColor,
        textAlign: 'center',
        fontFamily: fontFamily.appTextRegular,
    },
    warningContainer: {
        backgroundColor: colors.warningBgColor,
        padding: wp(3.5),
        borderRadius: 12,
        marginBottom: hp(2),
    },
    warningText: {
        fontSize: 14,
        color: colors.warningTextColor,
        fontFamily: fontFamily.appTextRegular,
        lineHeight: wp(4.5),
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        color: colors.white,
        fontFamily: fontFamily.appTextRegular,
    },
})