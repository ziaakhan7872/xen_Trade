import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/FontAwesome6"
import images from '../../../../../images'
import Slider from '@react-native-community/slider'
import InputText from '../../../../../components/InputText'
import { SimpleButton } from '../../../../../components/SimpleButton'
import { coinData, DummyCurrentSymbol, dummyOrderBook } from '../../../../../utilities/dummyData'
import { appStyles } from '../../../../../utilities'
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment'
import { GorhomBottomSheet } from '../../../../../components/GorhumBottomSheetComponent'
import { ResponsiveText } from '../../../../../components/ResponsiveText'
import Spacer, { HorizontalSpacer } from '../../../../../components/Spacer'
import { colors, fontFamily, Routes } from '../../../../../constants'
import { hp, wp } from '../../../../../components/ResponsiveComponent'
import Line from '../../../../../components/Liner'
import { RenderFavouriteCoinList } from '../../Component/Index'
import BigNumber from 'bignumber.js'
import BottomSheet from '../../../../../components/BottomSheet'

export const ExchangeHeader = ({ onpress, onPressTradeGraph, marketData }) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.headerText}>{marketData?.symbol.toUpperCase()}</ResponsiveText>
                <HorizontalSpacer />
                <TouchableOpacity onPress={onpress}>
                    <Entypo name="chevron-down" size={15} color={colors.white} />
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.currentPriceStyle}>+3.33%</ResponsiveText>
            </View>
            <TouchableOpacity onPress={onPressTradeGraph} >
                <Image style={styles.tradingGraohImage} source={images.trading} />
            </TouchableOpacity>
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

