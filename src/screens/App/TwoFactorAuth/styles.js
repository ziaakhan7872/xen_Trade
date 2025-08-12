import { Platform, StyleSheet } from 'react-native';
import { wp, hp } from '../../../components/ResponsiveComponent';
import { colors } from '../../../constants';

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    buttonRow: {
        paddingHorizontal: wp(4),
        paddingVertical: Platform.OS === 'android' ? hp(3) : hp(2),
    },
    cancelBtn: {
        width: wp(44),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        borderRadius: wp(10),
    },
    saveBtn: {
        width: wp(44),
        // backgroundColor: colors.authButtonColor,
        paddingVertical: hp(2),
        borderRadius: wp(10),
        marginLeft: wp(3), // space between buttons
    },
});
