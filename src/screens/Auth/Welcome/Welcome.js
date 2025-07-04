import {  Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Testing } from './Components'
import { AuthMainContainer } from '../../../components/authMainContainer'
const Welcome = () => {
  return (
    <View style={styles.mainView}>
      <Text >Welcome</Text>
      <AuthMainContainer/>
    </View>
  )
}

export default Welcome
