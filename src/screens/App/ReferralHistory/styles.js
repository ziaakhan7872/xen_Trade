import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    historyImg: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain',
        marginTop: hp(1.5),
    }
})