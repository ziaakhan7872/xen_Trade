import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { OtpInput } from 'react-native-otp-entry'
import { colors, fontFamily } from '../../../../constants'
import { SimpleButton } from '../../../../components/SimpleButton'

export const EmailVerificationForm = ({ submit, setOtpCode, errorMessage, resendOtp }) => {
    return (
        <View style={styles.mainBox}>
            <Image source={images.splashLogoImage} resizeMode="contain" style={styles.logoImage} />
            <Spacer />
            <ResponsiveText style={styles.titleText}>EMAIL VERIFICATION</ResponsiveText>
            <Spacer height={hp(1)} />
            <ResponsiveText style={styles.infoText}>
                Please enter the 6-digit verification code to confirm your email. The code is valid for 30 minutes
            </ResponsiveText>
            <Spacer />
            <OtpInput
                focusColor={colors.mainColor}
                numberOfDigits={6}
                onTextChange={(text) => setOtpCode(text)}
                theme={{
                    pinCodeContainerStyle: styles.otpInputStyle,
                    pinCodeTextStyle: styles.pinStyle
                }}
            />
            <Spacer />
            {errorMessage
                && (
                    <>
                        <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{errorMessage}</ResponsiveText>
                        <Spacer />
                    </>
                )}
            <ResponsiveText onPress={resendOtp} style={styles.resendCode}>Resend Code</ResponsiveText>
            <Spacer />
            <SimpleButton onPress={submit} text={"Continue"} textColor={colors.black} backgroundColor={colors.mainColor} buttonWidth={wp(80)} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainBox: {
        width: wp(90),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.boxColor,
        borderRadius: wp(3)
    },
    logoImage: {
        width: wp(30),
        height: hp(4),
    },
    titleText: {
        fontSize: 22,
        color: colors.white,
        fontFamily: fontFamily.mainTextSemiBold,
    },
    infoText: {
        fontFamily: fontFamily.appTextRegular,
        lineHeight: 20,
        fontSize: 14,
        color: colors.iconColor,
        width: wp(80)
    },
    otpInputStyle: {
        backgroundColor: colors.InputTextCOlor,
        fontFamily: fontFamily.appTextMedium,
        borderRadius: wp(2.5),
        width: wp(12),
        height: hp(6.2),
        color: colors.mainColor,
        textAlign: 'center',
        fontSize: 18,
        borderWidth: 1,
        borderColor: colors.borderColor
    },
    pinStyle: {
        color: colors.mainColor
    },
    resendCode: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: colors.mainColor,
        textAlign: "center"
    },
})