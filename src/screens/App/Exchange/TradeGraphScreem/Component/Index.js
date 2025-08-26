import { Dimensions, FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../../../components/ResponsiveText'
import Entypo from "react-native-vector-icons/FontAwesome6"
import { colors, fontFamily } from '../../../../../constants'
import Spacer, { HorizontalSpacer } from '../../../../../components/Spacer'
import Octicons from "react-native-vector-icons/Octicons"
import images from '../../../../../images'
import Line from '../../../../../components/Liner'
import {
    CandlestickChart,
    CandlestickChartCandle,
    CandlestickChartCrosshair,
    CandlestickChartTooltip,
} from 'react-native-wagmi-charts';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { appStyles } from '../../../../../utilities'
import { BarChart } from "react-native-gifted-charts";
import { GorhomBottomSheet } from '../../../../../components/GorhumBottomSheetComponent'
import { RenderFavouriteCoinList } from '../../Component/Index'
import BottomSheet from '../../../../../components/BottomSheet'
import moment from 'moment'



const { width } = Dimensions.get('window');


export const TradeHeader = ({ onpress, onPressTradeGraph, X = 10, starPress, setStarPress, onBackPress, marketData }) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={onBackPress} >
                    <Entypo name="chevron-left" size={15} color={colors.white} />
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.headerText}>{marketData?.symbol?.toUpperCase()}</ResponsiveText>
                <HorizontalSpacer />
                <View style={styles.XView}>
                    <ResponsiveText style={styles.text1}>{X}x</ResponsiveText>
                </View>
                <HorizontalSpacer />
                <TouchableOpacity onPress={onpress}>
                    <Entypo name="chevron-down" size={15} color={colors.grayColor2} />
                </TouchableOpacity>
                <HorizontalSpacer />
                {/* <ResponsiveText style={styles.currentPriceStyle}>+3.33%</ResponsiveText> */}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setStarPress(!starPress)} >
                    {starPress ? (
                        <Octicons name="star-fill" size={25} color={colors.mainColor} />
                    ) : (
                        <Octicons name="star" size={25} color={colors.white} />
                    )
                    }
                </TouchableOpacity>
                <HorizontalSpacer width={wp(3)} />
                <TouchableOpacity>
                    <Image style={styles.image1} source={images.share} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export const CoinPriceDetail = ({ coinPrice, bullishState, coinUp = "+0.28%", No = "1", position = "Top", HLow = "89,355.57", HHigh = "92,630.87", coinName = "BTC", Volum = "27,709.81", HChange = "+0.02%" }) => {
    console.log(bullishState, "bullishState in coin price detail")
    return (
        <View style={styles.coinPriceDetailView}>
            <View style={styles.coinPriceDetailFirstView}>
                <ResponsiveText style={[styles.text2, { color: bullishState ? colors.green : colors.red }]}>{coinPrice}</ResponsiveText>
                <Spacer height={hp(0.5)} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={[styles.text3, { color: bullishState ? colors.green : colors.red }]}>${coinPrice}</ResponsiveText>
                    <HorizontalSpacer />
                    <ResponsiveText style={styles.text4}>{coinUp}</ResponsiveText>
                </View>
                <Spacer height={hp(0.5)} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                    <ResponsiveText style={[styles.text5]}>🔥 No. {No}</ResponsiveText>
                    <HorizontalSpacer />
                    <Line height={hp(1.5)} width={wp(0.9)} backgroundColor={colors.yellow1} />
                    <HorizontalSpacer />
                    <ResponsiveText style={[styles.text5]}>{position}</ResponsiveText>
                    <HorizontalSpacer />
                    <Line height={hp(1.5)} width={wp(0.9)} backgroundColor={colors.yellow1} />
                    <HorizontalSpacer />
                    <ResponsiveText style={[styles.text5]}>Payment</ResponsiveText>
                </View>
            </View>
            <View style={[styles.coinPriceDetailFirstView, { alignItems: "flex-end" }]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={styles.text6}>24H Low</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={styles.text7}>{HLow}</ResponsiveText>
                </View>
                <Spacer height={hp(0.5)} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={styles.text6}>24H High</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={styles.text7}>{HHigh}</ResponsiveText>
                </View>
                <Spacer height={hp(0.5)} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={styles.text6}>24H Volum ({coinName})</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={styles.text7}>{Volum}</ResponsiveText>
                </View>
                <Spacer height={hp(0.5)} />

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={styles.text6}>24H Change</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={[styles.text4, { fontsize: 14 }]}>{HChange}</ResponsiveText>
                </View>
            </View>
        </View>
    )
}

export const TradeGraphHeader = ({ onPressTradeGraph, timeInterval, setTimeInterval }) => {
    return (
        <View style={styles.header}>
            <View style={{ width: wp(55), flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => setTimeInterval("5m")}>
                    <ResponsiveText style={[styles.text8, { color: timeInterval === "5m" ? colors.mainColor : colors.iconColor }]}>5m</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTimeInterval("1h")}>
                    <ResponsiveText style={[styles.text8, { color: timeInterval === "1h" ? colors.mainColor : colors.iconColor }]}>1h</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTimeInterval("30m")}>
                    <ResponsiveText style={[styles.text8, { color: timeInterval === "30m" ? colors.mainColor : colors.iconColor }]}>30m</ResponsiveText>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={styles.text8}>More</ResponsiveText>
                    <HorizontalSpacer />
                    <Entypo name="chevron-down" size={10} color={colors.grayColor2} />
                </TouchableOpacity>
                <ResponsiveText style={styles.text8}>MCap</ResponsiveText>
            </View>
            <View style={{ width: wp(10), flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={onPressTradeGraph} >
                    <Image style={styles.tradingGraohImage} source={images.trading} />
                </TouchableOpacity>
                <HorizontalSpacer width={wp(3)} />
                <TouchableOpacity onPress={onPressTradeGraph} >
                    <Image style={styles.tradingGraohImage} source={images.systemSettingIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const calculateYPosition = (price, minPrice, maxPrice) => {
    const priceRange = maxPrice - minPrice;
    const normalizedPrice = (price - minPrice) / priceRange;
    return hp(30) * (1 - normalizedPrice);
};

export const ExchangeInnerHeader = ({ marketData }) => {
    return (
        <View style={styles.tradingHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>30</ResponsiveText>
                <HorizontalSpacer />
                <View style={{ width: wp(1), height: wp(1), borderRadius: wp(0.5), backgroundColor: colors.iconColor }} />
                <HorizontalSpacer />

                <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>{marketData?.symbol?.toUpperCase()}</ResponsiveText>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <HorizontalSpacer />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>O</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400", color: colors.green }]}>0.15894</ResponsiveText>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <HorizontalSpacer />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>H</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400", color: colors.red }]}>0.15894</ResponsiveText>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <HorizontalSpacer />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>L</ResponsiveText>
                    <HorizontalSpacer width={wp(1)} />
                    <ResponsiveText style={[styles.text6, { fontWeight: "400", color: colors.red }]}>0.15894</ResponsiveText>
                </View>
                <HorizontalSpacer />

                <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>C</ResponsiveText>

            </View>
        </View>
    )
}

export const TradeGraph = ({ data }) => {

    const maxPrice = Math.max(...data.map(c => c.high));
    const minPrice = Math.min(...data.map(c => c.low));
    const CANDLE_W = wp(3.1);
    const GAP = wp(1);
    const SIDE_PAD = GAP * 4;

    const CHART_W = Math.max(width, data.length * (CANDLE_W + GAP));

    const step = CHART_W / Math.max(1, data.length);
    const SAFE_CANDLE_W = Math.max(1, Math.min(CANDLE_W, step - GAP));
    return (
        <>
            <GestureHandlerRootView style={{ flexDirection: 'row' }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View>
                        {/* --- Candle chart --- */}
                        <View style={{ paddingHorizontal: wp(5) }}>
                            <CandlestickChart.Provider data={data}>
                                <CandlestickChart width={CHART_W} height={hp(30)}>
                                    <CandlestickChart.Candles
                                        positiveColor={colors.green}
                                        negativeColor={colors.red}
                                        candleProps={{ width: SAFE_CANDLE_W }}
                                    />
                                </CandlestickChart>
                            </CandlestickChart.Provider>
                        </View>

                        {/* --- Volume label --- */}
                        <View style={{ flexDirection: 'row', paddingHorizontal: wp(5) }}>
                            <ResponsiveText style={[styles.text6, { fontWeight: '400' }]}>Volume SMA 9 </ResponsiveText>
                            <ResponsiveText style={[styles.text6, { fontWeight: '400', color: colors.green }]}>$223K</ResponsiveText>
                        </View>

                        {/* --- Bar chart --- */}
                        <View style={{ marginTop: hp(1), width: CHART_W, paddingHorizontal: wp(2) }}>
                            <BarChart
                                data={data.map(d => ({
                                    value: d.volume,
                                    frontColor: d.close >= d.open ? colors.green : colors.red,
                                }))}
                                barWidth={SAFE_CANDLE_W * 0.65}
                                spacing={GAP}
                                height={hp(8)}
                                hideRules
                                hideYAxisText
                                yAxisThickness={0}
                                xAxisThickness={0}
                            />
                        </View>

                        {/* --- X-axis labels (inside scroll now) --- */}
                        <View
                            style={[
                                appStyles.row,
                                { width: CHART_W, justifyContent: "space-between", paddingHorizontal: SIDE_PAD },
                            ]}
                        >
                            {data.map((item, index) =>
                                index % 5 === 0 ? (
                                    <ResponsiveText key={index} style={styles.xAxisText}>
                                        {moment(item.timestamp).format("H:mm")}
                                        {/* example: 9:00, 14:05 */}
                                    </ResponsiveText>
                                ) : null
                            )}
                        </View>
                    </View>
                </ScrollView>

                {/* --- Y-axis labels remain fixed --- */}
                <View style={[styles.yAxisView, { height: hp(30), justifyContent: 'space-between' }]}>
                    {[maxPrice, (maxPrice + minPrice) / 2, minPrice].map((p, i) => (
                        <ResponsiveText key={i} style={styles.yAxisText}>
                            {p.toLocaleString()}
                        </ResponsiveText>
                    ))}
                </View>
            </GestureHandlerRootView>





            {/* </View> */}
        </>


    )
}




export const TradeGraphBelowHeader = ({ onPressTradeGraph }) => {
    return (
        <View style={[styles.header, { width: wp(100), paddingHorizontal: wp(5) }]}>
            <View style={{ width: wp(30), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.text8}>1D</ResponsiveText>
                <ResponsiveText style={styles.text8}>1M</ResponsiveText>
                <ResponsiveText style={styles.text8}>5M</ResponsiveText>
                <ResponsiveText style={styles.text8}>1Y</ResponsiveText>
            </View>
            <View style={{ width: wp(45), flexDirection: "row", alignItems: "center", alignSelf: "flex-end" }}>
                <ResponsiveText style={styles.text8}>12:06:36 UTC</ResponsiveText>
                <HorizontalSpacer />
                <Line height={hp(2.5)} width={wp(0.7)} backgroundColor={colors.iconColor} />
                <HorizontalSpacer />
                <ResponsiveText style={styles.text8}>%</ResponsiveText>
                <HorizontalSpacer />
                <ResponsiveText style={styles.text8}>Log</ResponsiveText>
                <HorizontalSpacer />
                <ResponsiveText style={[styles.text8, { color: colors.yellow1 }]}>Auto</ResponsiveText>
            </View>
        </View>
    )
}

export const OrderBookHeader = ({ buttonPress, setButtonPress, currentOrders }) => {
    return (
        <View style={[appStyles.row, { width: wp(90), alignSelf: "center" }]}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("orderbook")} style={[styles.currentPriceStyle, { color: buttonPress === "orderbook" ? colors.withdrawBtn : colors.iconColor }]} >Order book</ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "orderbook" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1, alignSelf: "center" }} />)}
                </View>
                <HorizontalSpacer width={wp(5)} />
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("lasttrade")} style={[styles.currentPriceStyle, { color: buttonPress === "lasttrade" ? colors.withdrawBtn : colors.iconColor, textAlign: "center" }]} >Last trades </ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "lasttrade" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1, alignSelf: "center" }} />)}
                </View>
            </View>
            {/* <TouchableOpacity >
                <Image source={images.history} style={styles.images} resizeMode="contain" />
            </TouchableOpacity> */}
        </View>
    )
}

