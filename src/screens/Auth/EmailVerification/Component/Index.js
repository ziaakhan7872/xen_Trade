import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { OtpInput } from "react-native-otp-entry";
import { SimpleButton } from '../../../../components/SimpleButton'
import BottomSheet from '../../../../components/BottomSheet'
import Line from '../../../../components/Liner'


const EmailVerificationForm = ({ submit }) => {
    return (
        <View style={styles.mainBox}>
            <Image source={images.splashLogoImage} resizeMode="contain" style={styles.logoImage} />
            <Spacer />
            <ResponsiveText style={styles.titleText}>Email Verification</ResponsiveText>
            <Spacer height={hp(1)} />
            <ResponsiveText style={styles.infoText}>
                Please enter the 6-digit verification code to confirm your email. The code is valid for 30 minutes
            </ResponsiveText>
            <Spacer />
            <OtpInput
                focusColor={colors.mainColor}
                numberOfDigits={6}
                onTextChange={(text) => console.log(text)}
                theme={{
                    pinCodeContainerStyle: styles.otpInputStyle,
                    pinCodeTextStyle: styles.pinStyle
                }}
            />
            <Spacer />
            <ResponsiveText style={styles.resendCode}>Resend Code</ResponsiveText>
            <Spacer />
            <SimpleButton onPress={submit} text={"Submit"} textColor={colors.black} backgroundColor={colors.mainColor} buttonWidth={wp(80)} />
        </View>
    )
}

export default EmailVerificationForm

export const EmailVerificationBottomSheet = ({ bottomSheetRef, closeBottomSheet}) => {
    return (
        <BottomSheet  ref={bottomSheetRef} height={600}>
            <Spacer />
            <View style={styles.BottomSheetView}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <ResponsiveText style={styles.bottomSheetTitle}>VERIFY YOUR ACCOUNT</ResponsiveText>
                    <ResponsiveText onPress={closeBottomSheet} style={styles.bottomSheetTitle}>X</ResponsiveText>
                </View>
            </View>
            <Spacer />
            <Line height={1} />
            <Spacer />
            <View style={styles.mainBox}>
                <View style={styles.bottomSheetImageView}>
                    <Image resizeMode='contain' source={images.securitySettingIcon} style={styles.Image} />
                </View>
                <Spacer />
                <ResponsiveText style={styles.bottomSheetText}>SECURE YOUR ACCOUNT</ResponsiveText>
                <Spacer />
                <ResponsiveText style={styles.bottomSheetTextInfo}>Enable 2 Factor authentification to enable transfers</ResponsiveText>
                <Spacer/>
                <SimpleButton text={"Enable 2FA"} textColor={colors.black} height={hp(6)} buttonWidth={wp(80)} />
            </View>
            <Spacer/>
             <View style={styles.mainBox}>
                <View style={styles.bottomSheetImageView}>
                    <Image resizeMode='contain' source={images.AccountVerify} style={styles.Image} />
                </View>
                <Spacer />
                <ResponsiveText style={styles.bottomSheetText}>VERIFY YOUR ACCOUNT</ResponsiveText>
                <Spacer />
                <ResponsiveText style={styles.bottomSheetTextInfo}>Complete KYC account verification to enable transfers</ResponsiveText>
                <Spacer/>
                <SimpleButton text={"Complete Verification"} textColor={colors.white} height={hp(6)} buttonWidth={wp(80)} backgroundColor={colors.buttonSigninColor}/>
            </View>
        </BottomSheet>
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
        fontWeight: "600",
        color: colors.white
    },
    infoText: {
        fontWeight: "400",
        fontSize: 14,
        color: colors.iconColor,
        width: wp(80)
    },
    otpInputStyle: {
        backgroundColor: colors.InputTextCOlor,
        borderRadius: wp(2.5),
        width: wp(12),
        height: hp(6.2),
        color: colors.mainColor,
        textAlign: 'center',
        fontSize: 18,
        borderWidth: 1,
        borderColor: colors.BorderColor
    },
    pinStyle: {
        color: colors.mainColor
    },
    resendCode: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.mainColor,
        textAlign: "center"
    },
    BottomSheetView: {
        width: wp(90),
    },
    bottomSheetTitle: {
        fontWeight: "700",
        fontSize: 18,
        color: colors.white
    },
    bottomSheetText: {
        fontWeight: "500",
        fontSize: 18,
        color: colors.white
    },
    bottomSheetTextInfo: {
        fontWeight: "500",
        fontSize: 14,
        color: colors.iconColor
    },
    bottomSheetImageView: {
        width: wp(10.5),
        height: wp(10.5),
        borderRadius: wp(5.25),
        backgroundColor: colors.bottomSheetImageViewColor,
        justifyContent: "center",
        alignItems: "center"
    },
    Image: {
        width: wp(6.41),
        height: wp(6.41),
    },

})