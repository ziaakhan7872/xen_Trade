
import { View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, SectionList } from 'react-native';
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { ResponsiveText } from "../../../../components/ResponsiveText";
import { coinData } from "../../../../utilities/dummyData";
import Spacer from "../../../../components/Spacer";
import images from "../../../../images";
import { colors, Routes } from "../../../../constants"
import { useNavigation } from "@react-navigation/native"
import { hp, wp } from '../../../../components/ResponsiveComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import { AuthMainContainer } from "../../../../components/authMainContainer";
import { fontFamily } from '../../../../constants/fonts';
import { Screen } from 'react-native-screens';
import BottomSheet from '../../../../components/BottomSheet';
export const DepositWalletShowDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ResponsiveText style={styles.label}>Total value (BTC)</ResponsiveText>
        <ResponsiveText style={styles.btcValue}>0.2702145</ResponsiveText>
        <ResponsiveText style={styles.usdValue}>= $19,458.89</ResponsiveText>
        <ResponsiveText style={styles.pnl}>Today's PNL <ResponsiveText style={styles.pnlPositive}>+3.33%</ResponsiveText></ResponsiveText>
      </View>
      <View style={styles.chartContainer}>
        <TouchableOpacity onPress={() => assetAllocation(true)}>
          <Image
            source={images.DepositLogo}
            style={styles.chartIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};




// const CoinItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Image source={item.icon} style={styles.icon} />
//     <View style={styles.coinDetails}>
//       <ResponsiveText style={styles.symbol}>{item.symbol}</ResponsiveText>
//       <ResponsiveText style={styles.name}>{item.name}</ResponsiveText>




// const CoinItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Image source={item.icon} style={styles.icon} />
//     <View style={styles.coinDetails}>
//       <ResponsiveText style={styles.symbol}>{item.symbol}</ResponsiveText>
//       <ResponsiveText style={styles.name}>{item.name}</ResponsiveText>
//     </View>
//     <View style={styles.amountContainer}>
//       <ResponsiveText style={styles.amount}>{item.amount}</ResponsiveText>
//       <ResponsiveText style={styles.value}>{item.value}</ResponsiveText>
//     </View>
//   </View>
// );
export const SelectCrypto = forwardRef(({ onSelectCrypto }, ref) => {
 
  const [searchText, setSearchText] = useState('');
  
  // Initialize sections only once and filter on demand
  const initialSections = [
    { header: 'Popular', data: coinData.slice(0, 5) },
    { header: 'All Crypto', data: coinData }
  ];
  
  const [filteredData, setFilteredData] = useState(initialSections);

  // Handle search input - optimized
  const handleSearch = (text) => {
    setSearchText(text);
    if (!text.trim()) {
      setFilteredData(initialSections);
      return;
    }
    
    const searchTermLower = text.toLowerCase();
    const filtered = coinData.filter(
      item => item.name.toLowerCase().includes(searchTermLower) || 
             item.symbol.toLowerCase().includes(searchTermLower)
    );
    
    setFilteredData([{ header: 'All Crypto', data: filtered }]);
  };

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <ResponsiveText style={styles.sectionHeaderText}>{section.header}</ResponsiveText>
    </View>
  );

  const navigation = useNavigation();
  
  const handleCryptoSelect = (item) => {
    // First close the bottom sheet
    ref.current?.close();
    
    // Call the onSelectCrypto callback if provided
    onSelectCrypto?.(item);
    
    // Navigate to the SelectNetwork screen with the selected crypto
    setTimeout(() => {
      navigation.navigate(Routes.AppNavigator, {
        screen: Routes.SelectNetwork,
        params: { selectedCrypto: item }
      });
    }, 300); // Small delay to allow the sheet to close smoothly
  };

  const renderCryptoItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cryptoSelectItem}
      onPress={() => handleCryptoSelect(item)}
    >
      <Image source={item.icon} style={styles.cryptoSelectIcon} resizeMode="contain" />
      <View style={styles.cryptoSelectDetails}>
        <ResponsiveText style={styles.cryptoSymbol}>{item.symbol}</ResponsiveText>
        <ResponsiveText style={styles.cryptoName}>{item.name}</ResponsiveText>
      </View>
    </TouchableOpacity>
  );

  return (
    <RBSheet
      ref={ref}
      height={hp(120)}
      customStyles={{
        container: styles.selectCryptoRBSheetContainer,
        wrapper: styles.selectCryptoRBSheetOverlay,
        draggableIcon: styles.draggableIcon
      }}
    >
      <AuthMainContainer >
        {/* Header */}
        <View style={styles.selectCryptoHeader}>
          <TouchableOpacity 
            onPress={() => ref.current?.close()} 
            style={styles.backButtonContainer}
          >
            <Image 
              source={images.backArrow}
              style={styles.backArrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <ResponsiveText style={styles.selectCryptoTitle}>SELECT CRYPTO</ResponsiveText>
          <Image 
            style={styles.selectCryptoCloseButton}
            source={images.clockIcon}
            resizeMode="contain"
          />

          
        </View>
        
        {/* Search box */}
        <View style={styles.selectCryptoSearchContainer}>
          <TextInput
            style={styles.selectCryptoSearchInput}
            placeholder="Search..."
            placeholderTextColor={colors.white}
            
            value={searchText}
            onChangeText={handleSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Image 
            source={images.searchSign}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </View>
        <Spacer />
        {/* Crypto list */}
        <SectionList
          sections={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderCryptoItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
          style={styles.selectCryptoListContainer}
          contentContainerStyle={{ paddingBottom: hp(2) }}
          initialNumToRender={10}
          maxToRenderPerBatch={10}        windowSize={10}
        removeClippedSubviews={true}
      />
      </AuthMainContainer>
    </RBSheet>
  );
});

export const TokenList = () => {
    return (
        <FlatList 
          data={[...coinData, ...coinData]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
          
            flexGrow: 1
          }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', backgroundColor: colors.buttonSigninColor }} />}
          removeClippedSubviews={false}
          renderItem={({item,index}) => {
            return (
              <View style={styles.itemContainer}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.coinDetails}>
                  <ResponsiveText style={styles.symbol}>{item.symbol}</ResponsiveText>
                  <ResponsiveText style={styles.name}>{item.name}</ResponsiveText>
                </View>
                <View style={styles.amountContainer}>
                  <ResponsiveText style={styles.amount}>{item.amount}</ResponsiveText>
                  <ResponsiveText style={styles.value}>{item.value}</ResponsiveText>
                </View>
              </View>
            )
          }}
        />
    )
}

 const assetAllocation = () => {
  return (
   <BottomSheet     visible={true}
   onclose={() => {}}
      height={hp(120)} width={wp(100)}>
      <AuthMainContainer>
        <View style={styles.selectCryptoHeader}>    
          <TouchableOpacity
            onPress={() => {}}
            style={styles.backButtonContainer}  
          >
            <Image
              source={images.backArrow}
              style={styles.backArrowIcon}
              resizeMode="contain"    
            />
          </TouchableOpacity>
          <ResponsiveText style={styles.selectCryptoTitle}>ASSET ALLOCATION</ResponsiveText>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.selectCryptoCloseButton}

          >
            <ResponsiveText style={styles.closeButtonText}>Close</ResponsiveText>
          </TouchableOpacity>
        </View>
      </AuthMainContainer>
   </BottomSheet>
  )
};
export const useDepositNavigation = () => {
  const navigation = useNavigation();
  
  const handleDepositPress = () => {
    navigation.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory });
  };
  
  return { handleDepositPress };
};


