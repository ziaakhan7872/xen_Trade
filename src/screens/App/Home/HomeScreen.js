import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AccountInfo, AccountOverView, BalanceOverView, LatestNewsComponent, PortfilioOverView, RowButtonTab, WatchList } from './Component/Index'
import HomeHeader from '../../../components/HomeHeader'
import { style } from './Style'
import Spacer, { HorizontalSpacer } from '../../../components/Spacer'
import useHome from './Hooks/Index'
import { hp, wp } from '../../../components/ResponsiveComponent'
import RowButton from '../../../components/RowButton'
import { colors, Routes } from '../../../constants'
import images from '../../../images'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Entypo from "react-native-vector-icons/Entypo"

const HomeScreen = (props) => {
  const { threeRowTabButtonPress, setThreeRowTabButtonPress, portfolioButton, setPortfolioButton, watchListButtonPressed, setWatchListButtonPress, showNewsView, setShowNewsView } = useHome(props)
  return (
    <AuthMainContainer>
      <HomeHeader onpress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.MenuScreen })} headerTitle={"DASHBOARD"} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
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
          buttonWidth={wp(44)}
          borderRadius={wp(3)}
          image1={<Image source={images.addressSettingIcon} style={style.imageStyling} />}
          image2={<Image source={images.Deposit} style={style.imageStyling} />}
          label1={<ResponsiveText style={style.text1}>Referral</ResponsiveText>}
          label2={<ResponsiveText style={style.text1}>Deposit</ResponsiveText>}

        />
        <Spacer height={hp(1)} />
        {showNewsView && (
          <>
         
          <View style={style.LatestNewsStyling}>
            <View style={{ flexDirection: "row" }}>
              <Image source={images.Document} style={style.imageStyling} />
              <HorizontalSpacer />
              <ResponsiveText style={style.latesteNewsTitle}>LATEST NEWS</ResponsiveText>
            </View>
            <TouchableOpacity onPress={()=>setShowNewsView(false)}>
              <Entypo name="cross" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>
        

        <Spacer height={hp(1)} />
        <LatestNewsComponent />
         </>
        )}
        <Spacer height={hp(1)} />
        <WatchList WatchListButtonPress={watchListButtonPressed} setWatchListButtonPress={setWatchListButtonPress} />
      </ScrollView>
    </AuthMainContainer>

  )
}

export default HomeScreen

