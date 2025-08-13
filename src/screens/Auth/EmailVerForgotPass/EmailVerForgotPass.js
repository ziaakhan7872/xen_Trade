import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import Spacer from '../../../components/Spacer'
import { styles } from './styles'
import images from '../../../images'
import { useEmailVerForgotPass } from './Hooks'
import { EmailVerificationForm } from './Components'

const EmailVerForgotPass = (props) => {
    const { otpCode, setOtpCode, verifyEmail,
        errorMessage, setErrorMessage,
        resendOtp } = useEmailVerForgotPass(props)
    return (
        <AuthMainContainer>
            <View style={styles.container}>
                <Spacer />
                <View style={styles.outerMainBox}>
                    <TouchableOpacity onPress={() => props?.navigation?.goBack()}>
                        <Image style={styles.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer />

                    <EmailVerificationForm
                        errorMessage={errorMessage}
                        setOtpCode={setOtpCode}
                        submit={verifyEmail}
                        resendOtp={resendOtp}
                    />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default EmailVerForgotPass

