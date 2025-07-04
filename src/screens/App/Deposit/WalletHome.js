
import { TokenList } from "./components"

const WalletHome = () => {
 

  return (
    <AuthMainContainer paddingHorizontal={wp(4)}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        
       

        <Spacer height={hp(5)} />

        <DepositWalletShowDetails />

        <Spacer height={hp(3)} />

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <SimpleButton styleView={styles.depositButton}/>
          <SimpleButton styleView={styles.withdrawButton}/>

        </View>

        <Spacer height={hp(3)} />

        {/* Portfolio Section */}
        <View style={styles.portfolioHeader}>
          <ResponsiveText style={styles.portfolioTitle}>PORTFOLIO</ResponsiveText>
          <View style={styles.portfolioActions}>
            <ResponsiveText style={styles.hideBalances}>🔒 Hide 0 Balances</ResponsiveText>
            <ResponsiveText style={styles.historyIcon}>🕐</ResponsiveText>
          </View>
        </View>

        <Spacer height={hp(2)} />

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <ResponsiveText style={styles.searchText}>Search...</ResponsiveText>
          <ResponsiveText style={styles.searchIcon}>🔍</ResponsiveText>
        </View>

        <Spacer height={hp(2)} />

        {/* Crypto List */}
        
        <TokenList/>

        <Spacer height={hp(3)} />
      </ScrollView>
    </AuthMainContainer>
  )
}

export default WalletHome