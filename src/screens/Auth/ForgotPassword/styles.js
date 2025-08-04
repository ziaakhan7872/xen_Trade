import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(4),
        paddingTop: hp(1.5)
    },
    leftImage: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain'
    },
})