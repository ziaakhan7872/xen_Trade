import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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



const { width } = Dimensions.get('window');


export const TradeHeader = ({ onpress, onPressTradeGraph, X = 10, starPress, setStarPress, onBackPress }) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={onBackPress} >
                    <Entypo name="chevron-left" size={15} color={colors.white} />
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.headerText}>BTC/USDT</ResponsiveText>
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

export const CoinPriceDetail = ({ coinPrice = "91,759.22", coinUp = "+0.28%", No = "1", position = "Top", HLow = "89,355.57", HHigh = "92,630.87", coinName = "BTC", Volum = "27,709.81", HChange = "+0.02%" }) => {
    return (
        <View style={styles.coinPriceDetailView}>
            <View style={styles.coinPriceDetailFirstView}>
                <ResponsiveText style={styles.text2}>{coinPrice}</ResponsiveText>
                <Spacer height={hp(0.5)} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={[styles.text3]}>${coinPrice}</ResponsiveText>
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

export const TradeGraphHeader = ({ onPressTradeGraph }) => {
    return (
        <View style={styles.header}>
            <View style={{ width: wp(55), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.text8}>5m</ResponsiveText>
                <ResponsiveText style={styles.text8}>1h</ResponsiveText>
                <ResponsiveText style={styles.text8}>30m</ResponsiveText>
                <ResponsiveText style={styles.text8}>1h</ResponsiveText>
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

export const TradeGraph = ({ data }) => {
    // const barCart = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
    // console.log(data,"data")

    const lastCandle = data[data.length - 1];
    const currentPrice = lastCandle.close;
    const maxPrice = Math.max(...data.map(c => c.high));
    const minPrice = Math.min(...data.map(c => c.low));
    return (
        <>
            <View style={styles.tradingHeader}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>30</ResponsiveText>
                    <HorizontalSpacer />
                    <View style={{ width: wp(1), height: wp(1), borderRadius: wp(0.5), backgroundColor: colors.iconColor }} />
                    <HorizontalSpacer />

                    <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>BTC/USDT</ResponsiveText>
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
            <GestureHandlerRootView style={{ flexDirection: "row" }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

                    <View style={{}}>
                        <CandlestickChart.Provider data={data} >
                            <CandlestickChart width={width + (data?.length * wp(2))} height={hp(30)} aria-live='assertive' >
                                <CandlestickChart.Candles positiveColor={colors.green} negativeColor={colors.red}
                                    candleProps={{ width: wp(2) }} collapsable={true} />
                                <Spacer />

                            </CandlestickChart>
                        </CandlestickChart.Provider>
                        <View style={{ flexDirection: "row" }}>
                            <ResponsiveText style={[styles.text6, { fontWeight: "400" }]}>Volume SMA 9 </ResponsiveText>
                            <ResponsiveText style={[styles.text6, { fontWeight: "400", color: colors.green }]}>$223K</ResponsiveText>

                        </View>
                        <View style={{ marginTop: hp(1) }}>
                            <BarChart
                                data={data.map(item => ({
                                    value: item.volume,
                                    frontColor: item.close >= item.open ? colors.green : colors.red,
                                }))}
                                barWidth={wp(2)}
                                spacing={wp(1)}
                                height={hp(8)}
                                hideRules
                                hideYAxisText
                                yAxisThickness={0}
                                xAxisThickness={0}
                                
                            />
                        </View>

                    </View>
                </ScrollView>


                <View style={{ ...styles.lineView1, top: calculateYPosition(currentPrice, minPrice, maxPrice) }} />



                <View style={styles.yAxisView}>
                    <ResponsiveText style={styles.xAxisText}>35,000</ResponsiveText>
                    <Spacer height={hp(Platform.OS == 'ios' ? 7 : 6.5)} />
                    <ResponsiveText style={styles.xAxisText}>33,000</ResponsiveText>
                    <Spacer height={hp(Platform.OS == 'ios' ? 8 : 7.5)} />
                    <ResponsiveText style={styles.xAxisText}>31,000</ResponsiveText>
                    <Spacer height={hp(Platform.OS == 'ios' ? 8 : 7.5)} />
                    <ResponsiveText style={styles.xAxisText}>29,000</ResponsiveText>
                </View>

                {/* <View style={{ ...styles.lineView, top: hp(1.2) }} />
                <View style={{ ...styles.lineView, top: hp(10) }} />
                <View style={{ ...styles.lineView, top: hp(20) }} />
                <View style={{ ...styles.lineView, top: hp(30) }} /> */}
            </GestureHandlerRootView>
            <View style={[appStyles.row, { width: wp(90) }]}>
                <ResponsiveText style={styles.xAxisText}>00:08</ResponsiveText>
                <ResponsiveText style={styles.xAxisText}>00:09</ResponsiveText>
                <ResponsiveText style={styles.xAxisText}>10:00</ResponsiveText>
                <ResponsiveText style={styles.xAxisText}>11:00</ResponsiveText>
                <ResponsiveText style={styles.xAxisText}>12:00</ResponsiveText>
            </View>


            {/* </View> */}
        </>


    )
}


const styles = StyleSheet.create({
    header: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(1),
        alignSelf: "center",
        // borderWidth:1
    },
    tradingHeader: {
        width: wp(90),
        flexDirection: "row",
        // justifyContent: "space-between",
        paddingHorizontal: wp(1),
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
    xAxisText: {
        fontSize: 13,
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
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
        // position: 'absolute',
        right: 0,
        top: -wp(2.5),
        borderWidth: 1
    },
    lineView1: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderWidth: 0.3,
        borderColor: colors.white,
        borderStyle: 'dashed',
    },

})