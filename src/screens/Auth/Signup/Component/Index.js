import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import images from '../../../../images';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import { colors, fontFamily } from '../../../../constants';
import InputText from '../../../../components/InputText';
import { SimpleButton } from '../../../../components/SimpleButton';
import RowButton from '../../../../components/RowButton';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";
import { ResponsiveText } from '../../../../components/ResponsiveText';

const SignUpForm = ({
    Login, isChecked, handleCheckboxToggle, handleEmailVerification,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    errorMessage,
    phoneNumber, setPhoneNumber,
    referralCode, setReferralCode,
    isPasswordVisible, setIsPasswordVisible,
    isConfirmPasswordVisible, setIsConfirmPasswordVisible
}) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.mainBox}>
                    <Image source={images.splashLogoImage} resizeMode="contain" style={styles.logoImage} />
                    <Spacer />
                    <ResponsiveText style={styles.titleText}>WELCOME TO XEN TRADE</ResponsiveText>
                    <Spacer />
                    <View>
                        <InputText paddingLeft={wp(3)} value={email} onChangeText={setEmail} label={"Email Address"} placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />
                        <Spacer height={hp(1)} />
                        <InputText isPasswordVisible={!isPasswordVisible} secureTextEntry={!isPasswordVisible} handleIconPress={() => setIsPasswordVisible(!isPasswordVisible)} paddingLeft={wp(3)} value={password} onChangeText={setPassword} icon={true} label={"Password"} placeholder={"Enter your  password"} placeholderTextColor={colors.placeHolderTextColor} />
                        <Spacer height={hp(1)} />
                        <InputText isPasswordVisible={!isConfirmPasswordVisible} secureTextEntry={!isConfirmPasswordVisible} handleIconPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} paddingLeft={wp(3)} value={confirmPassword} onChangeText={setConfirmPassword} icon={true} label={"Confirm password"} placeholder={"Confirm your password"} placeholderTextColor={colors.placeHolderTextColor} />
                        <Spacer height={hp(1)} />

                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity onPress={handleCheckboxToggle} >
                                {isChecked ? (
                                    <FontAwesome5 name="checkbox" size={25} color={colors.mainColor} />
                                ) : (
                                    <Icon name="square" size={25} color={colors.white} />
                                )}
                            </TouchableOpacity>
                            <HorizontalSpacer width={wp(3)} />
                            <ResponsiveText style={styles.PrivacyPolicyText}>
                                By creating an account, I agree to Xen Trade's Terms of Service and Privacy Policy.
                            </ResponsiveText>
                        </View>

                        <Spacer />
                        {errorMessage && (
                            <>
                                <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{errorMessage}</ResponsiveText>
                                <Spacer />
                            </>
                        )}
                        <SimpleButton
                            // disabled={!email || !password || !confirmPassword || !isChecked}
                            onPress={handleEmailVerification}
                            textFontSize={14} text={"Sign Up"}
                            textColor={colors.buttonSigninColor}
                            backgroundColor={(!email || !password || !confirmPassword || !isChecked) ? colors.authButtonColor : colors.mainColor}
                            buttonWidth={wp(80)} />
                        <Spacer />
                        <ResponsiveText style={styles.signInWithStyle}>Or sign up with</ResponsiveText>
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
                            <ResponsiveText style={[styles.signInWithStyle, { fontSize: 14 }]}>Already have an account?</ResponsiveText>
                            <ResponsiveText onPress={Login} style={[styles.forgetPasswordStyling, { fontSize: 14, marginLeft: wp(1) }]}>Sign In</ResponsiveText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
};

export default SignUpForm;

const styles = StyleSheet.create({
    mainBox: {
        width: wp(90),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.boxColor,
        borderRadius: wp(3)
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingTop: hp(6), // visually center when keyboard is closed
        paddingBottom: hp(5),
        alignItems: 'center',
    },
    logoImage: {
        width: wp(30),
        height: hp(4),
    },
    titleText: {
        fontSize: 22,
        fontFamily: fontFamily.mainTextSemiBold,
        color: colors.white
    },
    forgetPasswordStyling: {
        textAlign: "right",
        fontSize: 12,
        fontFamily: fontFamily.appTextMedium,
        color: colors.mainColor
    },
    signInWithStyle: {
        fontSize: 16,
        fontFamily: fontFamily.appTextRegular,
        textAlign: "center",
        color: colors.iconColor
    },
    PrivacyPolicyText: {
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
        width: wp(70)
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp(2),
    },
    labelText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },

});
