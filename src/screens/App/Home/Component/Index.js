import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors, fontFamily, fontSize } from '../../../../constants';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import Line from '../../../../components/Liner';
import { SimpleButton } from '../../../../components/SimpleButton';
import { AccountActivity, DummyLatestNews, watchListDumyData } from '../../../../utilities/dummyData';
import AntDesign from "react-native-vector-icons/AntDesign"
// import {
//     LineChart,
//     LineChartPath,
//     LineChartProvider,
//     LineChartHorizontalLine
// } from 'react-native-wagmi-charts';

import { LineChart } from 'react-native-gifted-charts';
import { PieChart } from 'react-native-gifted-charts';



// import { LineChart } from 'react-native-chart-kit';

// const data = [
//     { timestamp: Date.now() - 1000 * 60 * 60 * 5, value: 1 },
//     { timestamp: Date.now() - 1000 * 60 * 60 * 4, value: 2 },
//     { timestamp: Date.now() - 1000 * 60 * 60 * 3, value: 3 },
//     { timestamp: Date.now() - 1000 * 60 * 60 * 2, value: 2.5 },
//     { timestamp: Date.now() - 1000 * 60 * 60 * 1, value: 3.5 },
// ];

const data = [
    { value: 20 },
    { value: 45 },
    { value: 28 },
    { value: 80 },
    { value: 99 },
    { value: 43 },
];


const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};

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

export const PortfilioOverViewHeader = ({ buttonPress, setButtonPress }) => {
    return (
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
    )
}

export const PortfilioOverView = ({ buttonPress, setButtonPress }) => {

    const chartConfig = {
        backgroundGradientFrom: "rgba(2, 28, 36, 1)",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "rgba(2, 28, 36, 0)",
        color: (opacity = 1) => `rgba(5, 186, 218, ${opacity})`,
    };
    return (


        <View style={{ width: wp(90), alignSelf: 'center', alignItems: 'center', paddingHorizontal: wp(4) }}>
            <LineChart
                data={[
                    { value: 160 },
                    { value: 180 },
                    { value: 170 },
                    { value: 190 },
                    { value: 100 },
                    { value: 100 },
                    { value: 100 },
                    { value: 100 },
                    { value: 170 },
                ]}
                width={wp(75)}
                height={hp(20)}
                areaChart
                color={colors.mainColor}
                startFillColor="rgba(5,186,218,1)"
                endFillColor="rgba(5,186,218,0)"
                startOpacity={0.2}
                endOpacity={0}
                yAxisLabelWidth={0}
                yAxisColor="transparent"
                xAxisLabelTextStyle={{ display: 'none' }}
                xAxisColor="transparent"
                rulesColor="rgba(9,36,43,1)"
                rulesType="solid"
                showVerticalLines={false}
                hideDataPoints={true}
                showStripOnFocus={false}
            // pointerConfig={{
            //     persistPointer: false, // ❌ Do not persist pointer
            //     showPointerStrip: true,
            //     pointerStripColor: 'transparent',
            //     //  showPointerStrip: false,
            //     hideSecondaryPointer: true,
            //      pointerEvents: 'none',
            //     activatePointersInstantlyOnTouch: true, // ✅ Show on tap
            //     pointerColor: 'white',
            //     pointerComponent: () => null,
            //     pointerLabelComponent: () => null,
            //     horizontalStripConfig: {
            //         thickness: 1,
            //         color: '#05BADB',
            //         strokeDashArray: [4, 4,4],
            //         length: wp(75),
            //     },

            // }}

            />

        </View>





    )
}