export const PriceUSDT = ({ title1, title2, title3, title4, onpress }) => {
    return (
        <View style={[appStyles.row, { width: wp(100), paddingHorizontal: wp(4) }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.textPrice}>Buy</ResponsiveText>
                <ResponsiveText style={styles.textPrice}>{title2}</ResponsiveText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.textPrice}>0.1</ResponsiveText>
                <HorizontalSpacer />
                <TouchableOpacity onPress={onpress}>
                    <Entypo name="chevron-down" size={10} color={colors.grayColor2} />
                </TouchableOpacity>
                {/* <HorizontalSpacer /> */}
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.textPrice}>Sell</ResponsiveText>
                <ResponsiveText style={{ ...styles.textPrice, textAlign: 'right' }}>{title4}</ResponsiveText>
            </View>
        </View>
    );
};



export const BuyOrderBook = ({ data }) => {
    console.log(data,"data in buy order book")
const maxAmount = data?.length
  ? Math.max(...data.map(item => Number(item?.quantity) || 0))
  : 0;

    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                const barWidth = (item.quantity / maxAmount) * 100;
                return (
                        <View style={{ ...appStyles.row, paddingHorizontal: wp(1), position: "relative", height: hp(4)}}>
                        <View
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: `${barWidth}%`, // dynamic width
                                backgroundColor: colors.green, // or red based on side
                                opacity: 0.3,
                                borderRadius: 0,
                                alignItems: "flex-end",
                                right: 0
                            }}
                        />
                        <ResponsiveText style={styles.textFlatList1}>
                            {item.quantity}
                        </ResponsiveText>
                        <ResponsiveText style={{ ...styles.textFlatList, color: colors.green }}>
                            {item.price}
                        </ResponsiveText>

                    </View>
                )
            }}
        />
    )
}

