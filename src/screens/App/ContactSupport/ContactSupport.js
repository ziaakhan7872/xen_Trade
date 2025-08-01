import { View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import { hp, wp } from '../../../components/ResponsiveComponent'
import images from '../../../images'
import { useContactSupport } from './Hooks'
import { SimpleButton } from '../../../components/SimpleButton'
import Spacer from '../../../components/Spacer'
import { styles } from './styles'
import { colors } from '../../../constants'
import { SubmitBottomSheet, TextInputGroup } from './Components'
import { Portal } from 'react-native-portalize'

const ContactSupport = (props) => {
    const { message, setMessage, SubmitBottomSheetRef, handleOpenSubmit, handleCloseSubmit } = useContactSupport()

    return (
        <AuthMainContainer>
            <View style={styles.containerMain} >
                <MainHeader leftImage={images.backArrow} title={"CONTACT SUPPORT"} onBackPress={() => props?.navigation?.goBack()} />
                <Spacer height={hp(3.5)} />
                <TextInputGroup message={message} setMessage={setMessage} />
                <Portal>
                    <SubmitBottomSheet SubmitBottomSheetRef={SubmitBottomSheetRef} closeBottomSheet={handleCloseSubmit} />
                </Portal>
            </View>
            <SimpleButton text="Submit" onPress={handleOpenSubmit} textColor={colors.black} styleView={styles.btnSaveChanges} />
        </AuthMainContainer>
    )
}

export default ContactSupport