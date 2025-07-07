import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors } from '../../../../constants';
import Spacer from '../../../../components/Spacer';
import { ResponsiveText } from '../../../../components/ResponsiveText';

export const AccountInfo = () => {
    return (
        <View style={style.mainBox}>
            <View style={style.mainBoxInnerView}>
                <View style={{ flex: 1 }}>
                    <ResponsiveText style={style.text1}>Account Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text2}>$2,976.00</ResponsiveText>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <ResponsiveText style={style.text1}>24h Change</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text3}>+ 23.00%</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text1}>(+0.887)</ResponsiveText>
                </View>
            </View>
        </View>
    );
};

export const RowButtonTab = ({ buttonPress, setButtonPress }) => {
    return (
        <View style={style.threeRowButton}>
            <View style={{ width: wp(90), flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => setButtonPress('portfolio')} style={[style.buttonStyling, buttonPress === 'portfolio' ? { backgroundColor: colors.mainColor } : { backgroundColor: colors.transparent },]} >
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'portfolio' ? colors.black : colors.white },]} > Portfolio Overview </ResponsiveText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setButtonPress('balance')} style={[style.buttonStyling, buttonPress === 'balance' ? { backgroundColor: colors.mainColor } : { backgroundColor: colors.transparent },]} >
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'balance' ? colors.black : colors.white },]} > Balances</ResponsiveText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setButtonPress('account')} style={[style.buttonStyling, buttonPress === 'account' ? { backgroundColor: colors.mainColor } : { backgroundColor: colors.transparent },]}>
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'account' ? colors.black : colors.white },]} > Account Activity </ResponsiveText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const PortfilioOverView = () => {
    return (
        <View style={style.mainBox}>
            <View style={style.dateBaseGraph}>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    mainBox: {
        width: wp(90),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.searchBar,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
    },
    mainBoxInnerView: {
        width: wp(82),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text1: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor,
    },
    text2: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.white,
    },
    text3: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.mainColor,
    },
    threeRowButton: {
        width: wp(90),
        height: hp(5.5),
        backgroundColor: colors.searchBar,
        borderRadius: wp(10),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,

    },
    buttonStyling: {
        width: wp(30),
        height: hp(5),
        borderRadius: wp(10),
        alignItems: "center",
        justifyContent: "center"
    },
    threeButtonText: {
        fontSize: 12,
        fontWeight: "400",
        color: colors.white
    },
    dateBaseGraph: {
        width: wp(80),
        height: hp(4.5),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
        borderRadius: wp(10),

    }
});
