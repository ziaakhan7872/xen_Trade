import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
// import { OtpInput } from "react-native-otp-entry";
import { SimpleButton } from '../../../../components/SimpleButton'
import { appStyles } from '../../../../utilities'


export const LoginVerificationForm = ({ submit, setOtpCode, errorMessage, code, setCode, resendOtp, userEmail, loading }) => {
    return (
        <View style={styles.mainBox}>
            <Spacer height={hp(0.5)} />
            <Image source={images.splashLogoImage} resizeMode="contain" style={styles.logoImage} />
            <Spacer />
            <ResponsiveText style={styles.titleText}>EMAIL VERIFICATION</ResponsiveText>
            <Spacer height={hp(1)} />
            <ResponsiveText style={styles.infoText}>Enter the Verification code we sent to <ResponsiveText style={styles.blueText}>{userEmail}</ResponsiveText> This helps us keep your account secure by verifying that it's really you. </ResponsiveText>
            <Spacer />

            <View style={styles.containerInner}>
                <TextInput value={code} keyboardType='number-pad' inputMode='numeric' maxLength={6} onChangeText={setCode} style={styles.input} placeholder="Enter Code" placeholderTextColor={colors.placeHolderTextColor} />
                <TouchableOpacity onPress={resendOtp}>
                    <ResponsiveText style={[styles.blueText, { alignItems: 'flex-end' }]}>Get Code</ResponsiveText>
                </TouchableOpacity>
            </View>
            <Spacer height={hp(0.6)} />
            {errorMessage
                && (
                    <>
                        <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{errorMessage}</ResponsiveText>
                        <Spacer />
                    </>
                )}
            <Spacer />
            <SimpleButton o
                nPress={submit}
                text={"Submit"}
                textColor={code == '' ? colors.disableColor2 : colors.black}
                backgroundColor={code != '' ? colors.mainColor : colors.disableColor} 
                buttonWidth={wp(84.2)} 
                height={hp(6.5)}
                disabled={code == '' ? true : false}
                loading={loading}
            />

        </View>
    )
}


// export const EmailVerificationBottomSheet = ({ bottomSheetRef, closeBottomSheet }) => {
//     return (
//         <GorhomBottomSheet sheetRef={bottomSheetRef}>
//             <Spacer />
//             <View style={styles.BottomSheetView}>
//                 <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//                     <ResponsiveText style={styles.bottomSheetTitle}>VERIFY YOUR ACCOUNT</ResponsiveText>
//                     <ResponsiveText onPress={closeBottomSheet} style={styles.bottomSheetTitle}>X</ResponsiveText>
//                 </View>
//             </View>
//             <Spacer />
//             <Line height={1} />
//             <Spacer />
//             <View style={styles.mainBox}>
//                 <View style={styles.bottomSheetImageView}>
//                     <Image resizeMode='contain' source={images.securitySettingIcon} style={styles.Image} />
//                 </View>
//                 <Spacer />
//                 <ResponsiveText style={styles.bottomSheetText}>SECURE YOUR ACCOUNT</ResponsiveText>
//                 <Spacer height={hp(0.5)} />
//                 <ResponsiveText style={styles.bottomSheetTextInfo}>Enable 2 Factor authentification to enable transfers</ResponsiveText>
//                 <Spacer />
//                 <SimpleButton text={"Enable 2FA"} textColor={colors.black} height={hp(6)} buttonWidth={wp(80)} />
//             </View>
//             <Spacer />
//             <View style={styles.mainBox}>
//                 <View style={styles.bottomSheetImageView}>
//                     <Image resizeMode='contain' source={images.AccountVerify} style={styles.Image} />
//                 </View>
//                 <Spacer />
//                 <ResponsiveText style={styles.bottomSheetText}>VERIFY YOUR ACCOUNT</ResponsiveText>
//                 <Spacer height={hp(0.5)} />
//                 <ResponsiveText style={styles.bottomSheetTextInfo}>Complete KYC account verification to enable transfers</ResponsiveText>
//                 <Spacer />
//                 <SimpleButton  text={"Complete Verification"} textColor={colors.white} height={hp(6)} buttonWidth={wp(80)} backgroundColor={colors.buttonSigninColor} />
//             </View>
//         </GorhomBottomSheet>
//     )
// }

const styles = StyleSheet.create({
    mainBox: {
        width: wp(92),
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
        lineHeight: 17,
        fontSize: 14,
        color: colors.iconColor,
        textAlign: 'justify'
        // width: wp(80)
    },
    blueText: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.mainColor,
    },
    // otpInputStyle: {
    //     backgroundColor: colors.InputTextCOlor,
    //     fontFamily: fontFamily.appTextMedium,
    //     borderRadius: wp(2.5),
    //     width: wp(12),
    //     height: hp(6.2),
    //     color: colors.mainColor,
    //     textAlign: 'center',
    //     fontSize: 18,
    //     borderWidth: 1,
    //     borderColor: colors.borderColor
    // },
    // pinStyle: {
    //     color: colors.mainColor
    // },
    // resendCode: {
    //     fontSize: 14,
    //     fontFamily: fontFamily.appTextMedium,
    //     color: colors.mainColor,
    //     textAlign: "center"
    // },
    BottomSheetView: {
        width: wp(90),
    },
    bottomSheetTitle: {
        fontFamily: fontFamily.mainTextBold,
        fontSize: 18,
        color: colors.white
    },
    bottomSheetText: {
        fontFamily: fontFamily.mainTextMedium,
        fontSize: 18,
        color: colors.white
    },
    bottomSheetTextInfo: {
        fontFamily: fontFamily.appTextMedium,
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
    containerInner: {
        ...appStyles.rowBasic,
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(3),
        height: hp(6.4),
        width: wp(84.2),
        paddingHorizontal: wp(2.5),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
    },
    // rightIconWrapper: {
    //     paddingHorizontal: wp(2),
    // },
})