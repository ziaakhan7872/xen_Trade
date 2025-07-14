    
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AssetAllocationBalance, AssetAllocationHeader, AssetAllocationHistory } from './components'

const AssetAllocation = () => {
  return (
    <AuthMainContainer>
      <AssetAllocationHeader />
      <AssetAllocationBalance />
      <AssetAllocationHistory />
    </AuthMainContainer>
  )
}

export default AssetAllocation

