import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../images'
import { SimpleButton } from '../../../components/SimpleButton'

const loginMainScreen = () => {
  console.log('Entered login Main Screen')
  return (
    <View>
        <ImageBackground source={images.splashScreenBg}>
            <Image source={images.splashLogoImage}></Image>
            <Text>Aut quia quia eos sunt dolores aut voluptate {'\n'}
                nobis aut error omnis eum adipisci dolores {'\n'}
                quo minus velit.
            </Text>
            <SimpleButton backgroundColor='#05BADA' text='Login'></SimpleButton>
            
        </ImageBackground>
    </View>
  )
}

export default loginMainScreen

const styles = StyleSheet.create({})