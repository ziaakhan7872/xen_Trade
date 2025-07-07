import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../components/ResponsiveComponent';
import { colors, fontFamily } from '../../../constants';

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    heading: {
        fontSize: 18,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
        marginBottom: hp(0.5),
    },
    description: {
        fontSize: 12,
        color: colors.lightTextColor,
        fontFamily: fontFamily.appTextRegular,
    },
    qrWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrImage: {
        width: wp(50),
        height: wp(50),
        resizeMode: 'contain',
    },
    secretBtn: {
        width: wp(46),
        alignSelf: 'center',
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        borderRadius: wp(10),
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        color: colors.white,
    },
    inputField: {
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(3),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(5),
        padding: wp(3),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        height: hp(6),
        fontSize: 14,
    },
    buttonRow: {
        paddingHorizontal: wp(3),
    },
    cancelBtn: {
        width: wp(42),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(1.8),
        borderRadius: wp(10),
    },

    saveBtn: {
        width: wp(44),
        backgroundColor: colors.authButtonColor,
        paddingVertical: hp(1.8),
        borderRadius: wp(10),
        marginLeft: wp(3), // space between buttons
    },
});
