import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { fontFamily } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBgColor,
        paddingTop: hp(2)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(2)
    },
    headerTitle: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fontFamily.appTextBold,
        textAlign: 'center',
        flex: 1
    },
    backButton: {
        padding: wp(2),
        width: wp(10)
    },
    backIcon: {
        width: wp(5),
        height: hp(2),
        tintColor: colors.white
    },
    infoButton: {
        padding: wp(2),
        width: wp(10),
        alignItems: 'center'
    },
    infoIconContainer: {
        width: wp(5),
        height: wp(5),
        borderRadius: wp(2.5),
        borderWidth: 1,
        borderColor: colors.iconColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoIcon: {
        width: wp(5),
        height: wp(5),
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
        marginBottom: hp(4),
        paddingLeft: wp(2)
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
      
        paddingHorizontal: wp(2.5),
        paddingVertical: hp(0.8),
        borderRadius: 6,
        justifyContent: 'space-between',
        marginRight: wp(3),
        minWidth: wp(22)
    },
    filterButtonText: {
        color: colors.iconColor,
        fontSize: 12,
        marginRight: wp(1.5),
        fontFamily: fontFamily.appTextRegular
    },
    filterArrow: {
        color: colors.iconColor,
        fontSize: 8
    },
    filterIcon: {
        width: wp(3),
        height: hp(1.5),
        tintColor: colors.iconColor
    },
    emptyStateContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(5)
    },
    emptyStateIcon: {
        height: hp(6),
        width: wp(6),
        marginBottom: hp(2),
        tintColor: colors.mainColor
    },
    noResultsText: {
        color: colors.white,
        fontSize: 14,
        marginBottom: hp(1),
        textAlign: 'center',
        fontFamily: fontFamily.appTextMedium
    },
    emptyStateMessage: {
        color: colors.iconColor,
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: wp(8),
        fontFamily: fontFamily.appTextRegular,
        lineHeight: 18
    }
})