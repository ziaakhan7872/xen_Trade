import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useHome = () => {
    const [threeRowTabButtonPress,setThreeRowTabButtonPress] = useState("portfolio")
    const [portfolioButton,setPortfolioButton] = useState("weekly")

  return {
    threeRowTabButtonPress,
    setThreeRowTabButtonPress,
    portfolioButton,
    setPortfolioButton

  }
}

export default useHome

