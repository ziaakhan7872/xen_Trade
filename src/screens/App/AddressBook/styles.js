import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    addAddressBtn: {
        width: wp(88),
        backgroundColor: colors.transparentBtn,
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66
    },
    buttonRow: {
        alignItems: 'center',
    },
})
