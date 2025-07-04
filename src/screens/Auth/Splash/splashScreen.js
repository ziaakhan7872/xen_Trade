import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import images from '../../../images';
import { hp, wp } from '../Welcome/Components/ResponsiveComponent';
 


const splashScreen = () => {
    useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
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