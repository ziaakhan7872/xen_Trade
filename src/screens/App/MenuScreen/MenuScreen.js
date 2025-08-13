import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // ✅ Make sure you're using this one
import { style } from './Style'
import Entypo from "react-native-vector-icons/Entypo"
import { colors, Routes } from '../../../constants'
import { hp, wp } from '../../../components/ResponsiveComponent'
import images from '../../../images'
import Spacer, { HorizontalSpacer } from '../../../components/Spacer'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Line from '../../../components/Liner'
import { appStyles } from '../../../utilities'
import { navigate } from '../../../navigation/NavigationService/NavigationService'
import { LogoutUser } from '../../../constants/Api/Index'
import { getRefreshToken } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { UseMenuScreen } from './Hooks/Index'

const MenuScreen = (props) => {
    const {logout} = UseMenuScreen(props)
   
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: Platform.OS === 'android' ? hp(2.5) : 0 }} >
            <View style={style.container}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ alignItems: "flex-end" }}>
                    <Entypo name="cross" size={22} color={colors.white} />
                </TouchableOpacity>
                <Spacer />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.CryptoWallet} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Crypto Wallet</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity onPress={() => props?.navigation.navigate(Routes.BottomNavigator, { screen: Routes.ExchangeScreen })} style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.DrawerExchange} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Exchange</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.referrals })} style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.addressSettingIcon} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Referrals</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer />
                    <TouchableOpacity onPress={() => props?.navigation.navigate(Routes.BottomNavigator, { screen: Routes.MarketScreen })} style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.DrawerMarket} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Markets</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.Address} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Address Book</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.profileSettingIcon} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Profile</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.securitySettingIcon} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Security</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.AccountVerify} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Verification</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.emailNotificationSettingIcon} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Notifications</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.systemSettingIcon} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>System Settings</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <Spacer />
                    <Line height={hp(0.1)} width={wp(90)} />
                    <Spacer />
                    <TouchableOpacity style={appStyles.rowBasic} onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.ContactSupport })}>
                        <Image style={style.imageStyling} source={images.Contact} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Contact Support</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                    <TouchableOpacity onPress={logout} style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={style.imageStyling} source={images.Logout} resizeMode='contain' />
                        <HorizontalSpacer width={wp(3)} />
                        <ResponsiveText style={style.label}>Log Out</ResponsiveText>
                    </TouchableOpacity>
                    <Spacer />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MenuScreen
