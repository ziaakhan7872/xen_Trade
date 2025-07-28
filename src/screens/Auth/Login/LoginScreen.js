import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import LoginForm from './Component/Index'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../constants'

const LoginScreen = (props) => {
  return (
    <AuthMainContainer>
      <View style={style.container}>
        <LoginForm Login={() => props?.navigation.navigate(Routes.BottomNavigator)} signUp={() => props?.navigation.navigate(Routes.SignupScreen)} />
        {/* <LoginForm signUp={() => props?.navigation.navigate(Routes.SignupScreen)} /> */}

      </View>

    </AuthMainContainer>
  )
}

export default LoginScreen

