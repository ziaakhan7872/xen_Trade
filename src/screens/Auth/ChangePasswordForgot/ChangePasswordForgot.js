import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { styles } from './styles'
import images from '../../../images'
import { hp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'
import { useChangePasswordForgot } from './Hooks'
import { ResetPasswordContainer } from './Components'

const ChangePasswordForgot = (props) => {
    const {
        goBack, passwordVisible, setPasswordVisible,
        confirmPasswordVisible, setConfirmPasswordVisible,
        password, setPassword, confirmPassword, setConfirmPassword,
    } = useChangePasswordForgot(props)

    return (
        <AuthMainContainer>
            <View style={styles.container}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={styles.leftImage} source={images.backArrow} />
                </TouchableOpacity>
                <Spacer height={hp(3.5)} />
                <ResetPasswordContainer
                    passwordVisible={passwordVisible} setPasswordVisible={setPasswordVisible}
                    confirmPasswordVisible={confirmPasswordVisible} setConfirmPasswordVisible={setConfirmPasswordVisible}
                    password={password} setPassword={setPassword}
                    confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                />
            </View>
        </AuthMainContainer>
    )
}

export default ChangePasswordForgot