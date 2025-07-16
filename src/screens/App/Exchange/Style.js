import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";

export const style = StyleSheet.create({
    linearGradient: {
        flex: 1,
        width: wp(100),
        height: hp(100),
    },
    container: {
        flex: 1,
        alignItems: "center"
    },
    formandOrderBookView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center"
    }
})