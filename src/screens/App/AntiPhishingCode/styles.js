import { Platform, StyleSheet, } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../constants'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        color: colors.white,
    },
    btnSaveChangesView: {
        paddingHorizontal: wp(4),
        paddingBottom: Platform.OS === 'android' ? hp(2) : hp(1), // More space on Android
    },
    btnSaveChanges: {
        width: wp(88),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
        backgroundColor: colors.withdrawBtn,
    },
    description: {
        fontSize: 14,
        color: colors.lightTextColor,
        textAlign: 'center',
    },
    warningContainer: {
        backgroundColor: colors.warningBgColor,
        padding: wp(3),
        borderRadius: 12,
        marginBottom: hp(2),
    },
    warningText: {
        fontSize: 14,
        color: colors.warningTextColor,
        fontFamily: fontFamily.Regular,
    },
})