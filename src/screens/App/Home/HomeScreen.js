import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AccountInfo, AccountOverView, BalanceOverView, PortfilioOverView, RowButtonTab } from './Component/Index'
import HomeHeader from '../../../components/HomeHeader'
import { style } from './Style'
import Spacer from '../../../components/Spacer'
import useHome from './Hooks/Index'
import { hp } from '../../../components/ResponsiveComponent'

const HomeScreen = () => {
  const { threeRowTabButtonPress, setThreeRowTabButtonPress, portfolioButton, setPortfolioButton } = useHome()
  return (
    <AuthMainContainer>
      <HomeHeader headerTitle={"DASHBOARD"} />
      <View style={style.container}>
        <Spacer height={hp(1)} />
        <AccountInfo />
        <Spacer height={hp(1)} />
        <RowButtonTab buttonPress={threeRowTabButtonPress} setButtonPress={setThreeRowTabButtonPress} />
        <Spacer height={hp(1)} />
        {threeRowTabButtonPress === "portfolio" && (
          <PortfilioOverView buttonPress={portfolioButton} setButtonPress={setPortfolioButton} />
        )}
        {threeRowTabButtonPress === "balance" && (
          <BalanceOverView />
        )}
        {threeRowTabButtonPress === "account" && (
          <AccountOverView />
        )}
        <Spacer height={hp(1)} />


      </View>
    </AuthMainContainer>
  )
}

export default HomeScreen

