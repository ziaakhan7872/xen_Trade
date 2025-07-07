import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { OtpInput } from "react-native-otp-entry";
import { SimpleButton } from '../../../../components/SimpleButton'


const EmailVerificationForm = () => {
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
                    pinCodeTextStyle:styles.pinStyle
                }}
            />
            <Spacer/>
            <ResponsiveText style={styles.resendCode}>Resend Code</ResponsiveText>
            <Spacer/>
            <SimpleButton text={"Submit"} textColor={colors.black} backgroundColor={colors.mainColor} buttonWidth={wp(80)} />
        </View>
    )
}

export default EmailVerificationForm

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
    pinStyle:{
        color:colors.mainColor
    },
    resendCode:{
        fontSize:14,
        fontWeight:"500",
        color:colors.mainColor,
        textAlign:"center"
    }
})