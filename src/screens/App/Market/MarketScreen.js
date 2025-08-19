import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import HomeHeader from '../../../components/HomeHeader'
import { colors, Routes } from '../../../constants'
import { style } from './Style'
import Spacer, { HorizontalSpacer } from '../../../components/Spacer'
import { ResponsiveText } from '../../../components/ResponsiveText'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { RenderMarketHeader, RenderMarketList } from './Component/Index'
import Line from '../../../components/Liner'
import { hp, wp } from '../../../components/ResponsiveComponent'
import InputText from '../../../components/InputText'
import { UseMarket } from './Hooks/Index'
import { SkeletionLoader } from '../../../components/SkeletonLoader'

const MarketScreen = (props) => {
  const { marketList, setMarketList, MarketPress, searchText, setSearchText, loading , handleMarketData} = UseMarket(props)

  return (
    <AuthMainContainer>
      <HomeHeader onpress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.MenuScreen })} headerTitle={"MARKETS"} />
      <View style={style.container}>
        <Spacer />
        <InputText
          rightIcon={true}
          paddingLeft={wp(18)}
          placeholderTextColor={colors.iconColor}
          placeholder={"Search.."}
          value={searchText}
          onChangeText={setSearchText}
          width={wp(90)}

        />
        <Spacer />
        <RenderMarketHeader />
        <Spacer />
        <Line height={hp(0.1)} />
        {loading ? <SkeletionLoader rows={6} /> : (
          <RenderMarketList handleMarketData={handleMarketData} MarketScreen={MarketPress} marketData={marketList} />
        )}
      </View>

    </AuthMainContainer>
  )
}

export default MarketScreen

