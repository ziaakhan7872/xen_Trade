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

const antiPhishingCode = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='ANTI-PHISHING CODE' onBackPress={() => { props?.navigation.goBack() }} />

                <Spacer height={hp(4.5)} />


                <Spacer height={hp(1.5)} />
                <ResponsiveText style={styles.inputLabel}>Anti-Phishing Code</ResponsiveText>
                <TextInputField placeholder={'Enter Anti-phishing code here'} />

                <Spacer height={hp(45)} />
                <View style={styles.btnSaveChangesView}>
                    <SimpleButton text="Save Changes" textColor={colors.disableTextColor} disabled={true} styleView={styles.btnSaveChanges} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default antiPhishingCode