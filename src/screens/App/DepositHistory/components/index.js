import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import { ResponsiveText } from "../../../../components/ResponsiveText";
import { colors } from "../../../../constants";
import { hp, wp } from "../../../../components/ResponsiveComponent";
import { StyleSheet } from 'react-native';
import { fontFamily } from '../../../../constants/fonts';
import images from '../../../../images'

// Status data for the filter
const statusData = [
  { id: '1', name: 'All statuses' },
  { id: '2', name: 'In progress' },
  { id: '3', name: 'Received' },
  { id: '4', name: 'Others' },
];

// Cryptocurrency data for the filter
const cryptoData = [
  { id: '1', name: 'All crypto', symbol: 'ALL' },
  { id: '2', name: 'USDT', symbol: 'USDT' },
  { id: '3', name: 'BTC', symbol: 'BTC' },
  { id: '4', name: 'ETH', symbol: 'ETH' },
  { id: '5', name: 'XRP', symbol: 'XRP' },
  { id: '6', name: 'BSV', symbol: 'BSV' },
  { id: '7', name: 'INCH', symbol: 'INCH' },
  { id: '8', name: 'LTC', symbol: 'LTC' },
  { id: '9', name: 'OKX', symbol: 'OKX' },
  { id: '10', name: 'OKB', symbol: 'OKB' },
  { id: '11', name: 'LTC', symbol: 'LTC' },
];

export const CryptoFilterModal = ({ 
  visible, 
  onClose, 
  onSelectCrypto, 
  selectedCrypto = 'All crypto',
  onSwitchToStatus 
}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(cryptoData);

  // Handle search input
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = cryptoData.filter(
        item => item.name.toLowerCase().includes(text.toLowerCase()) || 
               item.symbol.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cryptoData);
    }
  };

  // Render each crypto item
  const renderItem = ({ item }) => {
    const isSelected = selectedCrypto === item.name;
    
    return (
      <TouchableOpacity 
        style={styles.cryptoItem} 
        onPress={() => {
          onSelectCrypto(item.name);
          onClose();
        }}
      >
        <ResponsiveText style={styles.cryptoItemText}>{item.name}</ResponsiveText>
        {isSelected && (
          <View style={styles.checkmarkContainer}>
            <Image 
              source={images.tickBoxes}
              style={styles.filterIcon}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <ResponsiveText style={styles.modalTitle}>ALL CRYPTO</ResponsiveText>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <ResponsiveText style={styles.closeButtonText}>✕</ResponsiveText>
            </TouchableOpacity>
          </View>
          
          {/* Filter bar - same as main screen for visual consistency */}
          <View style={styles.filterBar}>
            <TouchableOpacity style={[styles.filterButton]}>
              <ResponsiveText style={styles.activeFilterText}>All crypto</ResponsiveText>
              <Image
                source={images.activeFilter}
                style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.filterButton}>
              <ResponsiveText style={styles.filterButtonText}>Date</ResponsiveText>
              <Image 
                source={images.depositFilter}
                style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.filterButton}
              onPress={() => {
                onClose();
                if (onSwitchToStatus) {
                  onSwitchToStatus();
                }
              }}
            >
              <ResponsiveText style={styles.filterButtonText}>Status</ResponsiveText>
              <Image 
                source={images.depositFilter}
                style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          
          {/* Search box */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor={colors.iconColor}
              value={searchText}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.searchIconButton}>
           <Image 
          source={images.searchSign}
          style={styles.searchIcon}
          resizeMode="contain"
        />
            </TouchableOpacity>
          </View>
          
          {/* Crypto list */}
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      </View>
    </Modal>
  );
};

