import React, { useState, useRef } from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { AuthMainContainer } from "../../../components/authMainContainer"
import { hp, wp } from "../../../components/ResponsiveComponent"
import { DepositWalletShowDetails, TokenList, useDepositNavigation, SelectCrypto } from "./components"
import Spacer from "../../../components/Spacer"
import { styles } from "./style"
import { SimpleButton } from "../../../components/SimpleButton"
import { ResponsiveText } from "../../../components/ResponsiveText"
import { colors, fontFamily, Routes } from "../../../constants"
import images from "../../../images"
import { appStyles } from "../../../utilities"
import useHomeScreen from "./Hooks"

const WalletHome = (props) => {
  return (
    <AuthMainContainer>
      <View style={styles.containerMain}>

        <Spacer />
        <DepositWalletShowDetails />
        <Spacer />

        <View style={appStyles.row}>
          <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Deposit" textColor={colors.white} styleView={styles.depositBtn} />
          <SimpleButton btnStyles={{ fontFamily: fontFamily.appTextRegular }} text="Withdrawl" textColor={colors.black} styleView={styles.withdrawBtn} />
        </View>
        <Spacer height={hp(3.5)} />


        <Spacer height={hp(1.5)} />

        {/* Search Bar */}
        <TouchableOpacity
          style={styles.searchContainer}

        >
          <ResponsiveText style={styles.searchText}>Search...</ResponsiveText>
          <Image style={styles.searchIcon}
            source={images.searchSign}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Spacer height={hp(2)} />

        {/* Crypto List */}
        <TokenList />



      </View>

    </AuthMainContainer>
  );
};

export default WalletHome;