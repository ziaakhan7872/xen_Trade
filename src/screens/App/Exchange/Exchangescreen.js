import { SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'
import { style } from './Style'
import { ResponsiveText } from '../../../components/ResponsiveText'
import { BuyForm, BuySellRow, BuySellRowButton, ExchangeHeader, OrderBook, SellForm } from './Component/Index'
import Spacer from '../../../components/Spacer'
import { UseExchange } from './Hooks/Index'
import { hp } from '../../../components/ResponsiveComponent'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { ExchangeMainContainer } from '../../../components/ExchangeMainContainer'

const Exchangescreen = (props) => {
  const { buySellButton, setBuySellButton, buyerSlider, setBuyerSlider,sellSlider,setSelSlider } = UseExchange(props)
  return (
    <ExchangeMainContainer>
      <View style={style.container}>
        <ExchangeHeader />
        <Spacer />
        <View style={style.formandOrderBookView}>
          <View>
            <BuySellRowButton buySellButton={buySellButton} setBuySellButton={setBuySellButton} />
            <Spacer height={hp(1)} />
            {buySellButton==="buy"?(
            <BuyForm value={buyerSlider} setValue={setBuyerSlider} />
            ):(
              <SellForm value={sellSlider} setValue={setSelSlider}/>
            )}
          </View>
          <View>
          <OrderBook />
          </View>
        </View>
      </View>
    </ExchangeMainContainer>


  )
}

export default Exchangescreen

