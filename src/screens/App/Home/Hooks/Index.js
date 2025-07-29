import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const useHome = (props) => {
  const { user, token, refreshToken } = useSelector((state) => state.user);
  console.log("User Data:", user);
  console.log("Token:", token);
  console.log("Refresh Token:", refreshToken);

    const [threeRowTabButtonPress,setThreeRowTabButtonPress] = useState("portfolio")
    const [portfolioButton,setPortfolioButton] = useState("weekly")
    const [watchListButtonPressed,setWatchListButtonPress]=useState("watchList")
    const [showNewsView,setShowNewsView] = useState(true)

  return {
    threeRowTabButtonPress,setThreeRowTabButtonPress,
    portfolioButton, setPortfolioButton,
    watchListButtonPressed,setWatchListButtonPress,
    showNewsView,setShowNewsView

  }
}

export default useHome

