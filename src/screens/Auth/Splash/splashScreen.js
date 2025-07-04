import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import images from '../../../images';
import { hp, wp } from '../Welcome/Components/ResponsiveComponent';
import BootSplash from "react-native-bootsplash";
import { Routes } from '../../../constants';


const splashScreen = ({navigation}) => {
  console.log('In splash screen')
  //   useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await BootSplash.hide({ fade: true });
  //     console.log("BootSplash has been hidden successfully");
  //     navigation.replace(Routes.loginMainScreen)
  //   }, 4000);
  // }, []);
  
    useEffect(() => {
    
      navigation.replace(Routes.loginMainScreen);
      setTimeout(() => {
        BootSplash.hide();
      }, 1000);

    

  }, [])

  return (
    <View style={styles.mainContainer}>
        <ImageBackground style={styles.splashBgContainer} source={images.splashScreenBg}>
            <Image style={styles.splashImage} source={images.splashLogoImage} resizeMode='contain'></Image>
        </ImageBackground>
    </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    splashBgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashImage: {
        width: wp(50),
        height: hp(100),
        
    }
})