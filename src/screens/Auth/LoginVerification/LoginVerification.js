import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { LoginVerificationForm } from './Component/Index'
import UseLoginVerification from './Hooks/Index'
import { hp } from '../../../components/ResponsiveComponent'

const LoginVerification = (props) => {
    const {
        handeGoBack,
        verifyEmail, errorMessage,
        code, setCode, showToast, userEmail, resendOtp, loading
    } = UseLoginVerification(props)
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <TouchableOpacity onPress={handeGoBack} style={{}}>
                    <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                </TouchableOpacity>
                <Spacer height={hp(1.2)} />
                <Spacer />
                <LoginVerificationForm
                    errorMessage={errorMessage}
                    code={code}
                    setCode={setCode}
                    submit={verifyEmail}
                    resendOtp={resendOtp}
                    userEmail={userEmail}
                    loading={loading}
                />
            </View>
        </AuthMainContainer>
    )
}

export default LoginVerification

