import { Platform, StyleSheet } from 'react-native'
import { colors } from '../../../constants'
import { wp } from '../../../components/ResponsiveComponent'


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),

    },
    btnSaveChanges: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: wp(10),
        backgroundColor: colors.withdrawBtn,
        marginBottom: Platform.OS === 'android' ? wp(8) : wp(5)
    },
})