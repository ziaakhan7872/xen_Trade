import { View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import SignUpForm from './Component/Index'
import { style } from './Style'
import UseSignUp from './Hooks/Index'

const SignupScreen = (props) => {
  const { isChecked, setIsChecked,
    handleCheckboxToggle, handleSignIn, handleEmailVerification,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    errorMessage, setErrorMessage,
    phoneNumber, setPhoneNumber,
    referralCode, setReferralCode,
    isPasswordVisible, setIsPasswordVisible,
    isConfirmPasswordVisible, setIsConfirmPasswordVisible, SignUp
  } = UseSignUp(props)

  return (
    <AuthMainContainer>
      <View style={style.container}>
        <SignUpForm
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
          errorMessage={errorMessage} setErrorMessage={setErrorMessage}
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
          referralCode={referralCode} setReferralCode={setReferralCode}
          handleEmailVerification={handleEmailVerification}
          Login={handleSignIn}
          isChecked={isChecked}
          handleCheckboxToggle={handleCheckboxToggle}
          isPasswordVisible={isPasswordVisible} setIsPasswordVisible={setIsPasswordVisible}
          isConfirmPasswordVisible={isConfirmPasswordVisible} setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
        />
      </View>

    </AuthMainContainer>
  )
}

export default SignupScreen