export const SellOrderBook = ({ data = [], textColor })=>{
const maxAmount = data?.length
  ? Math.max(...data.map(item => Number(item?.quantity) || 0))
  : 0;

    return(
         <FlatList
                data={data}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const barWidth = (item.quantity / maxAmount) * 100;

                    return (

                        <View style={{ ...appStyles.row, paddingHorizontal: wp(1), position: "relative", height: hp(4)}}>
                            <View
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: `${barWidth}%`, // dynamic width
                                    backgroundColor: colors.red, // or red based on side
                                    opacity: 0.3,
                                    borderRadius: 0,
                                    alignItems: "flex-end",
                                    // right: 0
                                }}
                            />
                            <ResponsiveText style={{ ...styles.textFlatList, color: colors.red }}>
                                {item.price}
                            </ResponsiveText>
                            <ResponsiveText style={styles.textFlatList1}>
                                {item.quantity}
                            </ResponsiveText>
                        </View>
                    )
                }}
            />
    )
}

export const BuySellButton = ({ onBuyPress, onSellPress }) => {
    return (
        <View style={{ width: wp(80), alignItems: "center", justifyContent: "space-between", paddingHorizontal: wp(0), flexDirection: "row" }}>
            <TouchableOpacity onPress={onBuyPress} style={{ width: wp(40), backgroundColor: colors.green, borderRadius: wp(25), paddingVertical: hp(1.5), alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "600" }}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSellPress} style={{ width: wp(40), backgroundColor: colors.red, borderRadius: wp(25), paddingVertical: hp(1.5), alignItems: "center", marginLeft: wp(2) }}>
                <Text style={{ color: "#fff", fontWeight: "600" }}>Sell</Text>
            </TouchableOpacity>

        </View>
    )
}

