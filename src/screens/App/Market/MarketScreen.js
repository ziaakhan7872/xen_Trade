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
import { hp } from '../../../components/ResponsiveComponent'

const MarketScreen = (props) => {
  return (
    <AuthMainContainer>
      <HomeHeader onpress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.MenuScreen })} headerTitle={"MARKETS"} />
      <View style={style.container}>
        <Spacer/>
        <TouchableOpacity style={style.searchButton}>
          <HorizontalSpacer/>
          <EvilIcons name="search" color={colors.mainColor} size={25}/>
          <HorizontalSpacer/>
          <ResponsiveText style={style.searchText}>Search...</ResponsiveText>
        </TouchableOpacity>
        <Spacer/>
        <RenderMarketHeader/>
        <Spacer/>
        <Line height={hp(0.1)}/>
        <RenderMarketList/>
      </View>

    </AuthMainContainer>
  )
}

export default MarketScreen

