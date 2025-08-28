import { ScrollView, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { styles } from './styles'
import { ReferText, ShareInvite, TrackReferrals, ShareSteps } from './Components'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Routes } from '../../../constants'

const Referrals = (props) => {
    return (
        <AuthMainContainer>
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} >
                <View style={styles.containerMain}>
                    <MainHeader leftImage={images.backArrow} rightImage={images.history} title={'REFERRALS'} onBackPress={() => props?.navigation?.goBack()} onRightPress={() => props?.navigation?.navigate?.(Routes.referralHistory)} />
                    <Spacer height={hp(3)} />
                    <ReferText />
                    <Spacer height={hp(2)} />
                    <ShareInvite />
                    <Spacer height={hp(2)} />
                    <TrackReferrals />
                    <Spacer height={hp(2)} />
                    <ShareSteps />
                </View>
                <Spacer height={hp(3)} />
            </ScrollView>
        </AuthMainContainer>
    )
}

export default Referrals