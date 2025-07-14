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
                <ResponsiveText style={styles.description}>Once the code is added, it will be included in all emails received from the system</ResponsiveText>
                <Spacer />

                <View style={styles.warningContainer}>
                    <ResponsiveText style={styles.warningText}>Do not disclose your password and authentication code to anyone, including support.</ResponsiveText>
                </View>
                <Spacer height={hp(1.5)} />
                <ResponsiveText style={styles.inputLabel}>Anti-Phishing Code</ResponsiveText>
                <TextInputField placeholder={'Enter Anti-phishing code here'} placeholderTextColor={colors.placeHolderTextColor} />

            </View>
            <View style={styles.btnSaveChangesView}>
                <SimpleButton text="Set" textColor={colors.black} styleView={styles.btnSaveChanges} />
            </View>
        </AuthMainContainer>
    )
}

export default antiPhishingCode