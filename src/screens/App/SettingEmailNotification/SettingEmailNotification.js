import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { hp } from '../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Spacer from '../../../components/Spacer'
import { SimpleButton } from '../../../components/SimpleButton'
import { appStyles } from '../../../utilities'
import images from '../../../images'
import { colors } from '../../../constants'
import toggleStates from './Hooks'
import ToggleSwitch from './Components'
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
                <FlatListCustom toggles={toggles} setToggles={setToggles} disableAllNotificationsEnabled={disableAllNotificationsEnabled} setDisableAllNotificationsEnabled={setDisableAllNotificationsEnabled} />
            </View>
        </AuthMainContainer>
    )
}

export default SettingEmailNotification
