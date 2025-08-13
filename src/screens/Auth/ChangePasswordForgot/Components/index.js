import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import images from '../../../../images'
import InputText from '../../../../components/InputText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { SimpleButton } from '../../../../components/SimpleButton'
import { colors, fontFamily } from '../../../../constants'

export const ResetPasswordContainer = ({
    passwordVisible, setPasswordVisible,
    confirmPasswordVisible, setConfirmPasswordVisible,
    password, setPassword, confirmPassword, setConfirmPassword, ResetPassword,
    errorMessage, setErrorMessage, loading
}) => {
    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // >
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.mainBox}>
                <Spacer height={hp(0.5)} />
                <Image source={images.splashLogoImage} style={styles.logoImage} />
                <Spacer />
                <ResponsiveText style={styles.titleText}>CHANGE PASSWORD</ResponsiveText>
                <Spacer height={hp(2.5)} />

                <InputText passwordVisible={!passwordVisible} secureTextEntry={!passwordVisible} handleIconPress={() => setPasswordVisible(!passwordVisible)} paddingLeft={wp(3)} value={password} onChangeText={setPassword} icon={true} label={"New Password"} placeholder={"Enter your new password"} placeholderTextColor={colors.placeHolderTextColor} width={wp(84.5)} />
                <Spacer height={hp(1)} />
                <InputText passwordVisible={!confirmPasswordVisible} secureTextEntry={!confirmPasswordVisible} handleIconPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} paddingLeft={wp(3)} value={confirmPassword} onChangeText={setConfirmPassword} icon={true} label={"Confirm new password"} placeholder={"Confirm your new password"} placeholderTextColor={colors.placeHolderTextColor} width={wp(84.5)} />

                <Spacer height={hp(0.6)} />
                {errorMessage && (
                    <>
                        <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{errorMessage}</ResponsiveText>
                        <Spacer />
                    </>
                )}
                {/* <Spacer /> */}
                <SimpleButton loading={loading} onPress={ResetPassword} text={"Continue"} textColor={colors.black} backgroundColor={colors.mainColor} buttonWidth={wp(84.2)} height={hp(6.5)} />
                <Spacer height={hp(0.8)} />

            </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    mainBox: {
        width: wp(92),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.boxColor,
        borderRadius: wp(3)
    },
    scrollViewContainer: {
        flexGrow: 1,
        // paddingTop: hp(5), // visually center when keyboard is closed
        paddingBottom: hp(5),
        alignItems: 'center',
    },
    logoImage: {
        width: wp(30),
        height: hp(4),
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 22,
        color: colors.white,
        fontFamily: fontFamily.mainTextSemiBold,
    },
})