import { useState } from 'react'
import { LoginVerificationApi } from '../../../../constants/Api/Index'
import { Routes } from '../../../../constants'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../redux/slices/userSlice'

const UseLoginVerification = (props) => {
  const userData = props?.route?.params?.userData || {}
  const dispatch = useDispatch()
  const [otpCode, setOtpCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const verifyEmail = async () => {
    try {
      if (!otpCode) {
        console.error("OTP code is required");
        return;
      }
      const response = await LoginVerificationApi({ emailOtpCode: Number(otpCode), userId: userData?.id });
      console.log("Login verification response:", response);
      dispatch(setUser({
        user: response?.data,
        token: response?.data?.accessToken,
        refreshToken: response?.data?.refreshToken
      }));
      props?.navigation?.navigate(Routes.BottomNavigator);


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
    errorMessage, setErrorMessage

  }
}

export default UseLoginVerification