export const BalanceOverView = ({ walletPress }) => {
    const pieData = [
        { value: 50, color: '#79C5D3', text: 'Red' },
        { value: 30, color: '#55B8CA', text: 'Blue' },
        { value: 20, color: '#3DA1B3', text: 'Green' },
    ];
    return (
        <View style={style.mainBox}>
            <View style={style.BalanceView}>

                <View style={{ alignItems: 'center', marginTop: 20, backgroundColor: "transparent" }}>
                    <PieChart
                        data={pieData}
                        textColor=""
                        textSize={12}
                        radius={90}
                        showText={false}
                        innerRadius={67}
                        centerLabelComponent={() => (
                            null
                        )}
                        innerCircleColor={colors.searchBar}
                    />
                </View>
                <View >
                    <ResponsiveText style={[style.text1, { fontSize: 14 }]}>Account Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={style.text2}>$2,976.00</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[style.text1, { fontSize: 14 }]}>Wallet Account</ResponsiveText>

                </View>
            </View>
            <Spacer />
            <SimpleButton
                text={"Wallets"}
                buttonWidth={wp(80)}
                height={hp(5)}
                backgroundColor={colors.transparentBtn}
                onPress={walletPress}
            />
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

export const LatestNewsComponent = ({ NewsData = DummyLatestNews }) => {
    return (
        <View style={{ width: wp(100) }}>
            <FlatList
                data={NewsData}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.LatestNewsBox}>
                        <Image resizeMode='contain' style={style.ImageNewsStyling} source={item.newsImage} />
                        <HorizontalSpacer width={wp(3)} />
                        <View>
                            <ResponsiveText style={style.NewsTitl}>{item.title}</ResponsiveText>
                            <Spacer height={hp(0.5)} />
                            <ResponsiveText style={style.newsDescription} numberOfLines={3}>
                                {item.description}
                            </ResponsiveText>
                            {/* <ResponsiveText>Read More</ResponsiveText> */}
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <HorizontalSpacer />}
            />
        </View>

    )
}

