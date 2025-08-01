import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPairApi } from '../../../../constants/Api/Index';
import { Routes } from '../../../../constants';

const useHome = (props) => {
  const { user, token, refreshToken } = useSelector((state) => state.user);


  const [threeRowTabButtonPress, setThreeRowTabButtonPress] = useState("portfolio")
  const [portfolioButton, setPortfolioButton] = useState("weekly")
  const [watchListButtonPressed, setWatchListButtonPress] = useState("watchList")
  const [showNewsView, setShowNewsView] = useState(true)
  const [marketList, setMarketList] = useState([]);

   useEffect(() => {
        getMarketData();
    }, [])

    const MarketPress = async(item) => {
        await AsyncStorage.setItem("selectedData", JSON.stringify(item))
        props?.navigation.navigate(Routes.AppNavigator,{ screen: Routes.TradeGraphScreen, params: { selectedData: item } })
    }

    const getMarketData = async () => {
        try {
            const response = await getPairApi(1,20);
            setMarketList(response?.data?.data)
            console.log("Market data fetched successfully:", response);
        } catch (error) {
            console.error("Error fetching market data:", error);
        }
    }



  return {
    threeRowTabButtonPress, setThreeRowTabButtonPress,
    portfolioButton, setPortfolioButton,
    watchListButtonPressed, setWatchListButtonPress,
    showNewsView, setShowNewsView,
    marketList,        MarketPress,


  }
}

export default useHome

