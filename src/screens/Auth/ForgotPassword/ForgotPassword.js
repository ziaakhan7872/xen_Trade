import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import Spacer from '../../../components/Spacer'
import images from '../../../images'
import { hp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import { useForgotPassword } from './Hooks'
import { ForgotPasswordContainer } from './Components'

const ForgotPassword = (props) => {
    const { goBack, email, setEmail, RecoverPassword,apiError } = useForgotPassword(props)
    return (
        <AuthMainContainer>
            <View style={styles.container}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={styles.leftImage} source={images.backArrow} />
                </TouchableOpacity>
                <Spacer height={hp(3.5)} />
                <ForgotPasswordContainer apiError={apiError} email={email} setEmail={setEmail} RecoverPassword={RecoverPassword} />
            </View>
        </AuthMainContainer>
    )
}

export default ForgotPassword