import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";
import { colors, fontFamily } from "../../../constants";

export const style = StyleSheet.create({
    container: {
        //    paddingBottom: hp(10), 
        //    paddingTop: hp(1), 
        width: wp(90),
        alignSelf: 'center'
    },
    imageStyling: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain"
    },
    text1: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.halfWhite

    },
    LatestNewsStyling: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    latesteNewsTitle: {
        fontSize: 16,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white
    },
    watchListView: {
        width: wp(90),
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingHorizontal: wp(3),
        borderBottomColor: colors.borderColor

    },
    watchListLine: {
        width: wp(17),
        // paddingVertical:hp(1),
        backgroundColor: colors.mainColor,
        height: wp(1),
        borderTopLeftRadius: wp(0.5),
        borderTopRightRadius: wp(0.5)
    },
    watchListText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        textAlign: "center"
        // color:colors.mainColor
    },
    watchListInnerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp(90),
        paddingVertical: wp(3),
        paddingHorizontal: wp(3),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        alignItems: "center"
    },
    watchListImageStyling: {
        width: wp(7.75),
        height: wp(7.75),
        borderRadius: wp(3.875)
    },
     mainBox: {
        width: wp(90),
        // paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.searchBar,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
        alignItems: "center"
    },
})