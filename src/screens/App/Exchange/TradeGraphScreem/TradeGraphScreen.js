import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer'
import UseTradeGraphScreen from './Hooks/Index'
import Line from '../../../../components/Liner'
import { hp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import { CoinPriceDetail, TradeGraph, TradeGraphHeader, TradeHeader } from './Component/Index'

const TradeGraphScreen = (props) => {
    const { starPress, setStarPress,candleChartData,setCandleChartData } = UseTradeGraphScreen(props)
    // const data = [
    //     { timestamp: 1625945400000, open: 0.15, high: 0.18, low: 0.12, close: 0.16 },
    //     { timestamp: 1625949000000, open: 0.16, high: 0.17, low: 0.14, close: 0.15 },
    //     { timestamp: 1625952600000, open: 0.16, high: 0.19, low: 0.15, close: 0.18 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },
    //     { timestamp: 1625956200000, open: 0.14, high: 0.17, low: 0.13, close: 0.15 },

    // ];


    return (
        <ExchangeMainContainer>
            <TradeHeader onBackPress={() => props?.navigation?.goBack()} setStarPress={setStarPress} starPress={starPress} />
            <Spacer />
            <Line height={hp(0.1)} />
            <CoinPriceDetail />
            <Spacer />
            <TradeGraphHeader />
            <Spacer />
            <Line height={hp(0.1)} />
            <Spacer />
            <TradeGraph data={candleChartData} />
        </ExchangeMainContainer>
    )
}

export default TradeGraphScreen

