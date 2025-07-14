import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { hp, wp } from "../../../components/ResponsiveComponent";

export const style = StyleSheet.create({
    container:{
       width:wp(90),
       alignSelf:"center",
       flex:1
    
    },
    imageStyling:{
        width:wp(6.5),
        height:wp(6.5)
    },
    label:{
        fontSize:16,
        fontWeight:"500",
        color:colors.white
    }
})