import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // ✅ Make sure you're using this one
import { style } from './Style'
import Entypo from "react-native-vector-icons/Entypo"
import { colors } from '../../../constants'
import { hp, wp } from '../../../components/ResponsiveComponent'
import images from '../../../images'
import Spacer, { HorizontalSpacer } from '../../../components/Spacer'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Line from '../../../components/Liner'

const MenuScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1,  backgroundColor: colors.black,  paddingTop: Platform.OS === 'android' ? hp(2.5) : 0  }} >
            <View style={style.container}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ alignItems: "flex-end" }}>
                    <Entypo name="cross" size={22} color={colors.white} />
                </TouchableOpacity>
                <Spacer/>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.CryptoWallet} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Crypto Wallet</ResponsiveText>
                    </View>
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.DrawerExchange} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Exchange</ResponsiveText>
                    </View>
                    <Spacer/>
                       <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.addressSettingIcon} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Referrals</ResponsiveText>
                    </View>
                    <Spacer/>
                    <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.DrawerMarket} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Markets</ResponsiveText>
                    </View>
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.Address} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Address Book</ResponsiveText>
                    </View>
                    <Spacer/>
                     <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.profileSettingIcon} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Profile</ResponsiveText>
                    </View>
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.securitySettingIcon} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Security</ResponsiveText>
                    </View>
                     <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.AccountVerify} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Verification</ResponsiveText>
                    </View>
                     <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.emailNotificationSettingIcon} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Notifications</ResponsiveText>
                    </View>
                     <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.systemSettingIcon} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>System Settings</ResponsiveText>
                    </View>
                     <Spacer/>
                      <Spacer/>
                     <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.Contact} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Contact Support</ResponsiveText>
                    </View>
                    <Spacer/>
                     <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image style={style.imageStyling} source={images.Logout} resizeMode='contain'/>
                        <HorizontalSpacer width={wp(3)}/>
                        <ResponsiveText style={style.label}>Log Out</ResponsiveText>
                    </View>
                     <Spacer/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MenuScreen
