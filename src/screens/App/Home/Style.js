import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";
import { colors } from "../../../constants";

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
    LatestNewsStyling :{
        width:wp(90),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    latesteNewsTitle:{
        fontSize:16,
        fontWeight:"600",
        color:colors.white
    }
})