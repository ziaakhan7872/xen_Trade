import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { colors, fontFamily, } from '../../../../constants'
import InputText from '../../../../components/InputText'
import { SimpleButton } from '../../../../components/SimpleButton'
import RowButton from '../../../../components/RowButton'
import AntDesign from "react-native-vector-icons/AntDesign";
import { ResponsiveText } from '../../../../components/ResponsiveText';

const LoginForm = ({ signUp, Login, email, setEmail, password, setPassword, passwordVisible, setPasswordVisible, errorMessage, goToForgotPassword }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.mainBox}>
                    <Image source={images.splashLogoImage} resizeMode='contain' style={styles.logoImage} />
                    <Spacer />
                    <ResponsiveText style={styles.titleText}>LOG INTO XEN TRADE</ResponsiveText>
                    <Spacer />
                    <View>
                        <InputText value={email} onChangeText={setEmail} paddingLeft={wp(3)} label={"Email Address"} placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />
                        <Spacer height={hp(1)} />
                        <InputText handleIconPress={() => setPasswordVisible(!passwordVisible)} isPasswordVisible={!passwordVisible} secureTextEntry={!passwordVisible} value={password} onChangeText={setPassword} paddingLeft={wp(3)} icon={true} label={"Password"} placeholder={"Enter your  password"} placeholderTextColor={colors.placeHolderTextColor} />
                        <Spacer height={hp(1)} />
                        <ResponsiveText onPress={goToForgotPassword} style={[styles.forgetPasswordStyling, { textDecorationLine: 'underline' }]}> Forgot Password?</ResponsiveText>
                        <Spacer />
                        {errorMessage && (
                            <>
                                <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{errorMessage}</ResponsiveText>
                                <Spacer />
                            </>
                        )}
                        <SimpleButton disabled={(!email || !password)} onPress={Login} textFontSize={14} text={"Sign in"} textColor={colors.buttonSigninColor} backgroundColor={(!email || !password) ? colors.authButtonColor : colors.mainColor} buttonWidth={wp(80)} />
                        {/* <SimpleButton onPress={Login} textFontSize={14} text={"Sign in"} textColor={colors.buttonSigninColor} backgroundColor={(!email || !password) ? colors.authButtonColor : colors.mainColor} buttonWidth={wp(80)} /> */}
                        <Spacer />
                        <ResponsiveText style={styles.signInWithStyle}>Or sign in with</ResponsiveText>
                        <Spacer />
                        <RowButton
                            buttonWidth={wp(38)}
                            buttonBackGroundColor={colors.authButtonColor}
                            borderRadius={wp(16.5)}
                            image1={<AntDesign name="apple1" size={16} color="white" />}
                            label1={<ResponsiveText style={styles.labelText}>Apple</ResponsiveText>}
                            image2={<AntDesign name="google" size={16} color="white" />}
                            label2={<ResponsiveText style={styles.labelText}>Google</ResponsiveText>}
                        />
                        <Spacer />
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <ResponsiveText style={[styles.signInWithStyle, { fontSize: 14 }]}>Don't have an account?</ResponsiveText>
                            <ResponsiveText onPress={signUp} style={[styles.forgetPasswordStyling, { fontSize: 14, marginLeft: wp(1) }]}>Sign Up</ResponsiveText>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        // justifyContent: 'center', // Vertically center the content
        // alignItems: 'center', // Horizontally center the content
        // paddingVertical: hp(3), // Add some vertical spacing to the container
    },
    mainBox: {
        width: wp(90),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.boxColor,
        borderRadius: wp(3),
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingTop: hp(10), // visually center when keyboard is closed
        paddingBottom: hp(5),
        alignItems: 'center',
    },
    logoImage: {
        width: wp(30),
        height: hp(4),
    },
    titleText: {
        fontSize: 22,
        color: colors.white,
        fontFamily: fontFamily.mainTextSemiBold
    },
    forgetPasswordStyling: {
        textAlign: "right",
        fontSize: 12,
        color: colors.mainColor,
        fontFamily: fontFamily.appTextMedium,
    },
    signInWithStyle: {
        fontSize: 16,
        fontFamily: fontFamily.appTextRegular,
        textAlign: "center",
        color: colors.iconColor
    },
    labelText: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fontFamily.appTextRegular,
    },
});
