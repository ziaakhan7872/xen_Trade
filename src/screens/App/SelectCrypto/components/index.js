import React, { useState } from 'react';
import { View, TextInput, SectionList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import Spacer from '../../../../components/Spacer';
import images from '../../../../images';
import { colors, Routes } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import { coinData } from '../../../../utilities/dummyData';



export const SelectCryptoHeader = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.selectCryptoHeader}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButtonContainer}
          >
            <Image 
              source={images.backArrow}
              style={styles.backArrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <ResponsiveText style={styles.selectCryptoTitle}>SELECT CRYPTO</ResponsiveText>
          <TouchableOpacity onPress={() =>  navigation.navigate(Routes.AppNavigator, {
                  screen: Routes.DepositHistory,
               
                })}
                 style={styles.selectCryptoCloseButton}>
          <Image 
           
            source={images.clockIcon}
            resizeMode="contain"
            
          />
</TouchableOpacity>
          
        </View>
  );
};


// Search box component
export const SelectCryptoSearchBox = ({ searchText, onChangeText }) => (
  <View style={styles.selectCryptoSearchContainer}>
    <TextInput
      style={styles.selectCryptoSearchInput}
      placeholder="Search..."
      placeholderTextColor={colors.white}
      value={searchText}
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Image
      source={images.searchSign}
      style={styles.searchIcon}
      resizeMode="contain"
    />
  </View>
);

// Crypto list component
export const SelectCryptoList = ({ sections, onSelect }) => {
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <ResponsiveText style={styles.sectionHeaderText}>{section.header}</ResponsiveText>
    </View>
  );
  const renderCryptoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cryptoSelectItem}
      onPress={() => onSelect(item)}
    >
      <Image source={item.icon} style={styles.cryptoSelectIcon} resizeMode="contain" />
      <View style={styles.cryptoSelectDetails}>
        <ResponsiveText style={styles.cryptoSymbol}>{item.symbol}</ResponsiveText>
        <ResponsiveText style={styles.cryptoName}>{item.name}</ResponsiveText>
      </View>
    </TouchableOpacity>
  );
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderCryptoItem}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled={false}
      style={styles.selectCryptoListContainer}
      contentContainerStyle={{ paddingBottom: hp(2) }}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      removeClippedSubviews={true}
    />
  );
};

// Main content component
export const SelectCryptoContent = ({ refProp, onSelectCrypto }) => {
  const [searchText, setSearchText] = useState('');
  const initialSections = [
    { header: 'Popular', data: coinData.slice(0, 5) },
    { header: 'All Crypto', data: coinData }
  ];
  const [filteredData, setFilteredData] = useState(initialSections);
  const navigation = useNavigation();

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

  const handleCryptoSelect = (item) => {
    refProp?.current?.close && refProp.current.close();
    onSelectCrypto?.(item);
    setTimeout(() => {
      navigation.navigate(Routes.AppNavigator, {
        screen: Routes.SelectNetwork,
        params: { selectedCrypto: item }
      });
    }, 300);
  };

  return (
    <>
      <SelectCryptoSearchBox searchText={searchText} onChangeText={handleSearch} />
      <Spacer />
      <SelectCryptoList sections={filteredData} onSelect={handleCryptoSelect} />
    </>
  );
};


const styles = StyleSheet.create({
// Header

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
 
  //select crypto
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
  },

});