export const BuyForm = ({
    handleBuySliderChange, handleBuyPriceChange, handleBuyQuantityChange,
    currentCoinPrice,
    addQuantity, dicreaseQuantity, quantity,
    Price, handleBuyCoinPriceChange,
    QuoteBalance, value,
    onPressTradingType, tradingType,
    marketData, buyOrder,
    errorMessage, loading,
    addCoinPrice, dicreaseCoinPrice
}) => {


    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity onPress={onPressTradingType} style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3), paddingVertical: wp(2) }]}>
                <ResponsiveText style={styles.text1}>{tradingType === "limit" ? "Limit" : "Market"}</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>

                <TouchableOpacity onPress={dicreaseCoinPrice}>
                    <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                </TouchableOpacity>

                <TextInput
                    style={{ textAlign: 'center', minWidth: wp(10), maxWidth: wp(30), color: colors.white }}
                    value={currentCoinPrice ? currentCoinPrice.toString() : ""}
                    onChangeText={handleBuyCoinPriceChange}
                    keyboardType="numeric"
                    placeholderTextColor={colors.placeHolderTextColor}
                />

                <TouchableOpacity onPress={addCoinPrice}>
                    <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
                </TouchableOpacity>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>

                <TouchableOpacity onPress={dicreaseQuantity}>
                    <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                </TouchableOpacity>

                <TextInput
                    style={{ textAlign: 'center', minWidth: wp(10), maxWidth: wp(30), color: colors.white }}
                    value={quantity ? quantity.toString() : ""}
                    onChangeText={handleBuyQuantityChange}
                    // placeholder={marketData?.base ? `Amount ${marketData?.base}` : `Amount`}
                    keyboardType="numeric"
                    placeholderTextColor={colors.placeHolderTextColor}
                />

                <TouchableOpacity onPress={addQuantity}>
                    <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
                </TouchableOpacity>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={handleBuySliderChange}
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
            <View style={{ width: wp(43), alignItems: 'center', backgroundColor: colors.cardsBgColor, borderRadius: wp(3) }}>
                <TextInput
                    value={Price ? Price.toString() : ""}
                    onChangeText={handleBuyPriceChange}
                    placeholder={marketData?.quote ? `Amount ${marketData?.quote}` : "Amount"}
                    placeholderTextColor={colors.placeHolderTextColor}
                    style={{
                        textAlign: 'center',
                        color: colors.white,
                        fontSize: 14,
                        // minWidth: wp(5),
                        maxWidth: wp(43),
                    }}
                    keyboardType="decimal-pad"
                />
            </View>
            {errorMessage &&
                <ResponsiveText style={styles.error}>{errorMessage}</ResponsiveText>}
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    {/* <ResponsiveText style={styles.label2}>Fee</ResponsiveText> */}
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>{Number(QuoteBalance).toFixed(3)} {marketData?.quote?.toUpperCase()}</ResponsiveText>
                    <Spacer height={hp(1)} />
                    {/* <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText> */}
                </View>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} width={wp(43)} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.label2}>Total</ResponsiveText>
                <ResponsiveText style={[styles.label3, { color: colors.white }]}>{quantity.toString()} {marketData?.base.toUpperCase()}</ResponsiveText>
            </View>
            <Spacer />
            <SimpleButton
                buttonWidth={wp(43)}
                backgroundColor={colors.green}
                height={hp(4.5)}
                textColor={colors.white}
                text={marketData?.base ? `Buy ${marketData.base.toUpperCase()}` : 'Buy'}
                onPress={buyOrder}
                loading={loading}
            />

        </>

    )
}
export const SellForm = ({
    value,
    onPressTradingtype, tradingType,
    marketData,
    currentCoinPrice, HandleCoinPriceChange,
    dicreaseQuantity, handleSellQuantityChange, quantity, addQuantity,
    Price, handleSellPriceChange, BaseBalance,
    handleSellSliderChange, loading, onPress, errorMessage,
    addCoinPrice, dicreaseCoinPrice

}) => {
    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity onPress={onPressTradingtype} style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3), paddingVertical: wp(2) }]}>
                <ResponsiveText style={styles.text1}>{tradingType === "limit" ? "Limit" : "Market"}</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>

                <TouchableOpacity onPress={dicreaseCoinPrice}>
                    <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                </TouchableOpacity>

                <TextInput
                    style={{ textAlign: 'center', minWidth: wp(10), maxWidth: wp(30), color: colors.white }}
                    value={currentCoinPrice ? currentCoinPrice.toString() : ""}
                    onChangeText={HandleCoinPriceChange}
                    keyboardType="numeric"
                    placeholderTextColor={colors.placeHolderTextColor}
                />

                <TouchableOpacity onPress={addCoinPrice}>
                    <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
                </TouchableOpacity>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>

                <TouchableOpacity onPress={dicreaseQuantity}>
                    <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                </TouchableOpacity>

                <TextInput
                    style={{ textAlign: 'center', minWidth: wp(10), maxWidth: wp(30), color: colors.white }}
                    value={quantity ? quantity.toString() : ""}
                    onChangeText={handleSellQuantityChange}
                    placeholder={`Amount ${marketData?.base}`}
                    keyboardType="numeric"
                    placeholderTextColor={colors.placeHolderTextColor}
                />

                <TouchableOpacity onPress={addQuantity}>
                    <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
                </TouchableOpacity>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={handleSellSliderChange}
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
            <View style={{ width: wp(43), alignItems: 'center', backgroundColor: colors.cardsBgColor, borderRadius: wp(3) }}>

                <TextInput
                    value={Price ? Price.toString() : ""}
                    onChangeText={handleSellPriceChange}
                    placeholder={`Amount ${marketData?.quote}`}
                    placeholderTextColor={colors.placeHolderTextColor}
                    style={{
                        textAlign: 'center',
                        color: colors.white,
                        fontSize: 14,
                        // minWidth: wp(5),
                        maxWidth: wp(43),
                    }}
                    keyboardType="decimal-pad"
                />
            </View>
            {errorMessage &&
                <ResponsiveText style={styles.error}>{errorMessage}</ResponsiveText>}
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    {/* <ResponsiveText style={styles.label2}>Fee</ResponsiveText> */}
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>{Number(BaseBalance).toFixed(3)} {marketData?.base.toUpperCase()}</ResponsiveText>
                    <Spacer height={hp(1)} />
                    {/* <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText> */}
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
            <SimpleButton
                buttonWidth={wp(43)}
                backgroundColor={colors.red}
                height={hp(4.5)}
                textColor={colors.white}
                text={`Sell ${marketData?.base.toUpperCase()}`}
                loading={loading}
                onPress={onPress}
            />

        </>

    )
}

export const BuyOrder = ({ data, textColor, marketData }) => {
    return (
        <FlatList
            data={data?.buy_orders || data?.buyOrders}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ ...appStyles.row, paddingVertical: 2 }}>
                    <ResponsiveText style={{ ...styles.textFlatList, color: textColor ?? colors.red }}>
                        {BigNumber(item?.price ?? 0).toFormat(marketData?.pricePrecision ?? 2)}
                    </ResponsiveText>
                    <ResponsiveText style={styles.textFlatList1}>
                        {item.quantity}
                    </ResponsiveText>
                </View>
            )}
        />
    );
};

