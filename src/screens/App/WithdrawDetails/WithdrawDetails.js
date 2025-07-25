
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { WithdrawDetailsHeader ,ProgressWithdraw, WithdrawDetailsContainer, WithDrawBtn} from './components'

const WithdrawDetails = () => {
  return (
   <AuthMainContainer>
     <WithdrawDetailsHeader />
     <ProgressWithdraw/>
     <WithdrawDetailsContainer/>
     <WithDrawBtn/>
    </AuthMainContainer>

  )
}

export default WithdrawDetails