export const FavoutiteBottomSheetComponnet = ({ ref, marketData, value, onchangeText, onPress }) => {
    return (
        <BottomSheet height={hp(70)} ref={ref}>
            <RenderFavouriteCoinList
                value={value}
                onchangeText={onchangeText}
                marketData={marketData}
                onPress={onPress}
            />
        </BottomSheet>
    )

}


const styles = StyleSheet.create({
    header: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: wp(1),
        alignSelf: "center",
        // borderWidth:1
        // borderWidth:1
    },
    tradingHeader: {
        width: wp(90),
        flexDirection: "row",
        // justifyContent: "space-between",
        alignSelf: "center",
        // borderWidth:1
    },
    headerText: {
        fontSize: 18,
        fontWeight: "500",
        color: colors.white,
        fontFamily: fontFamily.mainTextMedium
    },
    currentPriceStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.mainColor,
        fontFamily: fontFamily.appTextMedium
    },
    XView: {
        width: wp(8),
        paddingHorizontal: wp(1),
        paddingVertical: wp(0.5),
        borderRadius: wp(1),
        backgroundColor: colors.white,
        opacity: 0.1,

    },
    text1: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    image1: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain"
    },
    coinPriceDetailView: {
        width: wp(100),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(5),
        alignSelf: "center",
        paddingVertical: wp(2),
        alignItems: "center"
    },
    text2: {
        fontSize: 26,
        fontWeight: "500",
        fontFamily: fontFamily.mainTextMedium,
        color: colors.green
    },
    text3: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
        // textAlign:"left"
    },
    text4: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.green,
    },
    text5: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: fontFamily.appTextMedium,
        color: colors.yellow1
    },
    text6: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor
    },
    text8: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: fontFamily.appTextRegular,
        color: colors.iconColor
    },
    text7: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        fontWeight: "500",
        color: colors.halfWhite
    },
    coinPriceDetailFirstView: {
        width: wp(35)
    },
    tradingGraohImage: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain"
    },
    yAxisText: {
        fontSize: 13,
        fontFamily: fontFamily.appTextRegular,
        color: colors.iconColor,
        fontWeight: "400"
    },
    xAxisText: {
        fontSize: 13,
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
        fontWeight: "400"
    },
    lineView: {
        position: 'absolute',
        zIndex: -10,
        left: 0,
        right: 0,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: colors.chartLine,
    },
    yAxisView: {
        //   position: 'absolute',
        right: 0,
        top: 0,
        alignItems: 'flex-end',
        paddingRight: wp(2),
    },

    lineView1: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderWidth: 0.3,
        borderColor: colors.white,
        borderStyle: 'dashed',
    },
    textPrice: {
        fontSize: 10,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    textFlatList: {
        fontSize: 12,
        fontFamily: fontFamily.appTextMedium,
        fontWeight: "500",

    },
    textFlatList1: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.white
    }

})