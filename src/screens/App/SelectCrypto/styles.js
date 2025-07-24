import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../components/ResponsiveComponent';
import { colors, fontFamily } from '../../../constants';

export const styles = StyleSheet.create({
    container: {
        //    paddingBottom: hp(10), 
        //    paddingTop: hp(1), 
        width: wp(100),
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
        paddingHorizontal:wp(5)
    },
    otherContainer:{
        width:wp(100),
        // paddingHorizontal:wp(5)
    }

});

