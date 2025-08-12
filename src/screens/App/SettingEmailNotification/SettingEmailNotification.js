import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import toggleStates from './Hooks'
import FlatListCustom from './Components/FlatListCustom'

const SettingEmailNotification = (props) => {
    const {
        disableAllNotificationsEnabled,
        setDisableAllNotificationsEnabled,
        toggles,
        setToggles
    } = toggleStates()



    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='EMAIL NOTIFICATION' onBackPress={() => props?.navigation.goBack()} />
                <FlatListCustom props={props} toggles={toggles} setToggles={setToggles} disableAllNotificationsEnabled={disableAllNotificationsEnabled} setDisableAllNotificationsEnabled={setDisableAllNotificationsEnabled} />
            </View>
        </AuthMainContainer>
    )
}

export default SettingEmailNotification
