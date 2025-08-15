import { Platform, StyleSheet } from 'react-native'
import { colors } from '../../../constants'
import { hp, wp } from '../../../components/ResponsiveComponent'


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),

    },
    btnSaveChanges: {
        width: wp(92),
        padding: wp(5),
        marginTop: hp(2),
        borderRadius: wp(10),
        backgroundColor: colors.withdrawBtn,
        marginBottom: Platform.OS === 'android' ? hp(4) : hp(2)
    },
})