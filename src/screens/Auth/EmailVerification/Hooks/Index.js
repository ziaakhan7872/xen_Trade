import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EmailVerificationApi, ResendOtpApi } from '../../../../constants/Api/Index'
import { Routes } from '../../../../constants'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
// import { useSelector } from 'react-redux'

const useEmalVerification = (props) => {
  const previousScreenName = props?.route?.params?.screenName
  const emailVerificationBottomSheetRef = useRef(null)
  const { userData, email } = props?.route?.params
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [apiError, setApiError] = useState("")

  const id = userData?.id

  console.log("User data in EmailVerificationScreen::::::previousUserData", userData, "||||", email);

   const showToast = () => {
          Toast.show({
              type: 'verificationAlert',
              text1: 'VERIFICATION EMAIL SENT',
              text2: 'Verification code sent to',
              visibilityTime: 2000,
              autoHide: true,
              props: email
          })
      }

  const verifyEmail = async () => {
    try {
      if (!otpCode) {
        console.error("OTP code is required");
        return;
      }
      const payload = {
        emailOtpCode: Number(otpCode),
        userId: id
      }
      const response = await EmailVerificationApi(payload);
      console.log("Email verification response:", response);
      if (previousScreenName == 'forgotPassword') {
        props?.navigation.navigate(Routes.ChangePasswordForgot, { otpCode: otpCode, id: id })
      } else {
        emailVerificationBottomSheetRef?.current?.expand()
      }

    } catch (error) {
      console.error("Error during email verification:", error?.response);
      if (error?.response) {
        const status = error?.response?.status
        const message = error?.response?.data?.message
        console.log(error)
        if (status === 400) {
          setErrorMessage(message)
          return
        }
      }
      setErrorMessage("An error occurred during email verification. Please try again.");
    }
  }

  const resendOtp = async () => {
    try {

      const payload = {
        email: email,
        userId: id
      }

      const otpResponse = await ResendOtpApi(payload)
      console.log(otpResponse)
      showToast()
    }
    catch (error) {
      const status = error?.response?.status
      const message = error?.response?.data?.message
      console.log(error)
      if (status === 400) {
        setApiError(message)
      }
    }
  }
 

  return {
    emailVerificationBottomSheetRef,
    setOtpCode, otpCode,
    verifyEmail,
    errorMessage, setErrorMessage,
    resendOtp,
    previousScreenName
  }
}

export default useEmalVerification

