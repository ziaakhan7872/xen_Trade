import React, { useRef, useState } from 'react'
import { EmailVerificationApi, ResendOtpApi, VerificationApi } from '../../../../Backend/Api/Index'
import { Routes } from '../../../../constants'
import Toast from 'react-native-toast-message'
import { channel } from 'diagnostics_channel'

const useEmalVerification = (props) => {
  const previousScreenName = props?.route?.params?.screenName
  const emailVerificationBottomSheetRef = useRef(null)
  const { userData, email } = props?.route?.params
  // const userData = props?.route
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [apiError, setApiError] = useState("")


  console.log("User data in EmailVerificationScreen::::::previousUserData", userData?.id, "||||", email);

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
        channel: "email",
        operation: "signup",
        otpCode: Number(otpCode),
        userId: userData?.id
      }
      const response = await VerificationApi(payload);
      console.log("Email verification response:", response);
      if (response?.status == 200) {
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
        channel: "email",
        email: email,
        operation: "signup",
        userId: userData?.id
      }

      const otpResponse = await ResendOtpApi(payload)
      console.log(otpResponse)
      showToast()
    }
    catch (error) {
      const status = error?.response?.status
      const message = error?.response?.data?.message
      console.log(error?.response)
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

