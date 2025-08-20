import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AccountInfo, AccountOverView, AllPairs, AllPars, BalanceOverView, LatestNewsComponent, PortfilioOverView, PortfilioOverViewHeader, RowButtonTab, WaitchListPairRow, WatchList } from './Component/Index'
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
import { useSocket } from '../../../Backend/SocketContextProvider/Socket'

const HomeScreen = (props) => {
  const {
    threeRowTabButtonPress, setThreeRowTabButtonPress,
    portfolioButton, setPortfolioButton,
    watchListButtonPressed, setWatchListButtonPress,
    showNewsView, setShowNewsView,
    marketList, MarketPress,handleMarketData
  } = useHome(props)

  return (
    <AuthMainContainer>
      <HomeHeader onpress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.MenuScreen })} headerTitle={"DASHBOARD"} />

      <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={style.container}
      nestedScrollEnabled
      >
        <Spacer height={hp(1)} />
        <AccountInfo />
        <Spacer height={hp(1)} />
        <RowButtonTab buttonPress={threeRowTabButtonPress} setButtonPress={setThreeRowTabButtonPress} />
        <Spacer height={hp(1)} />
        {threeRowTabButtonPress === "portfolio" && (
          <View style={[style.mainBox]}>
            <PortfilioOverViewHeader buttonPress={portfolioButton} setButtonPress={setPortfolioButton} />
            <PortfilioOverView />
          </View>
        )}
        {threeRowTabButtonPress === "balance" && (
          <BalanceOverView walletPress={() => props?.navigation?.navigate(Routes.WalletHome)} />
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
          onPressFirstButton={() => { props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.referrals }) }}
          onPressSecondButton={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto })}
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
              <TouchableOpacity onPress={() => setShowNewsView(false)}>
                <Entypo name="cross" size={22} color={colors.white} />
              </TouchableOpacity>
            </View>


            <Spacer height={hp(1)} />
            <LatestNewsComponent />
          </>
        )}
        <Spacer height={hp(1)} />
        <View style={style.mainBox}>
          <WaitchListPairRow 
          WatchListButtonPress={watchListButtonPressed} 
          setWatchListButtonPress={setWatchListButtonPress}
           />
          {watchListButtonPressed === "watchList" ? (
            <WatchList 
            WatchListButtonPress={watchListButtonPressed} 
            setWatchListButtonPress={setWatchListButtonPress} 
            />
          ) : (
            <AllPairs 
            MarketScreen={MarketPress} 
            marketData={marketList} 
            WatchListButtonPress={watchListButtonPressed} 
            setWatchListButtonPress={setWatchListButtonPress} 
            handleMarketData={handleMarketData}
            />

          )}
        </View>
                <Spacer height={hp(1)} />

      </ScrollView>
    </AuthMainContainer>

  )
}

export default HomeScreen

