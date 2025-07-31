import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const UseWithdrawDetail = (props) => {
  const { CryptoData, network,response } = props?.route?.params || {};

  
  return {
    CryptoData,network,response
  }
}


