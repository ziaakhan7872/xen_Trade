import { Dimensions, ScrollView, View } from 'react-native';
import React, { Suspense } from 'react';
import { style } from './Style';
import { UseExchange } from './Hooks/Index';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { Portal } from 'react-native-portalize';
import Spacer from '../../../../components/Spacer';
import Line from '../../../../components/Liner';
import { ExchangeMainContainer } from '../../../../components/ExchangeMainContainer';
import { Routes } from '../../../../constants';
import { BuySellSkeleton, OrderBookSkeleton, OrdersSkeleton } from '../../../../components/SkeletonLoader';
import { BuySellRowButton, CurrentOderComponentHeader, CurrentOrderHistoryHeader, ExchangeHeader, FlatlistValues, TradingTypeComponent } from './Component/Index';
import { preloadableLazy } from '../../../../CommonHelperFunction/PreloadableLazy';
import {
  BuyForm,
  SellForm,
  CurrentOrderComponent,
  AssetsComponent,
  FavoutiteBottomSheetComponnet,
  OrderBookForm
} from './Component/LazyComponnet';




const Exchangescreen = (props) => {
  const {
    buySellButton, setBuySellButton,
    buyerSlider, setBuyerSlider, sellSlider, setSelSlider,
    currentOrderHistoryPress, setCurrentOrderHistoryPress,
    currentOrder,
    tradngBottomSheetRef,
    tradingType, setTradingType,
    favouriteBottomSheetRef, selectedData,
    availableQuoteBalance,
    price,
    quantity, setQuantity, discreaseQuantity, addQuantity,
    cureentCoinPrice,
    HandlePriceChange, HandleQuantityChangeWrapper, HandleSliderChange,
    buyOrder, orderBook, pairs, searchText, setSearchText,
    DeleteOrder,isCurrentSymbol,setIsCurrentSymbol,setSelectedData,
    sellOrder,sellPrice,sellQuantity,
    availableBaseBalance,setSellQuantity,newCurrentCoinPrice,
    HandleCoinPriceChange,addCoinPrice,dicreaseCoinPrice
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
                      handleBuyPriceChange={HandlePriceChange}
                      handleBuyQuantityChange={HandleQuantityChangeWrapper}
                      handleBuySliderChange={HandleSliderChange}
                      Price={price}
                      currentCoinPrice={cureentCoinPrice}
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
                      handleBuyCoinPriceChange={HandleCoinPriceChange}
                      addCoinPrice={addCoinPrice}
                      dicreaseCoinPrice={dicreaseCoinPrice}
                    />

                  ) : (
                    <SellForm
                      marketData={selectedData}
                      tradingType={tradingType}
                      onPressTradingtype={() => tradngBottomSheetRef?.current?.open()}
                      value={sellSlider}
                      setValue={setSelSlider}
                      currentCoinPrice={cureentCoinPrice}
                      HandleCoinPriceChange={HandleCoinPriceChange}
                      Price={sellPrice}
                      quantity={sellQuantity}
                      setQuantity={setSellQuantity}
                      addQuantity={addQuantity}
                      dicreaseQuantity={discreaseQuantity}
                      BaseBalance={availableBaseBalance}
                      handleSellPriceChange={HandlePriceChange}
                      handleSellQuantityChange={HandleQuantityChangeWrapper}
                      handleSellSliderChange={HandleSliderChange}
                      addCoinPrice={addCoinPrice}
                      dicreaseCoinPrice={dicreaseCoinPrice}
                      onPress={sellOrder}
                    />
                  )}
                </Suspense>
              </>
            </View>

            <View style={{ flex: 1, marginLeft: wp(2), justifyContent: 'space-between' }}>
              <>
                <Suspense fallback={<OrderBookSkeleton />}>
                  <OrderBookForm
                    orderBook={orderBook}
                    cureentCoinPrice={newCurrentCoinPrice}
                    marketData={selectedData}
                  />
                </Suspense>
              </>
            </View>
          </View>

          <Spacer />

          <>
            <Suspense fallback={<OrdersSkeleton />}>

              <CurrentOrderHistoryHeader
                props={props}
                currentOrder={currentOrder?.filter((Order) =>
                  (Order?.status === "new" || Order?.status === "partially_filled")
                )}
                buttonPress={currentOrderHistoryPress}
                setButtonPress={setCurrentOrderHistoryPress}
              />
              <Line height={hp(0.1)} width={Dimensions.get('window').width} />
              <Spacer />
              <CurrentOderComponentHeader
                isCurrentSymbol={isCurrentSymbol}
                setIsCurrentSymbol={setIsCurrentSymbol}
                CancelAllPress={DeleteOrder}

              />
              {currentOrderHistoryPress === "currentOrder" ? (
                <>
                  <Spacer height={hp(1)} />
                  <CurrentOrderComponent
                    currentOrder={currentOrder?.filter((Order) =>
                      (Order?.status === "new" || Order?.status === "partially_filled") && (isCurrentSymbol ? Order?.symbol === selectedData?.symbol : true)
                    )}
                    OnpressDelete={DeleteOrder}
                  // setIsCurrentSymbol={setIsCurrentSymbol}
                  // isCurrentSymbol={isCurrentSymbol}
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
