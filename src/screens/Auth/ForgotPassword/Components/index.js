import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { SimpleButton } from '../../../../components/SimpleButton'
import { colors, fontFamily } from '../../../../constants'
import TextInputField from '../../../../components/TextInputField'

export const ForgotPasswordContainer = ({ email, setEmail, RecoverPassword ,apiError,loading}) => {
    return (
        <View style={styles.mainBox}>
            <Spacer height={hp(0.5)} />
            <Image source={images.splashLogoImage} style={styles.logoImage} />
            <Spacer />
            <ResponsiveText style={styles.titleText}>FORGET PASSWORD</ResponsiveText>
            <Spacer height={hp(2.5)} />

            <ResponsiveText style={styles.inputLabel}>Email</ResponsiveText>
            <TextInputField value={email} onChangeText={setEmail} placeholder={'Enter your email'} placeholderTextColor={colors.placeHolderTextColor} fontFamily={fontFamily.appTextMedium} />

            <Spacer height={hp(0.6)} />
            {apiError
                && (
                    <>
                        <ResponsiveText style={{ color: colors.red, textAlign: 'center' }}>{apiError}</ResponsiveText>
                        <Spacer />
                    </>
                )}
            <Spacer />
            <SimpleButton 
            onPress={RecoverPassword} 
            text={"Continue"} 
            textColor={colors.black} 
            backgroundColor={colors.mainColor} 
            buttonWidth={wp(84.2)} 
            height={hp(6.5)} 
            loading={loading}
            />
            <Spacer height={hp(0.8)} />

        </View>
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
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.8),
        marginLeft: wp(0.6),
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },
})