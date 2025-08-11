import { StyleSheet, Platform } from 'react-native'
import { wp, hp } from '../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../constants'


export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },

    btnSaveChangesView: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(1.8),
        paddingBottom: Platform.OS === 'android' ? hp(3.5) : hp(2.8), // More space on Android
    },
    btnSaveChanges: {
        width: wp(88),
        alignSelf: 'center',
        padding: wp(5),
        borderRadius: 66,
    }

})