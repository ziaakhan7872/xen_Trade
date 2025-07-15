import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";
import { colors } from "../../../constants";

export const  style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    // justifyContent:"center"
    },
    searchButton:{
        width:wp(90),
        backgroundColor:colors.searchBar,
        paddingVertical:hp(2),
        borderRadius:wp(3),
        flexDirection:"row",
        alignItems:"center"
    // justifyContent:"space-between"

    },
    searchText:{
        fontSize:14,
        fontWeight:"400",
        color:colors.iconColor
    }
})