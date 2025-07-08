import { View, Text } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { ResponsiveText } from '../../../components/ResponsiveText'
import TextInputField from '../../../components/TextInputField'
import { colors } from '../../../constants'
import { SimpleButton } from '../../../components/SimpleButton'

const changePassword = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} title='CHANGE PASSWORD' onBackPress={() => { props?.navigation.goBack() }} />

                <Spacer height={hp(4.5)} />

                <ResponsiveText style={styles.inputLabel}>Current Password</ResponsiveText>
                <TextInputField placeholder={'Enter your current password'} />
                <Spacer height={hp(1.5)} />
                <ResponsiveText style={styles.inputLabel}>New Password</ResponsiveText>
                <TextInputField placeholder={'Enter your new password'} />
                <Spacer height={hp(1.5)} />
                <ResponsiveText style={styles.inputLabel}>Confirm new Password</ResponsiveText>
                <TextInputField placeholder={'Confirm your new password'} />

                <Spacer height={hp(45)} />
                <View style={styles.btnSaveChangesView}>
                    <SimpleButton text="Save Changes" textColor={colors.disableTextColor} disabled={true} styleView={styles.btnSaveChanges} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default changePassword