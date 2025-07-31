import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { AmountTitle, WithdrawDetailsContainer } from './Components'
import Spacer from '../../../components/Spacer'
import Line from '../../../components/Liner'
import { colors } from '../../../constants'

const DepositDetails = (props) => {
    return (
        <AuthMainContainer>
            <View style={{ paddingHorizontal: wp(4) }}>
                <MainHeader leftImage={images.backArrow} title={"DEPOSIT DETAILS"} onBackPress={() => props?.navigation?.goBack()} />
            </View>

            <Spacer height={hp(3.5)} />
            <AmountTitle />
            <Spacer height={hp(3.5)} />
            <Line height={hp(0.2)} backgroundColor={colors.lineStroke} />
            <Spacer height={hp(3.5)} />
            <WithdrawDetailsContainer />
        </AuthMainContainer>
    )
}

export default DepositDetails