import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer'
import UseTradeGraphScreen from './Hooks/Index'
import Line from '../../../../components/Liner'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import { BuySellButton, CoinPriceDetail, FavoutiteBottomSheetComponnet, FlatlistValues, OrderBookHeader, PriceUSDT, TradeGraph, TradeGraphBelowHeader, TradeGraphHeader, TradeHeader } from './Component/Index'
import { Amount } from '../../../../utilities/dummyData'
import { colors } from '../../../../constants'
import RowButton from '../../../../components/RowButton'
import { Portal } from 'react-native-portalize'

const TradeGraphScreen = (props) => {
    const {
        starPress, setStarPress,
        candleChartData, setCandleChartData,
        orderBookHeaderPress, setOrderBookHeaderPress,
        favouriteBottomSheetRef, selectedData,
        BuyPress, SellPress
    } = UseTradeGraphScreen(props)



    return (
        <ExchangeMainContainer>
            <TradeHeader marketData={selectedData} onpress={() => favouriteBottomSheetRef?.current?.expand()} onBackPress={() => props?.navigation?.goBack()} setStarPress={setStarPress} starPress={starPress} />
            <ScrollView Dat contentContainerStyle={{ paddingBottom: hp(6) }}>
                <Spacer />
                <Line height={hp(0.1)} />
                <CoinPriceDetail />
                <Spacer />
                <TradeGraphHeader />
                <Spacer />
                <Line height={hp(0.1)} />
                <Spacer />
                <TradeGraph data={candleChartData} />
                <Spacer />
                <TradeGraphBelowHeader />
                <Spacer />
                <Line width={wp(100)} height={hp(0.1)} />
                <Spacer />
                <OrderBookHeader buttonPress={orderBookHeaderPress} setButtonPress={setOrderBookHeaderPress} />
                <Line width={wp(100)} height={hp(0.1)} />
                <Spacer />
                <PriceUSDT title1={'Price'} title2={`(${'USDT'})`} title3={'Amount'} title4={`(${'ETH'})`} />
                <Spacer />
                <Line width={wp(100)} height={hp(0.1)} />
                <FlatlistValues data={Amount} textColor={colors.green} />
                {/* <Spacer height={hp(5)}/> */}
            </ScrollView>
            <View style={{
                position: "absolute",
                paddingVertical: hp(2),
                bottom: 0,
                width: "100%",
                alignItems: "center",
                backgroundColor: colors.cardsBgColor
            }}>
                <BuySellButton onBuyPress={BuyPress} onSellPress={SellPress} />
            </View>
            <Portal>

                <FavoutiteBottomSheetComponnet ref={favouriteBottomSheetRef} />
            </Portal>



        </ExchangeMainContainer>
    )
}

export default TradeGraphScreen