export const styles = StyleSheet.create({
     // DepositShowDetails
    container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.InputTextCOlor, 
    padding: 20,
    borderRadius: 12,
    marginHorizontal: wp(4),
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: colors.iconColor,
    fontSize: 12,
    marginBottom: 4,
  },
  btcValue: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  usdValue: {
    color: colors.iconColor,
    fontSize: 14,
    marginTop: 4,
  },
  pnl: {
    marginTop: 4,
    fontSize: 14,
    color: colors.iconColor,
  },
  pnlPositive: {
    color: colors.mainColor, 
    fontWeight: 'bold',
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  chartIcon: {
    width: 60,
    height: 60,
  
  },
  // TokenList
  tokenListContainer: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  coinDetails: {
    flex: 1,
  },
  symbol: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  name: {
    color: colors.iconColor,
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  value: {
    color: colors.iconColor,
    fontSize: 12,
  },
  // SelectCrypto Styles
 
  
  selectCryptoRBSheetContainer: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  selectCryptoRBSheetOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  draggableIcon: {
    backgroundColor: colors.buttonSigninColor,
    width: wp(10),
  },
  selectCryptoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.5),
    position: 'relative',
    width: '100%',
   
  },
  backButtonContainer: {
    position: 'absolute',
    left: wp(4),
    zIndex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  backArrowIcon: {
    width: wp(5),
    height: hp(2.5),
  },
  selectCryptoTitle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextBold,
  },
  selectCryptoCloseButton: {
    position: 'absolute',
    right: wp(4),
    padding: wp(1),
    width: wp(5),
    height: hp(2.5),
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  selectCryptoSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBar,
    marginTop: hp(3),
      paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: 8,
    height: hp(5),
    marginHorizontal: wp(4),
  },
  selectCryptoSearchInput: {
    flex: 1,
    color: colors.white,
    paddingVertical: hp(1),
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
  },
  searchIconButton: {
    paddingHorizontal: wp(1),
  },
  searchIcon: {
    width: wp(5),
    height: hp(2.5),
  },
  selectCryptoListContainer: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
 
  },
  sectionHeaderText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
  },
  cryptoSelectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.buttonSigninColor,
  },
  cryptoSelectIcon: {
    width: wp(9),
    height: wp(9),
    marginRight: wp(3),
  },
  cryptoSelectDetails: {
    flex: 1,
  },
  cryptoSymbol: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
  },
  cryptoName: {
    color: colors.iconColor,
    fontSize: 12,
    fontFamily: fontFamily.appTextRegular,
  }
});
