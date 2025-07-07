import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

const useEmalVerification = () => {
    const emailVerificationBottomSheetRef = useRef(null)
    const navigation = useNavigation()

    const handleOpenVerification=()=>{
        console.log("open")
        emailVerificationBottomSheetRef?.current?.open()
    }
    const handleCloseVerification=()=>{
        console.log("open")
        emailVerificationBottomSheetRef?.current?.close()
    }
    const handeGoBack = ()=>{
        navigation.goBack()
    }
  return {
    emailVerificationBottomSheetRef,
    handleOpenVerification,
    handleCloseVerification,
    handeGoBack

  }
}

export default useEmalVerification

