import { View, Image } from 'react-native'
import React from 'react'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import images from '../../../images'
import { ResponsiveText } from '../../../components/ResponsiveText'
import { MainHeader } from '../../../components/MainHeader'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { styles } from './styles'
import DropDown from '../SettingProfile/Components/dropDown'
import { appStyles } from '../../../utilities'
import { useSettingSystem } from './Hooks'

const SettingSystem = (props) => {
    const {
        language, setLanguage, languageItems,
        timezone, setTimezone, timezoneItems,
        isLanguageOpen, setIsLanguageOpen,
        isTimezoneOpen, setIsTimezoneOpen,
    } = useSettingSystem()

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title="SYSTEM SETTINGS" onBackPress={() => props?.navigation.goBack()} />
                <Spacer height={hp(2.5)} />
                <Image source={images.splashLogoImage} style={styles.logoImage} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>App Name</ResponsiveText>
                    <ResponsiveText style={styles.rightLabels}>Xen Trade</ResponsiveText>
                </View>
                <Spacer height={hp(1.5)} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>App Version</ResponsiveText>
                    <ResponsiveText style={styles.rightLabels}>0.1.5.2</ResponsiveText>
                </View>
                <Spacer height={hp(1.5)} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>Last Update</ResponsiveText>
                    <ResponsiveText style={styles.rightLabels}>October 20, 2024</ResponsiveText>
                </View>
                <Spacer height={hp(1.5)} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>Update Status</ResponsiveText>
                    <View style={appStyles.rowBasic}>
                        <Image source={images.checkMark} style={styles.checkMarkImg}></Image>
                        <Spacer width={wp(1.5)} />
                        <ResponsiveText style={styles.rightLabels}>You are up to date</ResponsiveText>
                    </View>
                </View>

                <Spacer height={hp(3)} />
                <View style={styles.separatorLine} />
                <Spacer height={hp(3)} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>Language</ResponsiveText>
                    <View style={styles.dropDownRight}>
                        <DropDown items={languageItems} value={language} setValue={setLanguage} zIndex={isLanguageOpen ? 1001 : 999} setIsOpen={setIsLanguageOpen} placeholder="Select Language" />
                    </View>
                </View>

                <Spacer height={hp(1.5)} />

                <View style={appStyles.row}>
                    <ResponsiveText style={styles.leftLabels}>Time zone</ResponsiveText>
                    <View style={styles.dropDownRight}>
                        <DropDown items={timezoneItems} value={timezone} setValue={setTimezone} zIndex={isTimezoneOpen ? 1001 : 999} setIsOpen={setIsTimezoneOpen} placeholder="Select Time Zone" />
                    </View>
                </View>
                <Spacer height={hp(5)} />
            </View>
        </AuthMainContainer>
    )
}

export default SettingSystem
