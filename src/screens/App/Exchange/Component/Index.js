import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { colors } from '../../../../constants'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import Entypo from "react-native-vector-icons/FontAwesome6"
import images from '../../../../images'
import Slider from '@react-native-community/slider'
import InputText from '../../../../components/InputText'
import Line from '../../../../components/Liner'
import { SimpleButton } from '../../../../components/SimpleButton'
import { dummyOrderBook } from '../../../../utilities/dummyData'

export const ExchangeHeader = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.headerText}>BTC/USDT</ResponsiveText>
                <HorizontalSpacer />
                <TouchableOpacity>
                    <Entypo name="chevron-down" size={15} color={colors.white} />
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.currentPriceStyle}>+3.33%</ResponsiveText>
            </View>
            <Image style={styles.tradingGraohImage} source={images.trading} />
        </View>
    )
}

export const BuySellRowButton = ({ buySellButton, setBuySellButton }) => {
    return (
        <View style={styles.buySellRowView}>
            <TouchableOpacity onPress={() => setBuySellButton("buy")} style={[styles.buySellButton, { backgroundColor: buySellButton === "buy" ? colors.green : colors.transparent }]}>
                <ResponsiveText style={[styles.buySellButtonText, { color: buySellButton === "buy" ? colors.white : colors.green }]}>Buy</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuySellButton("sell")} style={[styles.buySellButton, { backgroundColor: buySellButton === "sell" ? colors.red : colors.transparent }]}>
                <ResponsiveText style={[styles.buySellButtonText, { color: buySellButton === "sell" ? colors.white : colors.red }]}>Sell</ResponsiveText>
            </TouchableOpacity>
        </View>
    )
}

export const BuyForm = ({ setValue, value }) => {
    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.text1}>Limit</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>22976.27</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>12</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={25}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={(val) => setValue(val)}
                />

                <View style={styles.tickContainer}>
                    {marks.map((_, index) => (
                        <View key={index} style={styles.tick} />
                    ))}
                </View>
                <View style={styles.labelContainer}>
                    {marks.map((mark) => (
                        <ResponsiveText key={mark} style={[styles.label, { color: value >= mark ? colors.white : colors.cardBorderColor, },]} >
                            {mark}
                        </ResponsiveText>
                    ))}
                </View>
            </View>
            <Spacer height={hp(1)} />
            <TextInput style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.label2}>Fee</ResponsiveText>
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.0342 USDT</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
                </View>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} width={wp(43)} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.label2}>Total</ResponsiveText>
                <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
            </View>
            <Spacer />
            <SimpleButton buttonWidth={wp(43)} backgroundColor={colors.green} height={hp(4.5)} textColor={colors.white} text={"Buy"} />

        </>

    )
}
export const SellForm = ({ setValue, value }) => {
    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.text1}>Limit</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>22976.27</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>12</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={25}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={(val) => setValue(val)}
                />

                <View style={styles.tickContainer}>
                    {marks.map((_, index) => (
                        <View key={index} style={styles.tick} />
                    ))}
                </View>
                <View style={styles.labelContainer}>
                    {marks.map((mark) => (
                        <ResponsiveText key={mark} style={[styles.label, { color: value >= mark ? colors.white : colors.cardBorderColor, },]} >
                            {mark}
                        </ResponsiveText>
                    ))}
                </View>
            </View>
            <Spacer height={hp(1)} />
            <TextInput style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.label2}>Fee</ResponsiveText>
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.0342 USDT</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
                </View>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} width={wp(43)} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.label2}>Total</ResponsiveText>
                <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
            </View>
            <Spacer />
            <SimpleButton buttonWidth={wp(43)} backgroundColor={colors.red} height={hp(4.5)} textColor={colors.white} text={"Sell"} />

        </>

    )
}

export const OrderBook = ({ orderBook = dummyOrderBook }) => {
    return (
        <View style={styles.orderBookView}>
            <View style={styles.orderBookHeader}>
                <View>
                    <ResponsiveText style={styles.orderBookHeaderText}>Price</ResponsiveText>
                    <ResponsiveText style={styles.orderBookHeaderText}>(USDT)</ResponsiveText>
                </View>
                <View>
                    <ResponsiveText style={styles.orderBookHeaderText}>Amount</ResponsiveText>
                    <ResponsiveText style={styles.orderBookHeaderText}>(BTC)</ResponsiveText>
                </View>
            </View>
            <FlatList
                data={orderBook.filter(item => item.type === 'Sell')}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.orderBookView2}>
                        <ResponsiveText style={styles.SellOrderBookText}>{item.priceinUsdt}</ResponsiveText>
                        <ResponsiveText style={styles.SellOrderBookText}>{item.priceInBtc}</ResponsiveText>
                    </View>
                )}
                ItemSeparatorComponent={() => <Spacer height={hp(0.2)} />}
            />


        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: wp(90),
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",


    },
    headerText: {
        fontSize: 22,
        fontWeight: "500",
        color: colors.white
    },
    currentPriceStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.mainColor
    },
    tradingGraohImage: {
        width: wp(6),
        height: wp(6),
        resizeMode: "contain"
    },
    buySellRowView: {
        width: wp(43),
        height: hp(4.5),
        borderRadius: wp(10),
        backgroundColor: colors.cardsBgColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: colors.white
    },
    orderBookView: {
        width: wp(43),

    },
    buySellButton: {
        width: wp(21.5),
        height: hp(4.5),
        borderRadius: wp(10),
        alignItems: "center",
        justifyContent: "center"
    },
    buySellButtonText: {
        fontSize: 12,
        fontWeight: "400",

    },
    text1: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.white
    },
    minuePlusText: {
        fontSize: 22,
        fontWeight: "400",
        color: colors.white
    },
    slider: {
        width: wp(43),
        borderWidth: 1
    },
    tickContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 20,
        right: 20,
        height: 30,
        pointerEvents: 'none',
        bottom: 15,
    },
    tick: {
        width: 1,
        height: 12,
        backgroundColor: colors.cardBorderColor,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        color: 'white',
        fontSize: 14,
    },
    label2: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor
    },
    label3: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor,
        textAlign: "right"
    },
    orderBookHeader: {
        width: wp(43),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orderBookHeaderText: {
        fontSize: 11,
        color: colors.iconColor,
        fontWeight: "500"
    },
    SellOrderBookText: {
        fontSize: 11,
        fontWeight: "500",
        color: colors.red,
      
    },
    orderBookView2: {
        width: wp(43),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(2),
        paddingVertical: wp(3),
        backgroundColor:colors.red,
        paddingBottom:10,
        opacity:0.3
    }



})