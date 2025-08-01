
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { AssetAllocationBalance, AssetAllocationHistory, MainHeaderCustom } from './components'
import images from '../../../images'
import { View } from 'react-native'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities'
import { colors, fontFamily, Routes } from '../../../constants'
import { SimpleButton } from '../../../components/SimpleButton'
import { UseAssetsAllocation } from './Hooks/Index'

const AssetAllocation = (props) => {
  const {data} = UseAssetsAllocation(props)
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>
        <MainHeaderCustom data={data} leftImage={images.backArrow} onBackPress={() => props?.navigation?.goBack()} titleLogo={images.ethIcon} title={'ETHEREUM'} />
        <Spacer height={hp(1)} />
        <AssetAllocationBalance data={data} />
        <Spacer />
        <AssetAllocationHistory />
      </View>
      <View style={[appStyles.row, { ...styles.buttonRow }]}>
        <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Deposit" textColor={colors.white} styleView={styles.depositBtn} onPress={() => props?.navigation?.navigate?.(Routes.SelectNetwork,{cryptoItem:data})} />
        {/* <SimpleButton onPress={()=>props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto }) } btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Deposit" textColor={colors.white} styleView={styles.depositBtn} /> */}
        <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Withdraw" textColor={colors.black} styleView={styles.withdrawBtn} onPress={()=> props?.navigation?.navigate(Routes.SelectNetworkWIthdraw,{cryptoData:data})} />
      </View>
    </AuthMainContainer>
  )
}

export default AssetAllocation

