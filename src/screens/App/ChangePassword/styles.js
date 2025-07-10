import { Platform, StyleSheet, } from 'react-native'
import { wp, hp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        color: colors.white,
    },
    btnSaveChangesView: {
        paddingHorizontal: wp(4),
        paddingBottom: Platform.OS === 'android' ? hp(2) : hp(1), // More space on Android
    },
    btnSaveChanges: {
        width: wp(88),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
        backgroundColor: colors.transparentBtn,
    }
})