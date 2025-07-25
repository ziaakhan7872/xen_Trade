import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    buttonRow: {
        paddingHorizontal: wp(3.5),
        paddingBottom: hp(4)
    },
    depositBtn: {
        width: wp(45),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(1.8),
        borderRadius: wp(10),
    },
    withdrawBtn: {
        width: wp(45),
        marginLeft: wp(1), // space between buttons
        backgroundColor: colors.mainColor,
        paddingVertical: hp(1.8),
        borderRadius: wp(10),
    },
})