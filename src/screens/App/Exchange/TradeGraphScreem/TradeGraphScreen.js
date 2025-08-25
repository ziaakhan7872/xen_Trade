import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Suspense } from 'react'
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer'
import UseTradeGraphScreen from './Hooks/Index'
import Line from '../../../../components/Liner'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import { BuySellButton, CoinPriceDetail, ExchangeInnerHeader, FavoutiteBottomSheetComponnet, OrderBookHeader, PriceUSDT, TradeGraphBelowHeader, TradeGraphHeader, TradeHeader } from './Component/Index'
import { Amount } from '../../../../utilities/dummyData'
import { colors } from '../../../../constants'
import RowButton from '../../../../components/RowButton'
import { Portal } from 'react-native-portalize'
import { OrderBookSkeleton } from '../../../../components/SkeletonLoader'


const TradeGraph = React.lazy(() =>
    import('./Component/Index').then(m => ({ default: m.TradeGraph }))
);

const FlatlistValues = React.lazy(() =>
    import('./Component/Index').then(m => ({ default: m.FlatlistValues }))
);

const TradeGraphScreen = (props) => {
    const {
        starPress, setStarPress,
        candleChartData, setCandleChartData,
        orderBookHeaderPress, setOrderBookHeaderPress,
        favouriteBottomSheetRef, selectedData,
        BuyPress, SellPress, pair, searchText, setSearchText, setSelectedData,
        currentCoinPrice, timeInterval, setTimeInterval
    } = UseTradeGraphScreen(props)


    return (
        <ExchangeMainContainer>
            <TradeHeader marketData={selectedData} onpress={() => favouriteBottomSheetRef?.current?.open()} onBackPress={() => props?.navigation?.goBack()} setStarPress={setStarPress} starPress={starPress} />
            <ScrollView Dat contentContainerStyle={{ paddingBottom: hp(6) }}>
                <Spacer />
                <Line height={hp(0.1)} />
                <CoinPriceDetail
                    coinPrice={currentCoinPrice} />
                <Spacer />
                <TradeGraphHeader timeInterval={timeInterval} setTimeInterval={setTimeInterval} />
                <Spacer />
                <Line height={hp(0.1)} />
                <Spacer />
                <ExchangeInnerHeader
                    marketData={selectedData} />
                <Suspense fallback={<ActivityIndicator size="large" color={colors.white} style={{ marginTop: wp(4) }} />}>
                    <TradeGraph data={candleChartData} />
                </Suspense>
                <Spacer />
                <TradeGraphBelowHeader />
                <Spacer />
                <Line width={wp(100)} height={hp(0.1)} />
                <Spacer />
                <OrderBookHeader
                    buttonPress={orderBookHeaderPress}
                    setButtonPress={setOrderBookHeaderPress} />
                <Line width={wp(100)} height={hp(0.1)} />
                <Spacer />
                <PriceUSDT title1={'Price'} title2={`(${'USDT'})`} title3={'Amount'} title4={`(${'ETH'})`} />
                <Spacer />
                <Line width={wp(100)} height={hp(0.1)} />
                <Suspense fallback={<OrderBookSkeleton />}>

                    <FlatlistValues data={Amount} textColor={colors.green} />
                </Suspense>
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

                <FavoutiteBottomSheetComponnet
                    value={searchText}
                    onchangeText={setSearchText}
                    marketData={pair}
                    ref={favouriteBottomSheetRef}
                    onPress={(item) => {
                        console.log(item)
                        setSelectedData(item)
                        favouriteBottomSheetRef?.current?.close()
                    }}
                />
            </Portal>



        </ExchangeMainContainer>
    )
}

export default TradeGraphScreen

