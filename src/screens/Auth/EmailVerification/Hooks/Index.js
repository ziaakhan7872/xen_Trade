import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EmailVerificationApi, ResendOtpApi } from '../../../../constants/Api/Index'
import { Routes } from '../../../../constants'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'

const useEmalVerification = (props) => {
  const userData = useSelector((state) => state.user)
  const previousScreenName = props?.route?.params?.screenName
  const emailVerificationBottomSheetRef = useRef(null)
  // const previousUserData = props?.route?.params?.userData || ''
  // const id = props?.route?.params?.id
  const email = props?.route?.params?.email
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [apiError, setApiError] = useState("")

  const id = userData?.user?.id

  console.log("User data in EmailVerificationScreen::::::previousUserData", id, "||||", email);

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

      if (otpResponse?.status == 200) {
        props?.navigation?.navigate?.(Routes.ChangePasswordForgot)
      }
    }
    catch (error) {
      if (error.name === 'ValidationError') {
        console.log("Validation Error:", error.message);
        setApiError(error?.message)
      }
      const status = error?.response?.status
      const message = error?.response?.data?.message
      console.log(error)
      if (status === 400) {
        setApiError(message)
      }
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
    errorMessage, setErrorMessage,
    resendOtp,
    previousScreenName
  }
}

export default useEmalVerification

