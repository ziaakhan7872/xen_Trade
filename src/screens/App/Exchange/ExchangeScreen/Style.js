import { StyleSheet } from "react-native";
import { hp, wp } from "../../../../components/ResponsiveComponent";
import { colors, fontFamily } from "../../../../constants";

export const style = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: wp(100),
        height: hp(100),
    },
    container: {
        flex: 1,
        // alignItems: "center",
        // width:wp(90)
    },
    formandOrderBookView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex: 1,
        width: wp(90),
        // borderWidth: 1,
        // borderColor: "white",
        height:hp(55),
        alignSelf:"center"
    },

    formContainer: {
        flex: 1,
        marginRight: 5,
    },
    orderBookContainer: {
        // flex: 1,
        // marginLeft: 5,
    },


    widthView: {
        width: wp(37)
    },
    priceText: {
        fontSize: 20,
        fontFamily: fontFamily.appTextBold,
        color: colors.red,
    },
    priceText2: {
        fontSize: 13,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
})