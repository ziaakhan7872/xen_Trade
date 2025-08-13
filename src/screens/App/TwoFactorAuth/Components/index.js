import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import images from '../../../../images'
import { SimpleButton } from '../../../../components/SimpleButton'
import TextInputField from '../../../../components/TextInputField'
import { colors, fontFamily } from '../../../../constants'

export const TwoFactorContent = ({ code, setCode }) => {
    return (
        <>
            <ResponsiveText style={styles.heading}>2-Factor authentication</ResponsiveText>
            <ResponsiveText style={styles.description}>Enable 2-Factor authentication via Google Authenticator, or any 2FA App</ResponsiveText>
            <Spacer height={hp(4)} />

            <View style={styles.qrWrapper}>
                <Image source={images.testQrImg} style={styles.qrImage} />
            </View>

            <Spacer height={hp(2)} />
            <SimpleButton text="Secret Code" styleView={styles.secretBtn} />
            <Spacer height={hp(3)} />

            <ResponsiveText style={styles.inputLabel}>Enter code from 2-FA app</ResponsiveText>
            <TextInputField value={code} onChangeText={(text) => setCode(text)} placeholder={'Enter Code'} placeholderTextColor={colors.placeHolderTextColor} />
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
        marginBottom: hp(0.5),
    },
    description: {
        fontSize: 12,
        color: colors.lightTextColor,
        fontFamily: fontFamily.appTextRegular,
    },
    qrWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrImage: {
        width: wp(50),
        height: wp(50),
        resizeMode: 'contain',
    },
    secretBtn: {
        width: wp(46),
        alignSelf: 'center',
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        borderRadius: wp(10),
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        color: colors.white,
        fontFamily: fontFamily.appTextRegular,
    },
})