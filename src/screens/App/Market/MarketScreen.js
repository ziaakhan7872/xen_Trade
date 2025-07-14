import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import HomeHeader from '../../../components/HomeHeader'
import { Routes } from '../../../constants'

const MarketScreen = (props) => {
  return (
    <AuthMainContainer>
      <HomeHeader onpress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.MenuScreen })} headerTitle={"Markets"} />


    </AuthMainContainer>
  )
}

export default MarketScreen

const styles = StyleSheet.create({})