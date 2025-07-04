import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import SignUpForm from './Component/Index'
import { style } from './Style'

const SignupScreen = () => {
  return (
    <AuthMainContainer>
      <View style={style.container}>
        <SignUpForm />
      </View>

    </AuthMainContainer>
  )
}

export default SignupScreen

