import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import images from '../../../../images';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import { colors } from '../../../../constants';
import InputText from '../../../../components/InputText';
import { SimpleButton } from '../../../../components/SimpleButton';
import RowButton from '../../../../components/RowButton';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/Ionicons';


const SignUpForm = ({ Login, isChecked, handleCheckboxToggle,handleEmailVerification }) => {


    return (
        <View style={styles.mainBox}>
            <Image source={images.splashLogoImage} resizeMode="contain" style={styles.logoImage} />
            <Spacer />
            <Text style={styles.titleText}>LOG INTO XEN TRADE</Text>
            <Spacer />
            <View>
                <InputText label={"Email Address"} placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer height={hp(1)} />
                <InputText icon={true} label={"Password"} placeholder={"Enter your  password"} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer height={hp(1)} />
                <InputText icon={true} label={"Confirm password"} placeholder={"Confirm your password"} placeholderTextColor={colors.placeHolderTextColor} />
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
                    <Text style={styles.PrivacyPolicyText}>
                        By creating an account, I agree to Xen Trade's Terms of Service and Privacy Policy.
                    </Text>
                </View>

                <Spacer />
                <SimpleButton onPress={handleEmailVerification} textFontSize={14} text={"Sign Up"} textColor={colors.buttonSigninColor} backgroundColor={colors.authButtonColor} buttonWidth={wp(80)} />
                <Spacer />
                <Text style={styles.signInWithStyle}>Or sign up with</Text>
                <Spacer />
                <RowButton />
                <Spacer />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[styles.signInWithStyle, { fontSize: 14 }]}>Already have an account?</Text>
                    <Text onPress={Login} style={[styles.forgetPasswordStyling, { fontSize: 14 }]}>Sign In</Text>
                </View>
            </View>
        </View>
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
    logoImage: {
        width: wp(30),
        height: hp(4),
    },
    titleText: {
        fontSize: 22,
        fontWeight: "600",
        color: colors.white
    },
    forgetPasswordStyling: {
        textAlign: "right",
        fontSize: 12,
        fontWeight: "500",
        color: colors.mainColor
    },
    signInWithStyle: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.iconColor
    },
    PrivacyPolicyText: {
        fontSize: 12,
        fontWeight: "400",
        color: colors.white,
        width: wp(80)
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: hp(2),
    },

});
