import { View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import LoginForm from './Component/Index'
import { Routes } from '../../../constants'
import { UseLogin } from './Hooks/Index'

const LoginScreen = (props) => {
  const {
    email, setEmail,
    password, setPassword,
    passwordVisible, setPasswordVisible,
    errorMessage, setErrorMessage,
    handleLogin, goToForgotPassword } = UseLogin(props)
  return (
    <AuthMainContainer>
      <View style={style.container}>
        <LoginForm
          errorMessage={errorMessage}
          passwordVisible={passwordVisible} setPasswordVisible={setPasswordVisible}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          Login={handleLogin}
          goToForgotPassword={goToForgotPassword}
          signUp={() => props?.navigation.navigate(Routes.SignupScreen)} />
      </View>

    </AuthMainContainer>
  )
}

export default LoginScreen

