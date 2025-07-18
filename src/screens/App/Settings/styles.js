import { Platform, StyleSheet } from "react-native"
import { hp, wp } from "../../../components/ResponsiveComponent"
import { colors, fontFamily } from "../../../constants"

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    backArrowContainer: {
        left: wp(6),
        zIndex: 2,
    },
    backArrowImg: {
        width: wp(7),
        height: wp(7),
        resizeMode: 'contain',
    },
    headingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: hp(6.5),
    },
    spacerHeight: hp(2),

    contentSettingContainer: {
        paddingHorizontal: wp(4),
    },

    profileCard: {
        backgroundColor: colors.cardsBgColor,
        padding: wp(4),
        borderRadius: wp(3),
        marginBottom: hp(2),
        borderColor: colors.borderColor,
        borderWidth: 1,
    },
    profileImage: {
        width: wp(14),
        height: wp(14),
        borderRadius: wp(7),
        marginRight: wp(4),
    },
    profileName: {
        fontSize: 20,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
    },
    profileEmail: {
        fontSize: 14,
        color: '#ccc',
        fontFamily: fontFamily.appTextRegular,
        marginTop: hp(0.5),
    },
    btnView: {
        paddingHorizontal: wp(4),
        paddingBottom: Platform.OS === 'android' ? hp(4) : hp(2), // More space on Android
    },
    btnContainer: {
        width: wp(88),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
        backgroundColor: colors.redColorBtn,
    }
})