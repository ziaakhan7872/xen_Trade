import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import images from '../../../images'
import { wp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'
import useEmalVerification from './Hooks/Index'
import { EmailVerificationBottomSheet, EmailVerificationForm } from './Component/Index'
import { Portal } from 'react-native-portalize'

const EmailVerificationScreen = (props) => {
    const { emailVerificationBottomSheetRef, handleOpenVerification, handleCloseVerification, handeGoBack ,otpCode,setOtpCode,verifyEmail,errorMessage,setErrorMessage} = useEmalVerification(props)
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <Spacer />
                <View style={style.outerMainBox}>
                    <TouchableOpacity onPress={handeGoBack}>
                        <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer />
                    <EmailVerificationForm errorMessage={errorMessage} setOtpCode={setOtpCode} submit={verifyEmail} />
                </View>
                <Portal>
                    <EmailVerificationBottomSheet closeBottomSheet={handleCloseVerification} bottomSheetRef={emailVerificationBottomSheetRef} />
                </Portal>
            </View>

        </AuthMainContainer>
    )
}

export default EmailVerificationScreen