export const OrderBookForm = ({ orderBook, cureentCoinPrice ,marketData}) => {
    return (
        <>
            <PriceUSDT title1={'Price'} title2={`(${marketData?.quote.toUpperCase()})`} title3={'Amount'} title4={`(${marketData?.base.toUpperCase()})`} />
            <Spacer height={hp(0.5)} />
            <BuyOrder data={orderBook} textColor={colors.green} />
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} />
            <Spacer height={hp(1)} />
            <View style={appStyles.row}>
                <ResponsiveText style={styles.priceText}>{cureentCoinPrice}</ResponsiveText>
                <ResponsiveText style={styles.priceText2}>≈{cureentCoinPrice}</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} />
            <Spacer height={hp(1)} />
            <SellOrder data={orderBook} />
        </>
    )
}

export const SellOrder = ({ data = [], textColor, marketData }) => {
    return (
        <FlatList
            data={data?.sell_orders || data?.sellOrders}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ ...appStyles.row, paddingVertical: 2 }}>
                    <ResponsiveText style={{ ...styles.textFlatList, color: textColor ?? colors.red }}>
                        {BigNumber(item?.price ?? 0).toFormat(marketData?.pricePrecision ?? 2)}
                    </ResponsiveText>
                    <ResponsiveText style={styles.textFlatList1}>
                        {item.quantity}
                    </ResponsiveText>
                </View>
            )}
        />
    );
};


const PriceUSDT = ({ title1, title2, title3, title4 }) => {
    return (
        <View style={appStyles.row}>
            <View>
                <ResponsiveText style={styles.textPrice}>{title1}</ResponsiveText>
                <ResponsiveText style={styles.textPrice}>{title2}</ResponsiveText>
            </View>
            <View>
                <ResponsiveText style={styles.textPrice}>{title3}</ResponsiveText>
                <ResponsiveText style={{ ...styles.textPrice, textAlign: 'right' }}>{title4}</ResponsiveText>
            </View>
        </View>
    );
};

export const CurrentOrderHistoryHeader = ({ props, buttonPress, setButtonPress, currentOrders }) => {
    return (
        <View style={[appStyles.row, { width: wp(90), alignSelf: "center", alignItems: "center" }]}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("currentOrder")} style={[styles.text2, { color: buttonPress === "currentOrder" ? colors.withdrawBtn : colors.iconColor }]} >Current Order ({currentOrders?.length ? currentOrders?.length : "0"})</ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "currentOrder" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1 }} />)}
                </View>
                <HorizontalSpacer width={wp(5)} />
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("assets")} style={[styles.text2, { color: buttonPress === "assets" ? colors.withdrawBtn : colors.iconColor }]} >Assets </ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "assets" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1 }} />)}
                </View>
            </View>
            <TouchableOpacity onPress={() => props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.orderHistory })}>
                <Image source={images.history} style={styles.images} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

