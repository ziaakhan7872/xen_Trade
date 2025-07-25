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
import images from "../../../images"

const WalletHome = (props) => {
  const { isChecked, handleCheckboxToggle, input, setInput, assetSheetRef, handleAssetOpen, handleAssetClose } = useHomeScreen()
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>

        <Spacer />
        <DepositWalletShowDetails openBottomSheet={handleAssetOpen} />
        <Spacer />

        <View style={appStyles.row}>
          <SimpleButton
            onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto })}
            btnStyles={{ fontFamily: fontFamily.appTextRegular }}
            text="Deposit"
            textColor={colors.white}
            styleView={styles.depositBtn}
          />
          <SimpleButton
            onPress={() => props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.WithDraw })}
            btnStyles={{ fontFamily: fontFamily.appTextRegular }}
            text="Withdrawl"
            textColor={colors.black}
            styleView={styles.withdrawBtn}
          />
        </View>
        <Spacer height={hp(3.5)} />
        <PortfolioHeader isChecked={isChecked} handleCheckboxToggle={handleCheckboxToggle} />

        <Spacer height={hp(1.5)} />
        <TextInputSearch value={input} onChangeText={(text) => setInput(text)} />
        <Spacer height={hp(2)} />

      </View>
      <Spacer height={Platform.OS === 'android' ? hp(0) : hp(3.5)} />

      <View style={{ flex: 1 }}>
        <TokenList props={props} />
      </View>

      <Portal>
        <ChartBottomSheet bottomSheetRef={assetSheetRef} closeBottomSheet={handleAssetClose} />
      </Portal>
    </AuthMainContainer>
  );
};

export default WalletHome;