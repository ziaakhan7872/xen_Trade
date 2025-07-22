import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { wp, hp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily, Routes, } from '../../../../constants'
import { appStyles } from '../../../../utilities'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Spacer from '../../../../components/Spacer'

export const FilterTextInput = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props?.navigation?.navigate?.(Routes.filterBottomSheet)} style={styles.leftIconWrapper}>
                <Image source={images.filter} style={styles.iconLeft} />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={colors.placeHolderTextColor} />
            <TouchableOpacity style={styles.rightIconWrapper}>
                <Image source={images.searchSign} style={styles.iconRight} />
            </TouchableOpacity>
        </View>
    )
}

export const History = () => {
    return (
        <>
            <View style={styles.historyContainer}>
                <ResponsiveText style={styles.historyHeadings}>Date</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Transaction ID</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Reward</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Reward Type</ResponsiveText>
            </View>
            <Spacer height={hp(16)} />
            <View style={styles.recordContainer}>
                <Image source={images.noRecord} style={styles.recordIcon} />
                <ResponsiveText style={styles.noRecordText}>No Record Found</ResponsiveText>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        ...appStyles.rowBasic,
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(2),
        height: hp(7),
        paddingHorizontal: wp(4),
        alignItems: 'center',
        borderColor: colors.borderColor,
        borderWidth: 1.5,
    },
    leftIconWrapper: {
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        borderRightWidth: 2.5,
        borderRightColor: colors.borderColor,
        marginRight: wp(2.5),
    },
    rightIconWrapper: {
        paddingHorizontal: wp(2),
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
    },
    iconLeft: {
        width: wp(7),
        height: wp(7),
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    iconRight: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'contain',
        tintColor: colors.mainColor,
    },
    historyContainer: {
        ...appStyles.row,
    },
    historyHeadings: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 16,
        color: colors.white,
    },
    recordContainer: {
        alignItems: 'center',
    },
    recordIcon: {
        width: wp(12),
        height: wp(12),
        resizeMode: 'contain',
    },
    noRecordText: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.white,
        paddingTop: hp(1),
    },
})
