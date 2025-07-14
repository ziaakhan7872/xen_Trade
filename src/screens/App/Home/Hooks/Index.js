import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useHome = (props) => {
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

