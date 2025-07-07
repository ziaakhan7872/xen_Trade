import { View, Text } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { styles } from './styles'
import { Routes } from '../../../constants'
import images from '../../../images'
import SecurityOptions from './Components/SecurityOptions'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import useSettingSecurity from './Hooks'

const settingSecurity = (props) => {
    const {
        isBiometricEnabled, setIsBiometricEnabled,
        isScreenshotEnabled, setIsScreenshotEnabled,
        isPinEnabled, setIsPinEnabled
    } = useSettingSecurity();

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='SECURITY' onBackPress={() => { props?.navigation.navigate(Routes.settingMain) }} />

                <Spacer height={hp(4)} />
                <SecurityOptions label='2-Factor Authentication' rightArrow={images.rightArrow} onPress={() => { props?.navigation.navigate(Routes.twoFactorAuth) }} />
                <Spacer height={hp(1)} />
                <SecurityOptions label='Change Password' rightArrow={images.rightArrow} onPress={() => { }} />
                <Spacer height={hp(1)} />
                <SecurityOptions label='Anti-Phishing Code' rightArrow={images.rightArrow} onPress={() => { }} />
                <Spacer height={hp(1)} />
                <SecurityOptions toggleText='Unlock Biometric' isEnabled={isBiometricEnabled} setIsEnabled={setIsBiometricEnabled} />
                <Spacer height={hp(1)} />
                <SecurityOptions toggleText='Enable Screenshot' isEnabled={isScreenshotEnabled} setIsEnabled={setIsScreenshotEnabled} />
                <Spacer height={hp(1)} />
                <SecurityOptions toggleText='Enable PIN' isEnabled={isPinEnabled} setIsEnabled={setIsPinEnabled} />
                <Spacer height={hp(1)} />
            </View>
        </AuthMainContainer>
    )
}

export default settingSecurity