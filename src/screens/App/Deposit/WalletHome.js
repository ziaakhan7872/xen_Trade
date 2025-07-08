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



const WalletHome = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const cryptoSheetRef = useRef();
  const { handleDepositPress } = useDepositNavigation();
  
  return (
    <AuthMainContainer 
      paddingHorizontal={wp(4)}>
      <Spacer height={hp(3)} />
      <DepositWalletShowDetails />
      <Spacer height={hp(3)} />

      {/* Action Buttons */}
      <View style={appStyles.row}>
        <SimpleButton  
          text="Deposit"
          textColor={colors.white}
          backgroundColor={colors.InputTextCOlor}
          buttonWidth={wp(44)}
          borderWidth={1}
          borderColor={colors.mainColor}
          fontSize={16}
          height={hp(6)}
          borderRadius={25}
          onPress={handleDepositPress}
        />
        <SimpleButton 
          text="Withdraw"
          textColor={colors.white}
          backgroundColor={colors.mainColor}
          buttonWidth={wp(44)}
          fontSize={16}
          height={hp(6)}
          borderRadius={25} 
        />
      </View>
      <Spacer height={hp(3)} />

      {/* Portfolio Section */}
      <View style={appStyles.row}>
        <ResponsiveText style={styles.portfolioTitle}>PORTFOLIO</ResponsiveText>
        <View style={appStyles.rowBasic}>
           <Image
          source={images.checkBox}
          resizeMode="contain"
          style={styles.checkBox}

        />
          <ResponsiveText style={styles.hideBalances}> Hide 0 Balances</ResponsiveText>
           <Image
          source={images.clockIcon}
          resizeMode="contain"
        />
        </View>
      </View>
      <Spacer  />

      {/* Search Bar */}
      <TouchableOpacity 
        style={styles.searchContainer}
        onPress={() => cryptoSheetRef.current?.open()}
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
        
        {/* Select Crypto Bottom Sheet */}
        <SelectCrypto 
          ref={cryptoSheetRef}
          onSelectCrypto={setSelectedCrypto}
        />
    
    </AuthMainContainer>
  );
};

export default WalletHome;