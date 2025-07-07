import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const useEmalVerification = () => {
    const emailVerificationBottomSheetRef = useRef(null)

    const handleOpenVerification=()=>{
        console.log("open")
        emailVerificationBottomSheetRef?.current?.open()
    }
    const handleCloseVerification=()=>{
        console.log("open")
        emailVerificationBottomSheetRef?.current?.close()
    }
  return {
    emailVerificationBottomSheetRef,
    handleOpenVerification,
    handleCloseVerification

  }
}

export default useEmalVerification

