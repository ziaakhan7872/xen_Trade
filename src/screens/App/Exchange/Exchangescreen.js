import { Dimensions, FlatList, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'
import { style } from './Style'
import { ResponsiveText } from '../../../components/ResponsiveText'
import { AssetsComponent, BuyForm, BuySellRow, BuySellRowButton, CurrentOrderComponent, CurrentOrderHistoryHeader, CurrentSymbolHeader, ExchangeHeader, FlatlistValues, OrderBook, PriceUSDT, SellForm } from './Component/Index'
import Spacer from '../../../components/Spacer'
import { UseExchange } from './Hooks/Index'
import { hp, wp } from '../../../components/ResponsiveComponent'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { ExchangeMainContainer } from '../../../components/ExchangeMainContainer'
import { Amount } from '../../../utilities/dummyData'
import { appStyles } from '../../../utilities'
import Line from '../../../components/Liner'

const Exchangescreen = (props) => {
  const { buySellButton, setBuySellButton, buyerSlider, setBuyerSlider, sellSlider, setSelSlider, currentOrderHistoryPress, setCurrentOrderHistoryPress, currentOrder, isCurrentSymbol, setIsCurrentSymbol } = UseExchange(props)
  return (
    <ExchangeMainContainer>
      <View style={style.container}>
        <ExchangeHeader />
        <Spacer />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={style.formandOrderBookView}>
            <View style={{ flex: 1, marginRight: wp(2), justifyContent: 'space-between' }}>
              <BuySellRowButton buySellButton={buySellButton} setBuySellButton={setBuySellButton} />
              <Spacer height={hp(1)} />
              {buySellButton === "buy" ? (
                <BuyForm value={buyerSlider} setValue={setBuyerSlider} />
              ) : (
                <SellForm value={sellSlider} setValue={setSelSlider} />
              )}
            </View>

            <View style={{ flex: 1, marginLeft: wp(2), justifyContent: 'space-between' }}>
              <PriceUSDT title1={'Price'} title2={`(${'USDT'})`} title3={'Amount'} title4={`(${'ETH'})`} />
              <Spacer height={hp(0.5)} />
              <FlatlistValues data={Amount} textColor={colors.green} />
              <Spacer height={hp(1)} />
              <Line height={hp(0.1)} />
              <Spacer height={hp(1)} />
              <View style={appStyles.row}>
                <ResponsiveText style={style.priceText}>2,048.15</ResponsiveText>
                <ResponsiveText style={style.priceText2}>≈$2,048.15</ResponsiveText>
              </View>
              <Spacer height={hp(1)} />
              <Line height={hp(0.1)} />
              <Spacer height={hp(1)} />
              <FlatlistValues data={Amount} />
            </View>
          </View>
          <Spacer />
          <CurrentOrderHistoryHeader currentOrders={currentOrder} buttonPress={currentOrderHistoryPress} setButtonPress={setCurrentOrderHistoryPress} />
          {/* <View style={{width:wp(90), alignSelf: 'center' }}> */}
          <Line height={hp(0.1)} width={Dimensions.get('window').width} />
          {/* </View> */}
          {currentOrderHistoryPress === "currentOrder" ? (
            <>
              <Spacer />

              <CurrentOrderComponent setIsCurrentSymbol={setIsCurrentSymbol} isCurrentSymbol={isCurrentSymbol} />
            </>


          ) : (
            <AssetsComponent />
          )}
        </ScrollView>


        <View >

        </View>

      </View>
    </ExchangeMainContainer>


  )
}

export default Exchangescreen

