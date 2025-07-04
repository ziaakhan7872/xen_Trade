import { StyleSheet } from "react-native";
import { hp, wp } from "../../../components/ResponsiveComponent";
import { colors } from "../../../constants";

export const style = StyleSheet.create({

    container:{
        flex:1
    },
    imageBackGround:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    logoImage:{
        width:wp(58),
        height:hp(7.75)
    },
    titleText:{
        fontSize:16,
        fontWeight:"400",
        color:colors.white,
        textAlign:"center"
    },
     centeredContent: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  buttonContainer: {
    paddingBottom: 20, 
    paddingHorizontal: 20, 
  },

})