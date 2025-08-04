import { useState } from 'react'
import { LoginVerificationApi } from '../../../../constants/Api/Index'
import { Routes } from '../../../../constants'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../redux/slices/userSlice'
import Toast from 'react-native-toast-message'

const UseLoginVerification = (props) => {
  const userData = props?.route?.params?.userData || {}
  const userEmail = props?.route?.params?.userEmail || {}

  const dispatch = useDispatch()
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [code, setCode] = useState("")

  const showToast = () => {
    Toast.show({
      type: 'verificationAlert',
      text1: 'VERIFICATION EMAIL SENT',
      text2: 'Verification code sent to',
      visibilityTime: 2500,
      autoHide: true,
      props: userEmail
    })
  }

  const verifyEmail = async () => {
    try {
      if (!code) {
        console.error("OTP code is required");
        return;
      }
      const payload = {
        emailOtpCode: Number(code),
        rememberMe: true,
        userId: userData?.id
      }
      const response = await LoginVerificationApi(payload);
      console.log("Login verification response:", response);
      dispatch(setUser({
        user: response?.data,
        token: response?.data?.accessToken,
        refreshToken: response?.data?.refreshToken
      }));

      if (response?.status === 200) {
        console.log("Entered in IF statement");
        props?.navigation?.navigate(Routes.BottomNavigator);
      }

    } catch (error) {
      console.error("Error during Login verification:", error);
      setErrorMessage("An error occurred during Login verification. Please try again.");

    }
  }

  const handeGoBack = () => {
    props?.navigation?.goBack()
  }

  return {
    handeGoBack,
    setOtpCode, otpCode,
    verifyEmail,
    errorMessage, setErrorMessage,
    showToast,
    code, setCode,
    userEmail
  }
}

export default UseLoginVerification

