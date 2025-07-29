import { Dimensions, FlatList, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../constants/colors/index'
import { style } from './Style'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { AssetsComponent, BuyForm, BuySellRow, BuySellRowButton, CurrentOrderComponent, CurrentOrderHistoryHeader, CurrentSymbolHeader, ExchangeHeader, FavoutiteBottomSheetComponnet, FlatlistValues, OrderBook, PriceUSDT, SellForm, TradingTypeComponent } from './Component/Index'
import { UseExchange } from './Hooks/Index'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { Amount } from '../../../../utilities/dummyData'
import { appStyles } from '../../../../utilities/appStyles'
import { Portal } from 'react-native-portalize'
import Spacer from '../../../../components/Spacer'
import Line from '../../../../components/Liner'
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer'
import { Routes } from '../../../../constants'

const Exchangescreen = (props) => {
  const { 
    buySellButton, setBuySellButton, 
    buyerSlider, setBuyerSlider, sellSlider, setSelSlider, 
    currentOrderHistoryPress, setCurrentOrderHistoryPress, 
    currentOrder, 
    isCurrentSymbol, setIsCurrentSymbol, 
    tradngBottomSheetRef, 
    tradingType, setTradingType, 
    favouriteBottomSheetRef ,selectedData} = UseExchange(props)
  return (
    <ExchangeMainContainer>
      <View style={style.container}>
        <ExchangeHeader marketData={selectedData} onPressTradeGraph={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.TradeGraphScreen })} onpress={() => favouriteBottomSheetRef?.current?.expand()} />
        <Spacer />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={style.formandOrderBookView}>
            <View style={{ flex: 1, marginRight: wp(2), justifyContent: 'space-between' }}>
              <BuySellRowButton  buySellButton={buySellButton} setBuySellButton={setBuySellButton} />
              <Spacer height={hp(1)} />
              {buySellButton === "buy" ? (
                <BuyForm marketData={selectedData} tradingType={tradingType} onPressTradingType={() => tradngBottomSheetRef?.current?.expand()} value={buyerSlider} setValue={setBuyerSlider} />
              ) : (
                <SellForm tradingType={tradingType} onPressTradingType={() => tradngBottomSheetRef?.current?.expand()} value={sellSlider} setValue={setSelSlider} />
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
          <CurrentOrderHistoryHeader props={props} currentOrders={currentOrder} buttonPress={currentOrderHistoryPress} setButtonPress={setCurrentOrderHistoryPress} />
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
        <Portal>
          <TradingTypeComponent tradingTypePress={tradingType} setTradingTypePress={setTradingType} closeBottomSheet={() => tradngBottomSheetRef?.current?.close()} ref={tradngBottomSheetRef} />
          <FavoutiteBottomSheetComponnet ref={favouriteBottomSheetRef} />
        </Portal>
        <View >

        </View>

      </View>
    </ExchangeMainContainer>


  )
}

export default Exchangescreen