export const CurrentOderComponentHeader = ({ isCurrentSymbol, setIsCurrentSymbol, CancelAllPress }) => {
    return (
        <View style={[appStyles.row, { width: wp(90), alignSelf: "center" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setIsCurrentSymbol(!isCurrentSymbol)} >
                    {isCurrentSymbol ? (
                        <Image source={images.checkBox} style={[styles.images, { width: wp(6), height: wp(6) }]} />
                    ) : (
                        <Icon name="square" size={25} color={colors.white} />
                    )}
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.text4}>Current Symbol</ResponsiveText>
            </View>
            <TouchableOpacity onPress={() => CancelAllPress()}>
                <ResponsiveText style={styles.text5}>Cancel all</ResponsiveText>

            </TouchableOpacity>

        </View>

    )
}

export const CurrentOrderComponent = ({ orders, OnpressDelete, currentOrder }) => {
    return (
        <>
            <View style={{ alignSelf: "center" }}>
                <Spacer />
                <FlatList
                    data={currentOrder}
                    keyExtractor={(item, index) => item?.id}
                    scrollEnabled
                    nestedScrollEnabled
                    ItemSeparatorComponent={(
                        <Spacer height={hp(1)} />
                    )}
                    ListEmptyComponent={
                        <View style={{ alignItems: "center", marginTop: hp(4) }}>
                            <Image source={images.openOrder} style={styles.images} />
                            <Spacer height={hp(1)} />
                            <ResponsiveText style={styles.text4}>No open orders</ResponsiveText>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View style={styles.OrderMainView}>
                            <View style={styles.orderMainSubView} >
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <ResponsiveText style={styles.text6}>{item?.pair?.toUpperCase()}</ResponsiveText>
                                        <HorizontalSpacer />
                                        <TouchableOpacity>
                                            <Entypo name="chevron-right" size={20} color={colors.white} />

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <ResponsiveText style={[styles.text1, { color: item.side === "buy" ? colors.green : colors.red }]}>{item?.side?.toUpperCase()}</ResponsiveText>
                                        <HorizontalSpacer />
                                        <ResponsiveText style={[styles.text1, { color: item.side === "buy" ? colors.green : colors.red }]}>{item.type}</ResponsiveText>
                                        <HorizontalSpacer />
                                        <ResponsiveText style={[styles.text5]}>
                                            {moment(item?.updatedAt && item.updatedAt !== '0001-01-01T00:00:00Z'
                                                ? item.updatedAt
                                                : item?.createdAt
                                            ).format('MM/DD, HH:mm:ss')}
                                        </ResponsiveText>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity>
                                        <Feather name="edit" size={20} color={colors.white} />
                                    </TouchableOpacity>
                                    <HorizontalSpacer />
                                    <Line height={hp(2)} width={wp(1)} />
                                    <HorizontalSpacer />
                                    <TouchableOpacity onPress={() => OnpressDelete(item)}>
                                        <ResponsiveText style={styles.buySellButtonText}>Cancel</ResponsiveText>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={styles.orderMainSubView}>
                                <View>
                                    <ResponsiveText style={[styles.text5, { fontFamily: fontFamily.appTextMedium }]}>Order Amount {item?.base?.toUpperCase()}</ResponsiveText>
                                    <Spacer height={hp(0.5)} />
                                    <ResponsiveText style={styles.text7}>{item?.quantity}</ResponsiveText>

                                </View>
                                <View>
                                    <ResponsiveText style={[styles.text5, { fontFamily: fontFamily.appTextMedium }]}>Filled {item?.base?.toUpperCase()}</ResponsiveText>
                                    <Spacer height={hp(0.5)} />
                                    <ResponsiveText style={styles.text7}>{item?.executedQty || "0"}</ResponsiveText>
                                </View>
                                <View>
                                    <ResponsiveText style={[styles.text5, { fontFamily: fontFamily.appTextMedium }]}>Order Price</ResponsiveText>
                                    <Spacer height={hp(0.5)} />
                                    <ResponsiveText style={styles.text7}>{item?.price}</ResponsiveText>
                                </View>
                            </View>
                        </View>

                    )}
                />


            </View>
        </>


    )
}

export const AssetsComponent = (data = coinData) => {
    return (
        <>
            {(data && data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    // ItemSeparatorComponent={(
                    //     <Spacer height={hp(0.2)} />
                    // )}
                    renderItem={({ item }) => (
                        <View style={styles.AssetsView}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image style={styles.image2} source={item.icon} />
                                <HorizontalSpacer />
                                <View>
                                    <ResponsiveText style={styles.text4}>{item.symbol}</ResponsiveText>
                                    <Spacer height={hp(0.5)} />
                                    <ResponsiveText style={[styles.label2, { color: colors.iconColor }]}>{item.name}</ResponsiveText>

                                </View>
                            </View>
                            <View>
                                <ResponsiveText style={[styles.text4, { textAlign: "right" }]}>{item.amount}</ResponsiveText>
                                <Spacer height={hp(0.5)} />
                                <ResponsiveText style={[styles.label3, { color: colors.iconColor, }]}>{item.value}</ResponsiveText>                    </View>
                        </View>
                    )
                    }

                />
            ) : (
                <>
                    <Spacer />
                    <View style={{ alignItems: "center" }}>
                        <Image source={images.openOrder} style={styles.images} />
                        <Spacer height={hp(1)} />
                        <ResponsiveText style={styles.text4}>No open orders</ResponsiveText>
                    </View>

                </>
            ))}

        </>

    )
}

