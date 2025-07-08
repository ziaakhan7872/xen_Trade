import { View, Image, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import images from '../../../images'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Spacer from '../../../components/Spacer'
import SettingOption from './Components'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { SimpleButton } from '../../../components/SimpleButton'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { appStyles } from '../../../utilities'
import { useNavigation } from '@react-navigation/native';
import { fontFamily, fontSize, Routes } from '../../../constants'


const settingMain = () => {
    const navigation = useNavigation();
    return (
        <AuthMainContainer>
            {/* <Spacer height={hp(1)} /> */}
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title={'SETTINGS'} />
                <Spacer height={hp(4)} />
                <View style={styles.profileCard}>
                    <View style={appStyles.rowBasic}>
                        <Image source={images.userProfileImg} style={styles.profileImage} />
                        <View>
                            <ResponsiveText style={styles.profileName}>MONTY HAYTON</ResponsiveText>
                            <ResponsiveText style={styles.profileEmail}>monty.hayton@gmail.com</ResponsiveText>
                        </View>
                    </View>
                </View>

                <SettingOption icon={images.profileSettingIcon} label='Profile' onPress={() => {navigation.navigate(Routes.AppNavigator, { screen: Routes.settingProfile }) }} />
                <Spacer height={hp(1)} />
                <SettingOption icon={images.securitySettingIcon} label='Security' onPress={() => {navigation.navigate(Routes.AppNavigator, { screen: Routes.settingSecurity }) }}  />
                <Spacer height={hp(1)} />
                <SettingOption icon={images.systemSettingIcon} label='System Settings'onPress={() => {navigation.navigate(Routes.AppNavigator, { screen: Routes.settingProfile }) }} />
                <Spacer height={hp(1)} />
                <SettingOption icon={images.addressSettingIcon} label='Address Book' onPress={() => {navigation.navigate(Routes.AppNavigator, { screen: Routes.settingProfile }) }} />
                <Spacer height={hp(1)} />
                <SettingOption icon={images.emailNotificationSettingIcon} label='Email Notifications' onPress={() => {navigation.navigate(Routes.AppNavigator, { screen: Routes.settingProfile }) }}  />
            </View>

            <View style={styles.btnView}>
                <SimpleButton text={'Log Out'} styleView={styles.btnContainer} onPress={() => { }} />
            </View>
        </AuthMainContainer>
    )
}

export default settingMain
