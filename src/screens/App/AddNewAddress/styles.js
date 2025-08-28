import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'
import { hp, wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    containerMain: {
        // flex: 1,
        paddingHorizontal: wp(4),
    },
    buttonRow: {
        paddingHorizontal: wp(3.5),
        paddingBottom: hp(3),
    },
    cancelBtn: {
        width: wp(44),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        borderRadius: wp(10),
        marginLeft: wp(2), // space between buttons
    },
    saveBtn: {
        width: wp(44),
        backgroundColor: colors.mainColor,
        paddingVertical: hp(2),
        borderRadius: wp(10),
        marginRight: wp(1)
    },
})