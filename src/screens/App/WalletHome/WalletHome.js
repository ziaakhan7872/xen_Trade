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
    loading, isVisible
    // totalUsdt

  } = useHomeScreen(props)
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>

        <Spacer />
        <DepositWalletShowDetails openBottomSheet={()=> assetSheetRef?.current?.expand()} />
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
        {/* <TextInputSearch value={searchCoin} onChangeText={setSearchCoin} /> */}
        <TextInputField/>
        <Spacer height={hp(2)} />

      </View>
      {/* <Spacer height={Platform.OS === 'android' ? hp(0) : hp(3.5)} /> */}

      {/* <View style={{ flex: 1 }}> */}
      {loading ? <SkeletionLoader rows={6} /> : (
        <TokenList cryptoData={cryptoList} props={props} />
      )}
      {/* </View> */}
      <Portal>
        {/* {isVisible && ( */}

          <ChartBottomSheet bottomSheetRef={assetSheetRef} closeBottomSheet={() => assetSheetRef?.current?.close()} />
                {/* )} */}
      </Portal>

    </AuthMainContainer>
  );
};

export default WalletHome;