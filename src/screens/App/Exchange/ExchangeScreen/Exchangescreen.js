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

import {TradingTypeComponent, BuyOrder, BuySellRowButton, CurrentOderComponentHeader, CurrentOrderHistoryHeader, ExchangeHeader, FlatlistValues, PriceUSDT, SellOrder } from './Component/Index';

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
const FavoutiteBottomSheetComponnet = React.lazy(() =>
  import('./Component/Index').then(m => ({ default: m.FavoutiteBottomSheetComponnet }))
);



const Exchangescreen = (props) => {
  const {
    buySellButton, setBuySellButton,
    buyerSlider, sellSlider,
    currentOrderHistoryPress, setCurrentOrderHistoryPress,
    currentOrder,
    isCurrentSymbol, setIsCurrentSymbol,
    tradngBottomSheetRef,
    tradingType, setTradingType,
    favouriteBottomSheetRef, selectedData,
    availableBaseBalance, availableQuoteBalance,
    price, sellPrice,
    quantity, discreaseQuantity, addQuantity,
    sellQuantity, discreaseSellQuantity, addSellQuantity,
    handleSellPriceChange, handleSellQuantityChange, handleSellSliderChange,
    cureentCoinPrice, setCurrentCoinPrice,
    handleBuyPriceChange, handleBuyQuantityChange, handleBuySliderChange,
    buyOrder, orderBook, pairs, searchText, setSearchText, setSelectedData,
    errorMessage, loading, newCurrentCoinPrice,setNewCurrentCoinPrice,
    sellOrder,DeleteOrder
  } = UseExchange(props)


  return (
    <ExchangeMainContainer>
      <View style={style.container}>
        <ExchangeHeader
          marketData={selectedData}
          onPressTradeGraph={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.TradeGraphScreen,params: { selectedData: selectedData } })}
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
                      currentCoinPrice={newCurrentCoinPrice}
                      setCurrentCoinPrice={setNewCurrentCoinPrice}
                      addQuantity={addQuantity}
                      dicreaseQuantity={discreaseQuantity}
                      quantity={quantity}
                      QuoteBalance={availableQuoteBalance}
                      marketData={selectedData}
                      tradingType={tradingType}
                      onPressTradingType={() => tradngBottomSheetRef?.current?.open()}
                      value={buyerSlider}
                      buyOrder={buyOrder}
                      errorMessage={errorMessage}
                      loading={loading}
                    />

                  ) : (
                    <SellForm
                      handleSellPriceChange={handleSellPriceChange}
                      handleSellQuantityChange={handleSellQuantityChange}
                      handleSellSliderChange={handleSellSliderChange}
                      currentCoinPrice={newCurrentCoinPrice}
                      setCurrentCoinPrice={setNewCurrentCoinPrice}
                      marketData={selectedData}
                      tradingType={tradingType}
                      onPressTradingType={() => tradngBottomSheetRef?.current?.open()}
                      value={sellSlider}
                      BaseBalance={availableBaseBalance}
                      quantity={sellQuantity}
                      addQuantity={addSellQuantity}
                      dicreaseQuantity={discreaseSellQuantity}
                      Price={sellPrice}
                      onPress={sellOrder}
                      errorMessage={errorMessage}
                      loading={loading}



                    />
                  )}
                </Suspense>
              </>

            </View>

            <View style={{ flex: 1, marginLeft: wp(2), justifyContent: 'space-between' }}>
              <>
                <Suspense fallback={<OrderBookSkeleton />}>

                  <PriceUSDT title1={'Price'} title2={`(${selectedData?.quote?.toUpperCase()})`} title3={'Amount'} title4={selectedData?.base.toUpperCase()} />
                  <Spacer height={hp(0.5)} />
                  <BuyOrder marketData={selectedData} data={orderBook} textColor={colors.green} />
                  <Spacer height={hp(1)} />
                  <Line height={hp(0.1)} />
                  <Spacer height={hp(1)} />
                  <View style={appStyles.row}>
                    <ResponsiveText style={style.priceText}>{cureentCoinPrice}</ResponsiveText>
                    <ResponsiveText style={style.priceText2}>≈${cureentCoinPrice}</ResponsiveText>
                  </View>
                  <Spacer height={hp(1)} />
                  <Line height={hp(0.1)} />
                  <Spacer height={hp(1)} />
                  <SellOrder marketData={selectedData} data={orderBook} />
                </Suspense>
              </>


            </View>
          </View>
          <Spacer />
          <>
            <Suspense fallback={<OrdersSkeleton />}>

              <CurrentOrderHistoryHeader
                props={props}
                currentOrders={currentOrder?.items?.filter((order)=>order?.status === "new" || order?.status ==="partially_filled")}
                buttonPress={currentOrderHistoryPress}
                setButtonPress={setCurrentOrderHistoryPress}
              />
              <Line height={hp(0.1)} width={Dimensions.get('window').width} />
              {currentOrderHistoryPress === "currentOrder" ? (
                <>
                  <Spacer />
                  <CurrentOderComponentHeader
                    setIsCurrentSymbol={setIsCurrentSymbol}
                    isCurrentSymbol={isCurrentSymbol}
                    CancelAllPress={DeleteOrder}
                  />
                  <CurrentOrderComponent
                    orders={
                      isCurrentSymbol && selectedData?.symbol
                        ? currentOrder?.items?.filter((order) => order.symbol === selectedData.symbol && order?.status ==="new" || order?.status ==="partially_filled") 
                        : currentOrder?.items?.filter ((order)=>order?.status==="new" ||  order?.status==="partially_filled")
                    }
                    OnpressDelete={DeleteOrder}
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
            onPress={(item) => {
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