export const TradingTypeComponent = ({ ref, closeBottomSheet, tradingTypePress, setTradingTypePress }) => {
    return (
        <BottomSheet height={hp(40)} ref={ref} >
            <Spacer />
            <View style={styles.BottomSheetView}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: wp(5) }}>
                    <ResponsiveText style={styles.bottomSheetTitle}>SELECT TRADING TYPE</ResponsiveText>
                    <ResponsiveText onPress={closeBottomSheet} style={styles.bottomSheetTitle}>X</ResponsiveText>
                </View>
                <Spacer />
                <Line height={hp(0.1)} />
                <Spacer />
                <View style={{ paddingHorizontal: wp(5) }}>
                    <TouchableOpacity onPress={() => {
                        setTradingTypePress("limit")
                        ref?.current?.close();
                    }} style={styles.bottomSheetButtonView}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={images.marketOrder} style={styles.Images3} />
                            <HorizontalSpacer width={wp(2)} />
                            <View>
                                <ResponsiveText style={styles.text8}>Limit order</ResponsiveText>
                                <ResponsiveText style={[styles.text2, { width: wp(60) }]} numberOfLines={2}>Buy or Sell at a specified price or better</ResponsiveText>
                            </View>
                        </View>

                        {tradingTypePress === "limit" && (
                            <Image style={styles.images} source={images.tickBoxes} />
                        )}
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity onPress={() => {
                        setTradingTypePress("market")
                        ref?.current?.close();
                    }} style={styles.bottomSheetButtonView}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={images.Limit} style={styles.Images3} />
                            <HorizontalSpacer width={wp(3)} />
                            <View>
                                <ResponsiveText style={styles.text8}>Market order</ResponsiveText>
                                <ResponsiveText style={[styles.text2, { width: wp(60) }]} numberOfLines={2}>Buy or sell instantly at the best market price.</ResponsiveText>
                            </View>
                        </View>
                        {tradingTypePress === "market" && (
                            <Image style={styles.images} source={images.tickBoxes} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <Spacer />
        </BottomSheet>
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
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center"


    },
    headerText: {
        fontSize: 22,
        fontWeight: "500",
        color: colors.white,
        fontFamily: fontFamily.appTextMedium
    },
    currentPriceStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.mainColor,
        fontFamily: fontFamily.appTextMedium
    },
    tradingGraohImage: {
        width: wp(6),
        height: wp(6),
        resizeMode: "contain"
    },
    buySellRowView: {
        width: wp(43),
        // height: hp(4.5),
        borderRadius: wp(10),
        backgroundColor: colors.cardsBgColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: colors.white,
    },
    inputTextStyling: {
        textAlign: 'center',
        width: wp(43),
        color: colors.white,
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(3),
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,


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
        fontFamily: fontFamily.appTextRegular

    },
    text1: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fontFamily.appTextRegular
    },
    minuePlusText: {
        fontSize: 22,
        fontFamily: fontFamily.appTextRegular,
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
        color: colors.iconColor,
        fontFamily: fontFamily.appTextMedium
    },
    error: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.red,
        fontFamily: fontFamily.appTextMedium
    },
    label3: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor,
        textAlign: "right",
        fontFamily: fontFamily.appTextMedium
    },
    orderBookView2: {
        width: wp(43),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(2),
        paddingVertical: wp(3),
        backgroundColor: colors.red,
        paddingBottom: 10,
        opacity: 0.3
    },
    textFlatList: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
    },
    textFlatList1: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
    },
    textPrice: {
        fontSize: 10,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    text2: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor
    },
    images: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain",
        // borderWidth:1
    },
    image2: {
        width: wp(10),
        height: wp(10),
        resizeMode: "contain",
        // borderWidth:1
    },
    text4: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.white
    },
    text5: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        color: colors.iconColor
    },
    OrderMainView: {
        width: wp(90),
        justifyContent: "center",
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(3)
    },
    orderMainSubView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        // alignSelf:"center"
        paddingHorizontal: wp(5),
        paddingVertical: wp(2)
    },
    text6: {
        fontSize: 20,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white
    },
    text7: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fontFamily.appTextMedium
    },
    AssetsView: {
        width: wp(100),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    BottomSheetView: {
        width: wp(100),

    },
    bottomSheetTitle: {
        fontFamily: fontFamily.mainTextBold,
        fontSize: 18,
        color: colors.white
    },
    bottomSheetButtonView: {
        paddingHorizontal: wp(5),
        borderRadius: wp(3),
        backgroundColor: colors.buttonColor,
        paddingVertical: wp(3),
        width: wp(90),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderWidth:1
    },
    Images3: {
        width: wp(11),
        height: wp(11),
        resizeMode: "contain"
    },
    text8: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white
    },
    InputText: {
        width: wp(30),
        height: hp(2),
        color: colors.white,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        textAlign: "center",
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(3),
        borderWidth: 1,
        borderColor: colors.cardBorderColor,
    },
    priceText: {
        fontSize: 20,
        fontFamily: fontFamily.appTextBold,
        color: colors.red,
    },
    priceText2: {
        fontSize: 13,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
})