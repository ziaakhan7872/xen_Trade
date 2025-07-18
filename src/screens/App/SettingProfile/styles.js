import { StyleSheet, Platform } from 'react-native'
import { wp, hp } from '../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../constants'


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    profileCard: {
        paddingTop: wp(4),
        paddingLeft: wp(2.5),
    },
    profilePlaceholderImg: {
        width: wp(32),
        height: wp(32),
    },
    profileTextContainer: {
        flex: 1,
        marginLeft: wp(3),
    },
    headingProfile: {
        fontSize: 16,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
        paddingLeft: wp(2),
    },
    imageProfileDescription: {
        fontSize: Platform.OS === 'ios' ? 10.5 : 12,
        letterSpacing: 0.2,
        color: colors.lightTextColor,
        marginTop: hp(1),
        fontFamily: fontFamily.appTextRegular,
        paddingLeft: wp(2),
        textAlign: 'left',
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
    btnUploadImg: {
        width: wp(50),
        padding: wp(2),
        borderRadius: 50,
        backgroundColor: colors.transparentBtn,
    },
    btnSaveChangesView: {
        paddingHorizontal: wp(4),
        paddingBottom: Platform.OS === 'android' ? hp(4) : hp(3), // More space on Android
    },
    btnSaveChanges: {
        width: wp(88),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
        backgroundColor: colors.transparentBtn,
        // color: colors.disableTextColor,
    }

})