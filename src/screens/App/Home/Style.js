import { StyleSheet } from "react-native";
import { wp } from "../../../components/ResponsiveComponent";
import { colors } from "../../../constants";

export const style = StyleSheet.create({
    container:{
        width:wp(90),
        alignSelf:"center"
    },
    imageStyling:{
        width:wp(5),
        height:wp(5),
        resizeMode:"contain"
    },
    text1:{
        fontSize:14,
        fontWeight:"500",
        color:colors.halfWhite

    }
})