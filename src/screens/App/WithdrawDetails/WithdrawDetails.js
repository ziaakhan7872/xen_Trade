
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { WithdrawDetailsHeader, ProgressWithdraw, WithdrawDetailsContainer, WithDrawBtn } from './components'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { View } from 'react-native'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { UseWithdrawDetail } from './Hooks'


const WithdrawDetails = (props) => {
  const {CryptoData,network,response} = UseWithdrawDetail(props)
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>
        <MainHeader leftImage={images.backArrow} title={'WITHDRAWL DETAILS'} onBackPress={() => props?.navigation?.goBack()} />
        <Spacer height={hp(3)} />

        <ProgressWithdraw response={response} />
        <Spacer height={hp(3)} />

        <WithdrawDetailsContainer response={response} network={network} cryptoData={CryptoData} />
        <Spacer height={hp(3)} />

      </View>
      <WithDrawBtn />
    </AuthMainContainer>

  )
}

export default WithdrawDetails

