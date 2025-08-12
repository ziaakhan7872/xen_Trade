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
  const [Page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    getMarketData();
  }, [])

  const MarketPress = async (item) => {
    await AsyncStorage.setItem("selectedData", JSON.stringify(item))
    props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.TradeGraphScreen, params: { selectedData: item } })
  }

  const getMarketData = async (newPage) => {
    if (hasMore) {
      try {
        const response = await getPairApi(newPage, 20);
        const marketData = response?.data?.data
        if (marketData.length > 0) {
          setMarketList(prevFavorites => [...prevFavorites, ...marketData]);
        }
        setPage(newPage)
        setHasMore(marketData?.length === 20)
        console.log("Market data fetched successfully:", response);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    }

  }
  const handleMarketData = () => {
    if (Page) {
      getMarketData(Page + 1);
    }
  };



  return {
    threeRowTabButtonPress, setThreeRowTabButtonPress,
    portfolioButton, setPortfolioButton,
    watchListButtonPressed, setWatchListButtonPress,
    showNewsView, setShowNewsView,
    marketList, MarketPress, handleMarketData


  }
}

export default useHome

