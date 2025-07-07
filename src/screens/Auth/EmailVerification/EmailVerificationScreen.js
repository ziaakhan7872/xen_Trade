import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import EmailVerificationForm from './Component/Index'
import images from '../../../images'
import { wp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'

const EmailVerificationScreen = () => {
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <Spacer/>
                <View style={style.outerMainBox}>
                    <TouchableOpacity>
                        <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer/>
                    <EmailVerificationForm />
                </View>

            </View>

        </AuthMainContainer>
    )
}

export default EmailVerificationScreen