export const WaitchListPairRow = ({ WatchListButtonPress, setWatchListButtonPress }) => {
    return (
        <View style={style.watchListView}>
            <TouchableOpacity onPress={() => setWatchListButtonPress("watchList")} style={{ width: wp(18) }}>
                <ResponsiveText style={[style.watchListText, { color: WatchListButtonPress === "watchList" ? colors.mainColor : colors.iconColor, },]} >
                    Watchlist
                </ResponsiveText>
                <Spacer height={hp(1)} />
                {WatchListButtonPress === "watchList" && (
                    <View style={style.watchListLine} />
                )}
            </TouchableOpacity>
            <HorizontalSpacer width={wp(2)} />
            <TouchableOpacity onPress={() => setWatchListButtonPress("pairs")} style={{ width: wp(18) }}>
                <ResponsiveText style={[style.watchListText, { color: WatchListButtonPress === "pairs" ? colors.mainColor : colors.iconColor, },]} >
                    All Pairs
                </ResponsiveText>
                <Spacer height={hp(1)} />
                {WatchListButtonPress === "pairs" && (
                    <View style={style.watchListLine} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export const WatchList = ({ watchListData = watchListDumyData }) => {
    return (
        <FlatList
            data={watchListData}
            keyExtractor={(item, index) => item.id.toString() || index.toString()}
            // horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={style.watchListInnerView}>
                    <View style={{ flexDirection: "row", width: wp(40) }}>
                        <Image source={item.image} style={style.watchListImageStyling} resizeMode='contain' />
                        <HorizontalSpacer />
                        <View >
                            <ResponsiveText style={[style.text2, { fontSize: 14 }]}>{item.nameLogo}</ResponsiveText>
                            <ResponsiveText style={[style.text4]}>{item.fullName}</ResponsiveText>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-start', width: wp(20) }}>
                        <ResponsiveText style={[style.marketText]}>{item.market}</ResponsiveText>

                    </View>
                    <View style={{ alignItems: 'flex-end', width: wp(20) }}>
                        <ResponsiveText style={[style.text2, { fontSize: 14, color: item.percentage.startsWith('+') ? 'green' : 'red' }]}>{item.percentage}</ResponsiveText>
                    </View>

                </View>
            )}

        />
    )
}

export const AllPairs = ({ marketData, MarketScreen, handleMarketData }) => {
    return (
        <View style={{height:hp(20)}}>
            <FlatList
                data={marketData}
                onEndReached={handleMarketData}
                scrollEnabled={true}
                overScrollMode="always"
                nestedScrollEnabled={true}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity onPress={() => MarketScreen(item)} style={style.MarketDataView}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: wp(37) }}>
                                <TouchableOpacity>
                                    <Image source={images.starUnFill} style={style.StarImage} />
                                </TouchableOpacity>
                                <HorizontalSpacer />
                                <View>
                                    <ResponsiveText style={style.textHeader}>{item.symbol}</ResponsiveText>
                                    <ResponsiveText style={style.volText}>Vol {item.Vol || "42.35M"}</ResponsiveText>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-start", justifyContent: "flex-start", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader]}>{item.previousPrice || "1.25"}</ResponsiveText>
                                <ResponsiveText style={style.volText}>${item.InUSdt || "2,254.00"}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader, { color: colors.green }]}>{item.Market || "0.01%"}</ResponsiveText>
                                {/* {color:item.Market.startsWith("+")?colors.green:colors.red} */}
                            </View>
                            <Spacer />

                        </TouchableOpacity>
                        <Line height={hp(0.1)} />
                    </>
                )}
            />
        </View>

    )
}
const style = StyleSheet.create({
    mainBox: {
        width: wp(90),
        // paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.searchBar,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
        alignItems: "center"
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
        paddingHorizontal: wp(0),
    },

    mainBoxInnerView: {
        width: wp(82),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text1: {
        fontSize: 12,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    text4: {
        fontSize: 12,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    text2: {
        fontSize: 24,
        fontFamily: fontFamily.mainTextSemiBold,
        color: colors.white,
    },
    text3: {
        fontSize: 16,
        fontFamily: fontFamily.mainTextMedium,
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
        fontFamily: fontFamily.appTextRegular,
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
        width: wp(90),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    accountOverViewemptyDataImage: {
        width: wp(6.41),
        height: wp(6.41),
    },
    flatListDataView: {
        width: wp(90),
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

    },
    LatestNewsBox: {
        width: wp(72),
        paddingHorizontal: wp(4),
        paddingVertical: wp(4),
        backgroundColor: colors.searchBar,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.AccountInfoBorderColor,
        flexDirection: "row"
    },
    ImageNewsStyling: {
        width: wp(20.25),
        height: wp(20.25),
        borderRadius: wp(1.2)
    },
    NewsTitl: {
        fontSize: 16,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white
    },
    newsDescription: {
        fontSize: 14,
        color: colors.iconColor,
        lineHeight: 18,
        flexWrap: 'wrap',
        width: wp(40),
        fontFamily: fontFamily.appTextRegular,
        textAlign: "justify"
    },

    readMore: {
        color: colors.buttonSigninColor,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
    },
    watchListView: {
        width: wp(90),
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingHorizontal: wp(3),
        borderBottomColor: colors.borderColor

    },
    watchListLine: {
        width: wp(17),
        // paddingVertical:hp(1),
        backgroundColor: colors.mainColor,
        height: wp(1),
        borderTopLeftRadius: wp(0.5),
        borderTopRightRadius: wp(0.5)
    },
    watchListText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        textAlign: "center"
        // color:colors.mainColor
    },
    watchListInnerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp(90),
        paddingVertical: wp(3),
        paddingHorizontal: wp(3),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        alignItems: "center"
    },
    watchListImageStyling: {
        width: wp(7.75),
        height: wp(7.75),
        borderRadius: wp(3.875)
    },
    marketText: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
        textAlign: "left",

    },
    MarketDataView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderBottomWidth: 1,
        // borderBottomColor: colors.borderColor,
        paddingHorizontal: wp(3.5),
        paddingVertical: hp(1.5), // 👈 Adds top & bottom spacing
    },
    StarImage: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: "contain"
    },
    textHeader: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.white
    },
    volText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.iconColor
    }

});
