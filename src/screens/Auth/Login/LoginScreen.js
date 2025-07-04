import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import LoginForm from './Component/Index'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../constants'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <AuthMainContainer>
      <View style={style.container}>
        <LoginForm signUp={()=>navigation.navigate(Routes.SignupScreen)}/>
      </View>

    </AuthMainContainer>
  )
}

export default LoginScreen

