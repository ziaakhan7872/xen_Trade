
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

const AssetAllocation = (props) => {
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>
        <MainHeaderCustom leftImage={images.backArrow} onBackPress={() => props?.navigation?.goBack()} titleLogo={images.ethIcon} title={'ETHEREUM'} />
        <Spacer height={hp(1)} />
        <AssetAllocationBalance />
        <Spacer />
        <AssetAllocationHistory />
      </View>
      <View style={[appStyles.row, { ...styles.buttonRow }]}>
        <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Deposit" textColor={colors.white} styleView={styles.depositBtn} onPress={() => props?.navigation?.navigate?.(Routes.SelectCrypto)} />
        {/* <SimpleButton onPress={()=>props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto }) } btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Deposit" textColor={colors.white} styleView={styles.depositBtn} /> */}
        <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Withdraw" textColor={colors.black} styleView={styles.withdrawBtn} />
      </View>
    </AuthMainContainer>
  )
}

export default AssetAllocation

