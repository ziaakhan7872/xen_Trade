import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { FilterTextInput, History } from './Components'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'

const ReferralHistory = (props) => {
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} rightImage={images.download} title={' REFERRAL HISTORY'} onBackPress={() => props?.navigation?.goBack()} onRightPress={() => props?.navigation?.navigate?.('')} />
                <Spacer height={hp(3)} />
                <FilterTextInput />
                <Spacer height={hp(3)} />
                <History />
            </View>
        </AuthMainContainer>
    )
}

export default ReferralHistory