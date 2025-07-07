import {  View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import SignUpForm from './Component/Index'
import { style } from './Style'
import UseSignUp from './Hooks/Index'

const SignupScreen = (props) => {
    const {isChecked,setIsChecked,handleCheckboxToggle,handleSignIn,handleEmailVerification} = UseSignUp(props)
  return (
    <AuthMainContainer>
      <View style={style.container}>
        <SignUpForm  handleEmailVerification={handleEmailVerification} Login={handleSignIn} isChecked={isChecked} handleCheckboxToggle={handleCheckboxToggle} />
      </View>

    </AuthMainContainer>
  )
}

export default SignupScreen

