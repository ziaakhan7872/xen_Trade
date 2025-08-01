import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import TextInputField from '../../../../components/TextInputField'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import Spacer from '../../../../components/Spacer'
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent'
import { appStyles } from '../../../../utilities'
import images from '../../../../images'
import Line from '../../../../components/Liner'
import { SimpleButton } from '../../../../components/SimpleButton'

export const TextInputGroup = ({ message, setMessage }) => {
    return (
        <>
            <ResponsiveText style={styles.inputLabel}>Name</ResponsiveText>
            <TextInputField placeholder={'Enter your name'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Email</ResponsiveText>
            <TextInputField placeholder={'Enter your email'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Message</ResponsiveText>
            <TextInputField value={message || ''} onChangeText={(text) => setMessage(text)} multiline={true} textAlignVertical="top" height={hp(12)} borderColor={message.trim() === '' ? colors.borderColor : colors.mainColor} placeholder={'Enter your message'} placeholderTextColor={colors.placeHolderTextColor} />
        </>
    )
}

export const SubmitBottomSheet = ({ SubmitBottomSheetRef, closeBottomSheet }) => {
    return (
        <GorhomBottomSheet sheetRef={SubmitBottomSheetRef}>
            <View style={[appStyles.row, styles.sheetHeaderContainer]} >
                <ResponsiveText style={styles.bottomSheetHeader} >CONTACT SUPPORT</ResponsiveText>
                <TouchableOpacity onPress={closeBottomSheet}>
                    <Image source={images.closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>

            <Line height={hp(0.2)} backgroundColor={colors.lineColor} />

            <Spacer />
            <Image source={images.emailSent} style={styles.emailSentIcon} />
            <Spacer />

            <ResponsiveText style={styles.sheetContentText} >THANK YOU FOR REACHING OUT!</ResponsiveText>
            <Spacer height={hp(0.8)} />
            <ResponsiveText style={styles.sheetContentText2} >Someone from our team will get in touch with you shortly</ResponsiveText>
            <Spacer height={hp(3)} />

            <SimpleButton text="Ok" onPress={closeBottomSheet} textColor={colors.black} styleView={styles.btnOk} />

        </GorhomBottomSheet>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },
    sheetHeaderContainer: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(2.6),
    },
    bottomSheetHeader: {
        flex: 1,
        fontSize: 18,
        fontFamily: fontFamily.mainTextBold,
        color: colors.white,
    },
    sheetContentText: {
        fontSize: 18,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
    },
    sheetContentText2: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: colors.lightTextColor,
    },
    closeIcon: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    sheetContentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    emailSentIcon: {
        width: wp(22),
        height: wp(22),
        resizeMode: 'contain',
    },
    btnOk: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: wp(10),
        backgroundColor: colors.withdrawBtn,
        marginBottom: Platform.OS === 'android' ? wp(4) : wp(2)
    },
})