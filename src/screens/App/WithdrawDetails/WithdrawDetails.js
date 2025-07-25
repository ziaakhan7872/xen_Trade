
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { WithdrawDetailsHeader, ProgressWithdraw, WithdrawDetailsContainer, WithDrawBtn } from './components'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { View } from 'react-native'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'


const WithdrawDetails = (props) => {
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>
        <MainHeader leftImage={images.backArrow} title={'WITHDRAWL DETAILS'} onBackPress={() => props?.navigation?.goBack()} />
        <Spacer height={hp(3)} />

        <ProgressWithdraw />
        <WithdrawDetailsContainer />
        <WithDrawBtn />
      </View>
    </AuthMainContainer>

  )
}

export default WithdrawDetails

