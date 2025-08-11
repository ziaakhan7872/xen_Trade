import { Image, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Spacer from '../../../../components/Spacer'
import { SimpleButton } from '../../../../components/SimpleButton'
import images from '../../../../images'
import { wp, hp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import TextInputField from '../../../../components/TextInputField'
import DropDown from '../../../../components/dropDown'

export const ImageUploadContainer = () => {
    return (
        <View style={styles.profileCard}>
            <View style={appStyles.rowBasic}>
                <Image source={images.placeholderProfileImg} style={styles.profilePlaceholderImg} />

                <View style={styles.profileTextContainer}>
                    <ResponsiveText style={styles.headingProfile}>PROFILE IMAGE</ResponsiveText>
                    <ResponsiveText style={styles.imageProfileDescription} >
                        We recommend to upload images in 500x500 resolution. Max 5 MB in JPEG or PNG format
                    </ResponsiveText>
                    <Spacer />
                    <SimpleButton text="Upload Image" styleView={styles.btnUploadImg} onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

export const Inputs = ({ email, setEmail, phonenum, setPhonenum, currency, setCurrency, isCurrencyOpen, setIsCurrencyOpen, currencyItems, }) => {
    return (
        <>
            <ResponsiveText style={styles.inputLabel}>Email</ResponsiveText>
            <TextInputField value={email} onChangeText={(text) => setEmail(text)} placeholder={"Enter your email address"} placeholderTextColor={colors.placeHolderTextColor} />

            <Spacer height={hp(2)} />

            <ResponsiveText style={styles.inputLabel}>Phone number</ResponsiveText>
            <TextInputField value={phonenum} onChangeText={(text) => setPhonenum(text)} placeholder={"Enter your phone number"} placeholderTextColor={colors.placeHolderTextColor} />

            <Spacer height={hp(2)} />

            <ResponsiveText style={styles.inputLabel}>Primary Market Currency</ResponsiveText>
            {/* <View style={styles.input}> */}
            <DropDown
                items={currencyItems}
                value={currency}
                setIsOpen={setIsCurrencyOpen}
                setValue={setCurrency}
                placeholder="Select currency"
            />
        </ >
    )

}


const styles = StyleSheet.create({
    profileCard: {
        paddingTop: wp(4),
        paddingLeft: wp(2),
    },
    profilePlaceholderImg: {
        width: wp(32),
        height: wp(32),
    },
    profileTextContainer: {
        flex: 1,
        marginLeft: wp(4),
    },
    headingProfile: {
        fontSize: 16,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
        paddingLeft: wp(2),
    },
    imageProfileDescription: {
        fontSize: 12,
        lineHeight: hp(1.7),
        color: colors.lightTextColor,
        marginTop: hp(1),
        fontFamily: fontFamily.appTextRegular,
        paddingLeft: wp(1.8),
    },
    btnUploadImg: {
        width: wp(50),
        padding: wp(2),
        borderRadius: 50,
        backgroundColor: colors.transparentBtn,
    },
    inputLabel: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fontFamily.appTextRegular,
        marginBottom: hp(0.8),
    },
    input: {
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(3),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(5),
        padding: wp(3),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        height: hp(6),
        color: colors.white,
        fontSize: 14,
    },
})