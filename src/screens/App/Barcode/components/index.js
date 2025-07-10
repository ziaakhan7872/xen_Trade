import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { useNavigation, useRoute } from '@react-navigation/native';
import images from '../../../../images';
import { colors } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';

// Header component for Barcode screen
export const BarcodeHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedCrypto, selectedNetwork } = route.params || {};
  
  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Image 
          source={images.backArrow}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      
      <View style={styles.headerCenter}>
        <View style={styles.cryptoInfo}>
          <Image 
            source={selectedCrypto?.icon || images.UsdtLogo}
            style={styles.cryptoIcon}
            resizeMode="contain"
          />
          <ResponsiveText style={styles.cryptoSymbol}>
            {selectedCrypto?.symbol || 'USDT'}
          </ResponsiveText>
        </View>
      </View>
      
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Image 
            source={images.downloadIcon}
            style={styles.actionIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image 
            source={images.infoCircle}
            style={styles.actionIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image 
            source={images.clockIcon}
            style={styles.actionIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Network selection component
export const NetworkSelector = () => {
  const route = useRoute();
  const { selectedNetwork } = route.params || {};
  
  return (
    <View style={styles.networkSelector}>
      <ResponsiveText style={styles.networkLabel}>Network</ResponsiveText>
      <TouchableOpacity style={styles.networkDropdown}>
        <ResponsiveText style={styles.networkText}>
           Ethereum(ERC20)
        </ResponsiveText>``
        <Image 
          source={images.depositFilter}
          style={styles.dropdownArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

// QR Code component
export const QRCodeDisplay = () => {
  return (
    <View style={styles.qrContainer}>
      <Image 
        source={images.qrcode}
        style={styles.qrCode}
        resizeMode="contain"
      />
    </View>
  );
};

// Address component
export const AddressSection = () => {
  const address = "0x21505337aa3b5254eb156ef4b851525824B6B55c";
  
  return (
    <View style={styles.addressSection}>
      <View style={styles.addressHeader}>
        <ResponsiveText style={styles.addressLabel}>Address</ResponsiveText>
        <Image 
          source={images.rightsign}
          style={styles.addressArrow}
          resizeMode="contain"
        />
      </View>
      <View style={styles.addressContainer}>
        <ResponsiveText style={styles.addressText}>{address}</ResponsiveText>
        <TouchableOpacity style={styles.copyButton}>
          <ResponsiveText style={styles.copyText}>Copy</ResponsiveText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Details section component
export const DetailsSection = () => {
  return (
    <View style={styles.detailsSection}>
      <DetailItem 
        label="Minimum deposit" 
        value="0.01 USDT"
        icon={images.infoCircle}
      />
      <DetailItem 
        label="Deposit account" 
        value="Trading"
      />
      <DetailItem 
        label="Deposit arrival time" 
        value="7 minutes"
      />
      <DetailItem 
        label="Withdrawal enabled time" 
        value="20 minutes"
      />
      <DetailItem 
        label="Contract address" 
        value="Ends with 821cc7"
        hasDropdown={true}
      />
    </View>
  );
};

// Individual detail item component
const DetailItem = ({ label, value, icon, hasDropdown }) => (
  <View style={styles.detailItem}>
    <View style={styles.detailLeft}>
      <ResponsiveText style={styles.detailLabel}>{label}</ResponsiveText>
      {icon && (
        <Image 
          source={icon}
          style={styles.detailIcon}
          resizeMode="contain"
        />
      )}
    </View>
    <View style={styles.detailRight}>
      <ResponsiveText style={styles.detailValue}>{value}</ResponsiveText>
      {hasDropdown && (
        <Image 
          source={images.depositFilter}
          style={styles.detailDropdownArrow}
          resizeMode="contain"
        />
      )}
    </View>
  </View>
);

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingTop: hp(3),
  },
  backButton: {
    padding: wp(1),
  },
  backIcon: {
    width: wp(6),
    height: hp(2.5),
    tintColor: colors.white,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    marginLeft: wp(22),
  },
  cryptoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: wp(6),
    height: wp(6),
    marginRight: wp(2),
  },
  cryptoSymbol: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.appTextBold,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: wp(2),
    marginLeft: wp(1),
  },
  actionIcon: {
    width: wp(5),
    height: wp(5),
    tintColor: colors.white,
  },
  networkSelector: {
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
  },
  networkLabel: {
    fontSize: 12,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
    marginLeft: wp(39),
  
  },
  networkDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
 
    paddingHorizontal: wp(4),
    
   
  },
  networkText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    marginLeft: wp(24),
  },
  dropdownArrow: {
    width: wp(4),
    height: hp(2),
    tintColor: colors.iconColor,
    marginRight: wp(22),
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: hp(1),
  },
  qrCode: {
    width: wp(46),
    height: wp(46),
  },
  addressSection: {
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
      backgroundColor: colors.InputTextCOlor,
    justifyContent: 'space-between',
 borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: wp(4),
  },
  addressLabel: {
    fontSize: 14,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
    marginTop: hp(2),
  },
  addressArrow: {
    width: wp(4),
    height: hp(2),
    tintColor: colors.iconColor,
    marginRight: wp(82),
     marginTop: hp(2),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.InputTextCOlor,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
   borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    color: colors.white,
    fontFamily: fontFamily.appTextRegular,
    marginRight: wp(12),
  },
  copyButton: {
    paddingHorizontal: wp(8),
    paddingVertical: hp(2),
    backgroundColor: colors.buttonSigninColor,
    borderRadius: 20,
    marginVertical: hp(1),
  },
  copyText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
  },
  detailsSection: {
    // paddingHorizontal: wp(8),
    // marginTop: hp(1),
    // margin: hp(3),
    // backgroundColor: colors.mainBgColor,
    backgroundColor: colors.InputTextCOlor,
    paddingHorizontal: wp(4),
    borderRadius: 8,
   marginLeft: wp(4),
    marginRight: wp(4),
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonSigninColor,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
  },
  detailIcon: {
    width: wp(4),
    height: wp(4),
    marginLeft: wp(1),
    tintColor: colors.iconColor,
  },
  detailRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    textAlign: 'right',
  },
  detailDropdownArrow: {
    width: wp(4),
    height: hp(2),
    marginLeft: wp(2),
    tintColor: colors.white,
  },
  detailContractAddress:{
marginLeft: wp(78),
  },
};