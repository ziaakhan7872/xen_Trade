import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
        backgroundColor: colors.darkBlue,
    },

    addAddressBtn: {
        width: wp(88),
        backgroundColor: colors.transparentBtn,
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
