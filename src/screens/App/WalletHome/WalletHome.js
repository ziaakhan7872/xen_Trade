import React, { useState, useRef } from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { AuthMainContainer } from "../../../components/authMainContainer"
import { hp, wp } from "../../../components/ResponsiveComponent"
import { DepositWalletShowDetails, TokenList, useDepositNavigation, SelectCrypto } from "./components"
import Spacer from "../../../components/Spacer"
import { styles } from "./style"
import { SimpleButton } from "../../../components/SimpleButton"
import { ResponsiveText } from "../../../components/ResponsiveText"
import { colors } from "../../../constants"
import images from "../../../images"
import { appStyles } from "../../../utilities"
import useHomeScreen from "./Hooks"



const WalletHome = () => {

  const { handleDepositPress } = useDepositNavigation();

  return (
    <AuthMainContainer paddingHorizontal={wp(1)}>
      <Spacer height={hp(2)} />
      <DepositWalletShowDetails />
      <Spacer height={hp(2.5)} />

      {/* Action Buttons */}
      <View style={appStyles.row}>
        <SimpleButton  
          text="Deposit"
          textColor={colors.white}
          backgroundColor={colors.InputTextCOlor}
          buttonWidth={wp(44)}
          borderWidth={1}
          borderColor={colors.mainColor}
          fontSize={15}
          height={hp(5.5)}
          borderRadius={30}
          onPress={handleDepositPress}
      
        />
        <SimpleButton 
          text="Withdraw"
          textColor={colors.white}
          backgroundColor={colors.mainColor}
          buttonWidth={wp(44)}
          fontSize={15}
          height={hp(5.5)}
          borderRadius={30}
        />
      </View>
      <Spacer height={hp(3.5)} />

      {/* Portfolio Section */}
      <View style={appStyles.row}>
        <ResponsiveText style={styles.portfolioTitle}>PORTFOLIO</ResponsiveText>
        <View style={appStyles.rowBasic}>
           <Image
          source={images.checkBox}
          resizeMode="contain"
          style={styles.checkBox}
        />
          <ResponsiveText style={styles.hideBalances}>Hide 0 Balances</ResponsiveText>
          <Spacer width={wp(2)} />
          <Image
          source={images.clockIcon}
          style={{width: wp(4), height: wp(4)}}
          resizeMode="contain"
        />
        </View>
      </View>
      <Spacer height={hp(1.5)} />

      {/* Search Bar */}
      <TouchableOpacity 
        style={styles.searchContainer}
     
      >
        <ResponsiveText style={styles.searchText}>Search...</ResponsiveText>
        <Image style ={styles.searchIcon}
          source={images.searchSign}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Spacer height={hp(2)} />

      {/* Crypto List */}
        <TokenList/>
        
       
        
    
    </AuthMainContainer>
  );
};

export default WalletHome;