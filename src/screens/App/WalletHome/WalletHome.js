import React from "react"
import { View, Platform } from "react-native"
import { AuthMainContainer } from "../../../components/authMainContainer"
import { hp } from "../../../components/ResponsiveComponent"
import { DepositWalletShowDetails, TokenList, PortfolioHeader, TextInputSearch, ChartBottomSheet } from "./components"
import Spacer from "../../../components/Spacer"
import { styles } from "./style"
import { SimpleButton } from "../../../components/SimpleButton"
import { colors, fontFamily, Routes } from "../../../constants"
import { appStyles } from "../../../utilities"
import { useHomeScreen } from "./Hooks"
import { Portal } from "react-native-portalize"
import SkeletionLoader from "../../../components/SkeletonLoader"
import TextInputField from "../../../components/TextInputField"

const WalletHome = (props) => {
  const {
    isChecked, handleCheckboxToggle,
    input, setInput,
    assetSheetRef, handleAssetOpen, handleAssetClose,
    cryptoList, searchCoin, setSearchCoin,
    loading, isVisible, handleWalletData
    // totalUsdt
  } = useHomeScreen(props)

  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>

        <Spacer />
        <DepositWalletShowDetails openBottomSheet={handleAssetOpen} />
        <Spacer />

        <View style={appStyles.row}>
          <SimpleButton
            onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto })}
            // onPress={DisplayCryptoList}
            btnStyles={{ fontFamily: fontFamily.appTextRegular }}
            text="Deposit"
            textColor={colors.white}
            styleView={styles.depositBtn}
          />
          <SimpleButton
            onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCryptoWithDraw })}
            btnStyles={{ fontFamily: fontFamily.appTextRegular }}
            text="Withdraw"
            textColor={colors.black}
            styleView={styles.withdrawBtn}
          />
        </View>
        <Spacer height={hp(3.5)} />
        <PortfolioHeader isChecked={isChecked} handleCheckboxToggle={handleCheckboxToggle} />

        <Spacer height={hp(1.5)} />
        <TextInputSearch value={searchCoin} onChangeText={setSearchCoin} />
        {/* <TextInputField/> */}
        <Spacer height={hp(2)} />

      </View>
      <View style={{ flex: 1 }}>
        <TokenList
        props={props}
          cryptoData={cryptoList}
          handleWalletData={handleWalletData}
        />
        {cryptoList.length === 0 && loading ? <SkeletionLoader rows={6} /> : null}
      </View>



      <Portal>
        <ChartBottomSheet bottomSheetRef={assetSheetRef} closeBottomSheet={handleAssetClose} />
      </Portal>

    </AuthMainContainer>
  );
};

export default WalletHome;