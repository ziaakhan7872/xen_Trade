import { Platform, StyleSheet } from "react-native"
import { wp, hp } from "../../../components/ResponsiveComponent"
import { colors, fontFamily } from "../../../constants"

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    logoImage: {
        height: wp(50),
        width: wp(50),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    leftLabels: {
        color: colors.lightTextColor,
        fontSize: 16,
    },
    rightLabels: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    dropDown: {
        width: '48%',
    },
    dropDownRight: {
        width: '50%',
        alignItems: 'flex-end',
    },
    separatorLine: {
        height: 1,
        backgroundColor: colors.lineStroke,
        width: '100%',
        marginVertical: hp(1),
    },
    checkMarkImg: {
        height: wp(4),
        width: wp(4),
        resizeMode: 'contain',
        marginTop: 1,
        marginRight: wp(2.5),
    },
})