// Status Filter Modal Component
export const StatusFilterModal = ({ 
  visible, 
  onClose, 
  onSelectStatus, 
  selectedStatus = 'All statuses',
  onSwitchToCrypto 
}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(statusData);

  // Handle search input
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = statusData.filter(
        item => item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(statusData);
    }
  };

  // Render each status item
  const renderItem = ({ item }) => {
    const isSelected = selectedStatus === item.name;
    
    return (
      <TouchableOpacity 
        style={styles.cryptoItem} 
        onPress={() => {
          onSelectStatus(item.name);
          onClose();
        }}
      >
        <ResponsiveText style={styles.cryptoItemText}>{item.name}</ResponsiveText>
        {isSelected && (
          <View style={styles.checkmarkContainer}>
           <Image 
              source={images.tickBoxes}
              style={styles.filterIcon}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainerStatus}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <ResponsiveText style={styles.modalTitle}>STATUS</ResponsiveText>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <ResponsiveText style={styles.closeButtonText}>✕</ResponsiveText>
            </TouchableOpacity>
          </View>
          
          {/* Filter bar */}
          <View style={styles.filterBar}>
            <TouchableOpacity 
              style={styles.filterButton}
              onPress={() => {
                onClose();
                if (onSwitchToCrypto) {
                  onSwitchToCrypto();
                }
              }}
            >
              <ResponsiveText style={styles.filterButtonText}>All crypto</ResponsiveText>
              <Image 
                source={images.depositFilter}
                  style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.filterButton}>
              <ResponsiveText style={styles.filterButtonText}>Date</ResponsiveText>
              <Image 
                source={images.depositFilter}
                  style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.filterButton]}>
              <ResponsiveText style={styles.activeFilterText}>Status</ResponsiveText>
              <Image
                source={images.activeFilter}
                style={styles.activeFilterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          
          {/* Search box */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor={colors.iconColor}
              value={searchText}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.searchIconButton}>
              <Image 
                source={images.searchSign}
                style={styles.searchIconImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          
          {/* Status list */}
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    justifyContent: 'flex-end',
  },
  modalOverlaystatus: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
 
  },
  filterIcon:{
    width: wp(4),
    height: hp(4),  
  },
  modalContainer: {
  
    backgroundColor: colors.cryptofilter,
    height: '80%',
    width: '100%',
  },
   modalContainerStatus: {
    backgroundColor: colors.cryptofilter,
    height: '50%',
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.5),
    backgroundColor: colors.cryptofilter,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(5, 30, 35, 0.8)',
  },
  modalTitle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextBold,
  },
  closeButton: {
    padding: wp(2),
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    backgroundColor: colors.cryptofilter,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cryptofilter,
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.8),
    borderRadius: 6,
    marginRight: wp(3),
    minWidth: wp(22),
    justifyContent: 'space-between',
  },
  filterButtonText: {
    color: colors.iconColor,
    fontSize: 12,
    marginRight: wp(1.5),
    fontFamily: fontFamily.appTextRegular,
  },
  activeFilterText: {
    color: colors.withdrawBtn,
    fontSize: 12,
    marginRight: wp(1.5),
    fontFamily: fontFamily.appTextRegular,
  },
  filterArrow: {
    color: colors.iconColor,
    fontSize: 8,
  },
  activeFilterArrow: {
    color: colors.white,
    fontSize: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBar,
    marginHorizontal: wp(4),
    marginVertical: hp(1.5),
    borderRadius: 6,
    height: hp(5.5),
  },
  searchInput: {
    flex: 1,
    color: colors.white,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.2),
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
  },
  searchIconButton: {
    paddingHorizontal: wp(3),
  },
  searchIcon: {
   width: wp(4),
    height: hp(4),
  },
  listContainer: {
    flex: 1,
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.8),
  },
  itemSeparator: {
  height: hp(0.1),
    backgroundColor: colors.depositBtn, 
  
  },
  cryptoItemText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  checkmarkContainer: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: colors.black,
    fontSize: 12,
    fontFamily: fontFamily.appTextBold,
  },
  activeFilterIcon:{
    width: wp(4),
    height: hp(4),
  },
  searchIconImage:{
    width: wp(4),
    height: hp(4),  
  },
  infoLimit:{
        width: wp(4.5),
        height: hp(4.5),
  }
});
