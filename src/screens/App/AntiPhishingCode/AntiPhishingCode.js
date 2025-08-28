import { View, Text } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../components/ResponsiveText'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { SimpleButton } from '../../../components/SimpleButton'
import { styles } from './styles'
import TextInputField from '../../../components/TextInputField'
import { colors } from '../../../constants'
import { AntiPhishingComponent } from './Components'

const AntiPhishingCode = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ANTI-PHISHING CODE' onBackPress={() => { props?.navigation?.goBack?.() }} />
                <Spacer height={hp(4.5)} />
                <AntiPhishingComponent />
            </View>

            <View style={styles.btnSaveChangesView}>
                <SimpleButton text="Set" textColor={colors.black} styleView={styles.btnSaveChanges} />
            </View>
        </AuthMainContainer>
    )
}

export default AntiPhishingCode