import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useHome = () => {
    const [threeRowTabButtonPress,setThreeRowTabButtonPress] = useState("portfolio")
  return {
    threeRowTabButtonPress,
    setThreeRowTabButtonPress

  }
}

export default useHome

