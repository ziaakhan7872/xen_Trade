import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { style } from './Style'
import EmailVerificationForm, { EmailVerificationBottomSheet } from './Component/Index'
import images from '../../../images'
import { wp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'
import useEmalVerification from './Hooks/Index'

const EmailVerificationScreen = () => {
    const {emailVerificationBottomSheetRef,handleOpenVerification,handleCloseVerification} = useEmalVerification()
    return (
        <AuthMainContainer>
            <View style={style.container}>
                <Spacer/>
                <View style={style.outerMainBox}>
                    <TouchableOpacity>
                        <Image style={style.leftImage} resizeMode='contain' source={images.backArrow} />
                    </TouchableOpacity>
                    <Spacer/>
                    <EmailVerificationForm submit={handleOpenVerification} />
                </View>
                <EmailVerificationBottomSheet closeBottomSheet={handleCloseVerification} bottomSheetRef={emailVerificationBottomSheetRef} />
            </View>

        </AuthMainContainer>
    )
}

export default EmailVerificationScreen

