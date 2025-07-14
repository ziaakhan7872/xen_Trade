import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AccountInfo, AccountOverView, BalanceOverView, PortfilioOverView, RowButtonTab } from './Component/Index'
import HomeHeader from '../../../components/HomeHeader'
import { style } from './Style'
import Spacer from '../../../components/Spacer'
import useHome from './Hooks/Index'
import { hp, wp } from '../../../components/ResponsiveComponent'
import RowButton from '../../../components/RowButton'
import { colors } from '../../../constants'
import images from '../../../images'
import { ResponsiveText } from '../../../components/ResponsiveText'

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
        <RowButton
          buttonRowWidth={wp(90)}
          buttonBackGroundColor={colors.searchBar}
          buttonWidth={wp(42)}
          borderRadius={wp(3)}
          image1={<Image source={images.Refeeral} style={style.imageStyling} />}
          image2={<Image source={images.Deposit} style={style.imageStyling} />}
          label1={<ResponsiveText style={style.text1}>Referral</ResponsiveText>}
        />

      </View>
    </AuthMainContainer>
  )
}

export default HomeScreen

