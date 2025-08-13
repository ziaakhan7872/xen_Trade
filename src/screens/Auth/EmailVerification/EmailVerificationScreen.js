import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import useEmalVerification from './Hooks/Index'
import { EmailVerificationBottomSheet, EmailVerificationForm } from './Component/Index'
import { Portal } from 'react-native-portalize'

const EmailVerificationScreen = (props) => {
    const { emailVerificationBottomSheetRef,
        otpCode, setOtpCode, verifyEmail,
        errorMessage, setErrorMessage,
        resendOtp } = useEmalVerification(props)
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <Spacer />
                <View style={style.outerMainBox}>
                    <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
                        <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer />
                    <EmailVerificationForm
                        errorMessage={errorMessage}
                        setOtpCode={setOtpCode}
                        submit={verifyEmail}
                        resendOtp={resendOtp}
                    />
                </View>
                <Portal>
                    <EmailVerificationBottomSheet closeBottomSheet={() => emailVerificationBottomSheetRef?.current?.close()} bottomSheetRef={emailVerificationBottomSheetRef} />
                </Portal>
            </View>

        </AuthMainContainer>
    )
}

export default EmailVerificationScreen

