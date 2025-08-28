import { ScrollView, View } from 'react-native'
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
    const {
        name, setName,
        email, setEmail,
        message, setMessage,
        SubmitBottomSheetRef, handleOpenSubmit, handleCloseSubmit
    } = useContactSupport()

    return (
        <AuthMainContainer>
            <View style={styles.containerMain} >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        // justifyContent: 'space-between',
                    }}
                    keyboardShouldPersistTaps="handled">
                    <MainHeader leftImage={images.backArrow} title={"CONTACT SUPPORT"} onBackPress={() => props?.navigation?.goBack()} />
                    <Spacer height={hp(3.5)} />
                    <TextInputGroup
                        name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        message={message} setMessage={setMessage}
                    />
                    <Portal>
                        <SubmitBottomSheet SubmitBottomSheetRef={SubmitBottomSheetRef} closeBottomSheet={handleCloseSubmit} />
                    </Portal>
                </ScrollView>
                <SimpleButton disabled={!name || !email || !message} text="Submit" onPress={handleOpenSubmit} textColor={colors.black} styleView={styles.btnSaveChanges} />
            </View>
        </AuthMainContainer>
    )
}

export default ContactSupport