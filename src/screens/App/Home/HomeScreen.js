import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AccountInfo, PortfilioOverView, RowButtonTab } from './Component/Index'
import HomeHeader from '../../../components/HomeHeader'
import { style } from './Style'
import Spacer from '../../../components/Spacer'
import useHome from './Hooks/Index'

const HomeScreen = () => {
  const {threeRowTabButtonPress,setThreeRowTabButtonPress}= useHome()
  return (
  <AuthMainContainer>
    <HomeHeader headerTitle={"DASHBOARD"}/>
    <View style={style.container}>
      <Spacer/>
    <AccountInfo/>
    <Spacer/>
    <RowButtonTab buttonPress={threeRowTabButtonPress} setButtonPress={setThreeRowTabButtonPress}/>
    <Spacer/>
    <PortfilioOverView/>
    </View>
  </AuthMainContainer>
  )
}

export default HomeScreen

