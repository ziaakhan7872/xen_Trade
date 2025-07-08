import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'
import { colors } from '../../../../constants'
import InputText from '../../../../components/InputText'
import { SimpleButton } from '../../../../components/SimpleButton'
import RowButton from '../../../../components/RowButton'
import AntDesign from "react-native-vector-icons/AntDesign";
import { ResponsiveText } from '../../../../components/ResponsiveText';

const LoginForm = ({ signUp, Login }) => {
    return (
        <View style={styles.mainBox}>
            <Image source={images.splashLogoImage} resizeMode='contain' style={styles.logoImage} />
            <Spacer />
            <Text style={styles.titleText}>LOG INTO XEN TRADE</Text>
            <Spacer />
            <View>
                <InputText label={"Email Address"} placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer height={hp(1)} />
                <InputText icon={true} label={"Password"} placeholder={"Enter your email password"} placeholderTextColor={colors.placeHolderTextColor} />
                <Spacer height={hp(1)} />
                <Text style={[styles.forgetPasswordStyling, { textDecorationLine: 'underline' }]}> Forgot Password?</Text>
                <Spacer />
                <SimpleButton onPress={Login} textFontSize={14} text={"Sign in"} textColor={colors.buttonSigninColor} backgroundColor={colors.authButtonColor} buttonWidth={wp(80)} />
                <Spacer />
                <Text style={styles.signInWithStyle}>Or sign in with</Text>
                <Spacer />
                <RowButton
                    borderRadius={wp(16.5)}
                    image1={<AntDesign name="apple1" size={16} color="white" />}
                    label1={<ResponsiveText style={styles.labelText}>Apple</ResponsiveText>}
                    image2={<AntDesign name="google" size={16} color="white" />}
                    label2={<ResponsiveText style={styles.labelText}>Google</ResponsiveText>}
                />
                <Spacer />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={[styles.signInWithStyle, { fontSize: 14 }]}>Don't have an account?</Text>
                    <Text onPress={signUp} style={[styles.forgetPasswordStyling, { fontSize: 14 }]}>Sign Up</Text>

                </View>
            </View>

        </View>
    )
}

export default LoginForm

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
      labelText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
    },


})