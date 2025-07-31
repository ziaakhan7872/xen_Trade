import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EmailVerificationApi } from '../../../../constants/Api/Index'

const useEmalVerification = (props) => {
  const emailVerificationBottomSheetRef = useRef(null)
  const userData = props?.route?.params?.userData || {}
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  console.log("User data in EmailVerificationScreen:", userData);

  const verifyEmail = async () => {
    try {
      if (!otpCode) {
        console.error("OTP code is required");
        return;
      }
      const payload = {
        emailOtpCode:Number(otpCode),
        userId:userData?.id
      }
      const response = await EmailVerificationApi(payload);
      console.log("Email verification response:", response);
      emailVerificationBottomSheetRef?.current?.expand()


    } catch (error) {
      console.error("Error during email verification:", error);
      setErrorMessage("An error occurred during email verification. Please try again.");

    }
  }


  const handleOpenVerification = () => {
    console.log("open")
  }
  const handleCloseVerification = () => {
    console.log("open")
    emailVerificationBottomSheetRef?.current?.close()
  }
  const handeGoBack = () => {
    props?.navigation?.goBack()
  }
  return {
    emailVerificationBottomSheetRef,
    handleOpenVerification,
    handleCloseVerification,
    handeGoBack,
    setOtpCode, otpCode,
    verifyEmail,
    errorMessage, setErrorMessage

  }
}

export default useEmalVerification

