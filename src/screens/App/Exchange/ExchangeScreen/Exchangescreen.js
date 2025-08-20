import { Dimensions, ScrollView, View } from 'react-native';
import React, { Suspense, useCallback } from 'react';
import { colors } from '../../../../constants/colors';
import { style } from './Style';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { UseExchange } from './Hooks/Index';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { Amount } from '../../../../utilities/dummyData';
import { appStyles } from '../../../../utilities/appStyles';
import { Portal } from 'react-native-portalize';
import Spacer from '../../../../components/Spacer';
import Line from '../../../../components/Liner';
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer';
import { Routes } from '../../../../constants';
import { BuySellSkeleton, OrderBookSkeleton, OrdersSkeleton } from '../../../../components/SkeletonLoader';

import { BuyOrder, BuySellRowButton, CurrentOrderHistoryHeader, ExchangeHeader, FlatlistValues, PriceUSDT, SellOrder } from './Component/Index';

const BuyForm = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.BuyForm }))
);
const SellForm = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.SellForm }))
);
const CurrentOrderComponent = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.CurrentOrderComponent }))
);
const AssetsComponent = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.AssetsComponent }))
);
const TradingTypeComponent = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.TradingTypeComponent }))
);
const FavoutiteBottomSheetComponnet = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.FavoutiteBottomSheetComponnet }))
);



const Exchangescreen = (props) => {
  const {
    buySellButton, setBuySellButton,
    buyerSlider, setBuyerSlider, sellSlider, setSelSlider,
    currentOrderHistoryPress, setCurrentOrderHistoryPress,
    currentOrder,
    isCurrentSymbol, setIsCurrentSymbol,
    tradngBottomSheetRef,
    tradingType, setTradingType,
    favouriteBottomSheetRef, selectedData,
    availableBaseBalance, availableQuoteBalance,
    price, setPrice,
    quantity, setQuantity, discreaseQuantity, addQuantity,
    cureentCoinPrice, setCurrentCoinPrice,
    handleBuyPriceChange, handleBuyQuantityChange, handleBuySliderChange,
    buyOrder, orderBook, pairs, searchText, setSearchText,setSelectedData
  } = UseExchange(props)


  return (
    <ExchangeMainContainer>
      <View style={style.container}>
        <ExchangeHeader
          marketData={selectedData}
          onPressTradeGraph={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.TradeGraphScreen })}
          onpress={() => favouriteBottomSheetRef?.current?.open()}
        />

        <Spacer />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={style.formandOrderBookView}>
            <View style={{ flex: 1, marginRight: wp(2), justifyContent: 'space-between' }}>
              <>
                <Suspense fallback={<BuySellSkeleton />}>

                  <BuySellRowButton
                    buySellButton={buySellButton}
                    setBuySellButton={setBuySellButton}
                  />
                  <Spacer height={hp(1)} />
                  {buySellButton === "buy" ? (
                    <BuyForm
                      handleBuyPriceChange={handleBuyPriceChange}
                      handleBuyQuantityChange={handleBuyQuantityChange}
                      handleBuySliderChange={handleBuySliderChange}
                      Price={price}
                      setPrice={setPrice}
                      currentCoinPrice={cureentCoinPrice}
                      setCurrentCoinPrice={setCurrentCoinPrice}
                      addQuantity={addQuantity}
                      dicreaseQuantity={discreaseQuantity}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      QuoteBalance={availableQuoteBalance}
                      marketData={selectedData}
                      tradingType={tradingType}
                      onPressTradingType={() => tradngBottomSheetRef?.current?.open()}
                      value={buyerSlider}
                      setValue={setBuyerSlider}
                      buyOrder={buyOrder}
                    />

                  ) : (
                    <SellForm
                      marketData={selectedData}
                      tradingType={tradingType}
                      onPressTradingType={() => tradngBottomSheetRef?.current?.open()}
                      value={sellSlider}
                      setValue={setSelSlider}
                    />
                  )}
                </Suspense>
              </>

            </View>

            <View style={{ flex: 1, marginLeft: wp(2), justifyContent: 'space-between' }}>
              <>
                <Suspense fallback={<OrderBookSkeleton />}>

                  <PriceUSDT title1={'Price'} title2={`(${'USDT'})`} title3={'Amount'} title4={`(${'ETH'})`} />
                  <Spacer height={hp(0.5)} />
                  <BuyOrder data={orderBook} textColor={colors.green} />
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
                  <SellOrder data={orderBook} />
                </Suspense>
              </>


            </View>
          </View>
          <Spacer />
          <>
            <Suspense fallback={<OrdersSkeleton />}>

              <CurrentOrderHistoryHeader
                props={props}
                currentOrders={currentOrder}
                buttonPress={currentOrderHistoryPress}
                setButtonPress={setCurrentOrderHistoryPress}
              />
              <Line height={hp(0.1)} width={Dimensions.get('window').width} />
              {currentOrderHistoryPress === "currentOrder" ? (
                <>
                  <Spacer />
                  <CurrentOrderComponent
                    setIsCurrentSymbol={setIsCurrentSymbol}
                    isCurrentSymbol={isCurrentSymbol}
                  />
                </>


              ) : (
                <AssetsComponent />
              )}
            </Suspense>
          </>


        </ScrollView>
        <Portal>
          <TradingTypeComponent
            tradingTypePress={tradingType}
            setTradingTypePress={setTradingType}
            closeBottomSheet={() => tradngBottomSheetRef?.current?.close()}
            ref={tradngBottomSheetRef}
          />
          <FavoutiteBottomSheetComponnet
            value={searchText}
            onchangeText={setSearchText}
            marketData={pairs}
            ref={favouriteBottomSheetRef} 
            onPress={(item)=>{
              console.log(item)
              setSelectedData(item)
              favouriteBottomSheetRef?.current?.close()
            }}
            />
        </Portal>
        <View >

        </View>

      </View>
    </ExchangeMainContainer>


  )
}

export default React.memo(Exchangescreen);
