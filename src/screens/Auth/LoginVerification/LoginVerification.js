import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { LoginVerificationForm } from './Component/Index'
import UseLoginVerification from './Hooks/Index'

const LoginVerification = (props) => {
    const { handeGoBack ,otpCode,setOtpCode,verifyEmail,errorMessage,setErrorMessage} = UseLoginVerification(props)
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <Spacer />
                <View style={style.outerMainBox}>
                    <TouchableOpacity onPress={handeGoBack}>
                        <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer />
                    <LoginVerificationForm errorMessage={errorMessage} setOtpCode={setOtpCode} submit={verifyEmail} />
                </View>
             
            </View>

        </AuthMainContainer>
    )
}

export default LoginVerification

