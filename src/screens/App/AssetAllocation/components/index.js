import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { colors, fontFamily } from '../../../../constants';


export const AssetAllocationHeader = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.AssetHeader}>
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
           <Image
              source={images.EthLogo}
              style={styles.backArrowIcon}
              resizeMode="contain"
            />
          <ResponsiveText style={styles.selectCryptoTitle}>ETHEREUM</ResponsiveText>
          
          
        </View>
  );
};


// Balance and trade section
export const AssetAllocationBalance = () => (
  <View style={styles.balanceContainer}>
    <ResponsiveText style={styles.totalAvailableLabel}>Total Available</ResponsiveText>
    <ResponsiveText style={styles.totalAvailableValue}>1.25410012</ResponsiveText>
    <ResponsiveText style={styles.usdValue}>* $3,322.33</ResponsiveText>
    <View style={styles.balanceRow}>
      <View style={styles.balanceBox}>
        <ResponsiveText style={styles.balanceBoxLabel}>Available</ResponsiveText>
        <ResponsiveText style={styles.balanceBoxValue}>1.254100</ResponsiveText>
      </View>
      <View style={styles.balanceBox}>
        <ResponsiveText style={styles.balanceBoxLabel}>In Order</ResponsiveText>
        <ResponsiveText style={styles.balanceBoxValue}>0.002344</ResponsiveText>
      </View>
    </View>
    <TouchableOpacity style={styles.tradeButton}>
      <Image source={images.tradeIcon || images.copyIcon} style={styles.tradeIcon} resizeMode="contain" />
      <ResponsiveText style={styles.tradeButtonText}>Trade</ResponsiveText>
    </TouchableOpacity>
  </View>
);

// History and actions section
export const AssetAllocationHistory = () => (
  <View style={styles.historyContainer}>
    <ResponsiveText style={styles.historyLabel}>HISTORY</ResponsiveText>
    <View style={styles.noRecordContainer}>
      <Image source={images.union} style={styles.noRecordIcon} resizeMode="contain" />
      <ResponsiveText style={styles.noRecordText}>No Record found</ResponsiveText>
    </View>
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.depositButton}>
        <ResponsiveText style={styles.depositButtonText}>Deposit</ResponsiveText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.withdrawButton}>
        <ResponsiveText style={styles.withdrawButtonText}>Withdraw</ResponsiveText>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({

  balanceContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: hp(2),
    paddingBottom: hp(2),
  },
  totalAvailableLabel: {
    color: colors.iconColor,
    fontSize: 13,
    fontFamily: fontFamily.appTextRegular,
    marginBottom: hp(0.5),
  },
  totalAvailableValue: {
    color: colors.white,
    fontSize: 28,
    fontFamily: fontFamily.appTextBold,
    marginBottom: hp(0.5),
  },
  usdValue: {
    color: colors.iconColor,
    fontSize: 13,
    fontFamily: fontFamily.appTextRegular,
    marginBottom: hp(2),
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginBottom: hp(2),
  },
  balanceBox: {
    flex: 1,
    backgroundColor: colors.available,
    marginHorizontal: wp(0.1),
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(1.2),
  },
  balanceBoxLabel: {
    color: colors.iconColor,
    fontSize: 13,
    fontFamily: fontFamily.appTextRegular,
  },
  balanceBoxValue: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  tradeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonSigninColor,
    borderRadius: 30,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(10),
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  tradeIcon: {
    width: wp(5),
    height: hp(2.5),
    marginRight: wp(2),
  },
  tradeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },

  historyContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingTop: hp(2),
    alignItems: 'center',
  },
  historyLabel: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextBold,
    alignSelf: 'flex-start',
    marginLeft: wp(4),
    marginBottom: hp(1),
  },
  noRecordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  noRecordIcon: {
    width: wp(10),
    height: wp(10),
    marginBottom: hp(1),
  
  },
  noRecordText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.appTextRegular,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: hp(6),
    marginBottom: hp(2),
  },
  depositButton: {
    flex: 1,
    backgroundColor: colors.buttonSigninColor,
    borderRadius: 30,
    paddingVertical: hp(1.5),
    marginRight: wp(2),
    alignItems: 'center',
  },
  depositButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  withdrawButton: {
    flex: 1,
    backgroundColor: colors.withdrawBtn,
    borderRadius: 30,
    paddingVertical: hp(1.5),
    marginLeft: wp(2),
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },


  AssetHeader: {
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
    marginRight: wp(2),
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

})