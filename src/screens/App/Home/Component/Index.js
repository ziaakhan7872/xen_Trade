import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors, fontSize } from '../../../../constants';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import Line from '../../../../components/Liner';
import { SimpleButton } from '../../../../components/SimpleButton';
import { AccountActivity } from '../../../../utilities/dummyData';
import AntDesign from "react-native-vector-icons/AntDesign"

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

export const PortfilioOverView = ({ buttonPress, setButtonPress }) => {
    return (
        <View style={[style.mainBox]}>
            <View style={style.dateBaseGraph}>
                <TouchableOpacity onPress={() => setButtonPress('weekly')} style={[style.dateBaseButtonStyling, buttonPress === 'weekly' ? { backgroundColor: colors.bottomSheetImageViewColor } : { backgroundColor: colors.transparent },]}>
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'weekly' ? colors.mainColor : colors.white },]} >Weekly</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setButtonPress('month')} style={[style.dateBaseButtonStyling, buttonPress === 'month' ? { backgroundColor: colors.bottomSheetImageViewColor } : { backgroundColor: colors.transparent },]}>
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'month' ? colors.mainColor : colors.white },]} >Month</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setButtonPress('year')} style={[style.dateBaseButtonStyling, buttonPress === 'year' ? { backgroundColor: colors.bottomSheetImageViewColor } : { backgroundColor: colors.transparent },]}>
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'year' ? colors.mainColor : colors.white },]} >Year</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setButtonPress('all')} style={[style.dateBaseButtonStyling, buttonPress === 'all' ? { backgroundColor: colors.bottomSheetImageViewColor } : { backgroundColor: colors.transparent },]}>
                    <ResponsiveText style={[style.threeButtonText, { color: buttonPress === 'all' ? colors.mainColor : colors.white },]} >All</ResponsiveText>
                </TouchableOpacity>
            </View>
            {/* <Line/> */}
            <Image
                style={{ width: wp(80), height: hp(33), resizeMode: "cover" }}
                source={images.dashboardGraph}
            />
        </View>
    )
}

export const BalanceOverView = () => {
    return (
        <View style={style.mainBox}>
            <View style={style.BalanceView}>
                <Image
                    style={{ width: wp(36), height: wp(36), borderRadius: wp(18), resizeMode: "contain" }}
                    source={images.doughnutChart}
                />
                <HorizontalSpacer width={wp(7)} />
                <View >
                    <ResponsiveText style={[style.text1, { fontSize: 14 }]}>Account Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text2}>$2,976.00</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[style.text1, { fontSize: 14 }]}>Wallet Account</ResponsiveText>

                </View>
            </View>
            <Spacer />
            <SimpleButton text={"Wallets"} buttonWidth={wp(80)} height={hp(5)} backgroundColor={colors.transparentBtn} />
        </View>
    )
}

export const AccountOverView = ({ data = AccountActivity }) => {
    return (
        <View style={style.accountViewMainBox}>
            {data && data.length > 0 ? (
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => item.id.toString() || index.toString()}
                        renderItem={({ item }) => (
                            <View style={style.flatListDataView}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={[style.circle, { backgroundColor: item.type == "Buy" ? colors.greenColor : colors.redColor }]}>
                                        <Image
                                            style={{ width: wp(6), height: wp(6), resizeMode: "contain" }}
                                            source={item.type == "Buy" ? images.arrowUp : images.arrowDown}
                                        />
                                    </View>
                                    <HorizontalSpacer />
                                    <View>
                                        <ResponsiveText style={[style.text2, { fontSize: 13 }]}>{item.type} Order</ResponsiveText>
                                        <ResponsiveText style={[style.text4]}>{item.date} {item.time}</ResponsiveText>
                                    </View>
                                </View>
                                <View style={{ alignItems: "flex-end" }}>
                                    <ResponsiveText style={[style.text1]}>{item.marketOrder} market order</ResponsiveText>
                                    <ResponsiveText style={[style.text1]}>completed for {item.amount}</ResponsiveText>
                                </View>
                            </View>
                        )}
                    />

                </View>
            ) : (
                <>
                    <Image
                        style={style.accountOverViewemptyDataImage}
                        source={images.securitySettingIcon}
                        resizeMode='contain'
                    />
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[style.text2, { fontSize: 16 }]}>NO DATA AVAILABLE YET</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text1}>You haven’t made any deposits yet.</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <SimpleButton borderRadius={wp(23.5)} text={"Deposit Now"} buttonWidth={wp(45)} height={hp(5)} backgroundColor={colors.transparentBtn} />
                </>
            )}


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
    accountViewMainBox: {
        width: wp(90),
        backgroundColor: colors.searchBar,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
        height: hp(33),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: wp(0), // ✅ Add horizontal padding
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
    text4: {
        fontSize: 12,
        fontWeight: "400",
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    dateBaseButtonStyling: {
        width: wp(20),
        height: hp(3.5),
        // borderWidth: 1,
        // borderColor: colors.AccountInfoBorderColor,
        borderRadius: wp(10),
        alignItems: "center",
        justifyContent: "center"
    },
    BalanceView: {
        width: wp(80),
        flexDirection: "row",
        alignItems: "center"
    },
    accountOverViewemptyDataImage: {
        width: wp(6.41),
        height: wp(6.41),
    },
    flatListDataView: {
        width: wp(90), // ✅ Take full width minus parent padding
        borderBottomWidth: 1,
        borderBottomColor: colors.cardBorderColor,
        paddingHorizontal: wp(2),
        paddingVertical: wp(3),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    circle: {
        width: wp(9.5),
        height: wp(9.5),
        borderRadius: wp(5),
        justifyContent: "center",
        alignItems: "center"

    }

});
