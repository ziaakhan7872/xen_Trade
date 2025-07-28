import { StyleSheet } from "react-native";
import { wp } from "../../../components/ResponsiveComponent";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    leftImage: {
        width: wp(6),
        height: wp(6)
    },
    outerMainBox:{
        width:wp(90)
    }

})