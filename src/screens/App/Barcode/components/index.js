import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { colors } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import QRCodeStyled from 'react-native-qrcode-styled';

export const BarcodeHeader = ({ BackPress, HistoryPress, previousCrypto }) => {
  return (
    <View style={styles.header}>
      <View style={{ width: wp(55), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity onPress={BackPress} style={styles.backButton}>
          <Image source={images.backArrow} style={styles.backIcon} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.cryptoInfo}>
          <Image source={{ uri: previousCrypto?.icon }} style={styles.cryptoIcon} resizeMode="cover" />
          <HorizontalSpacer />
          <ResponsiveText style={styles.cryptoSymbol}>{previousCrypto?.symbol.toUpperCase()}</ResponsiveText>
        </View>
      </View>


      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.downloadIcon} style={styles.actionIcon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.infoCircle} style={styles.actionIcon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={HistoryPress}>
          <Image source={images.clockIcon} style={styles.actionIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>

  );
};

export const NetworkSelector = ({ networkList, walletAddress }) => {
  const WalletAddress = walletAddress?.data?.walletAddress

  return (
    <View style={{ alignItems: "center" }}>
      <ResponsiveText style={styles.networkLabel}>Network</ResponsiveText>
      <TouchableOpacity style={styles.networkDropdown}>
        <ResponsiveText style={styles.networkText}> {networkList?.networkList?.name + "(" + networkList?.networkList?.standard + ")"} </ResponsiveText>``
        <Image source={images.depositFilter} style={styles.dropdownArrow} resizeMode="contain" />
      </TouchableOpacity>
      <Spacer />
      {WalletAddress ? (
        <QRCodeStyled
          data={WalletAddress}
          style={{ backgroundColor: colors.white }}
          padding={Platform.OS == 'ios' ? wp(3) : wp(1.5)}
          pieceScale={1.02}
          pieceSize={6}
        />
      ) : (
        <ActivityIndicator size="large" color={colors.white} style={{ marginTop: wp(4) }} />
      )}
    </View>
  );
};

export const AddressSection = ({ walletAddress }) => {
  const WalletAddress = walletAddress?.data?.walletAddress

  return (
    <View style={styles.addressSection}>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: wp(4) }}>
        <ResponsiveText style={styles.addressLabel}>Address</ResponsiveText>
        <Image
          source={images.rightsign}
          style={styles.addressArrow}
          resizeMode="contain"
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: wp(4), justifyContent: "space-between" }}>
        <ResponsiveText style={styles.addressText}>{WalletAddress}</ResponsiveText>
        <TouchableOpacity style={styles.copyButton}>
          <ResponsiveText style={styles.copyText}>Copy</ResponsiveText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Details section component
export const DetailsSection = ({ networkList, walletAddress }) => {
  const contractAddress = walletAddress?.data?.contractAddress

  return (
    <View style={styles.detailsSection}>
      <View style={styles.detailSubSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ResponsiveText style={styles.detailLabel}>Minimum deposit</ResponsiveText>
          <HorizontalSpacer width={wp(1)} />
          <Image
            source={images.infoCircle}
            style={styles.detailIcon}
            resizeMode="contain"
          />
        </View>
        <ResponsiveText style={styles.detailValue}>{networkList?.networkList?.networks[0]?.minDeposit.slice(0, 4)}</ResponsiveText>
      </View>
      <View style={styles.detailSubSection}>
        <ResponsiveText style={styles.detailLabel}>Deposit account</ResponsiveText>
        <ResponsiveText style={styles.detailValue}>Trading</ResponsiveText>
      </View>
      <View style={styles.detailSubSection}>
        <ResponsiveText style={styles.detailLabel}>Deposit arrival time</ResponsiveText>
        <ResponsiveText style={styles.detailValue}>7 minutes</ResponsiveText>
      </View>
      <View style={styles.detailSubSection}>
        <ResponsiveText style={styles.detailLabel}>Withdrawal enabled time</ResponsiveText>
        <ResponsiveText style={styles.detailValue}>20 minutes</ResponsiveText>
      </View>
      <View style={styles.detailSubSection}>
        <ResponsiveText style={styles.detailLabel}>Contract address</ResponsiveText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ResponsiveText style={styles.detailValue}>Ends With {contractAddress?.slice(-6)}</ResponsiveText>
          <HorizontalSpacer width={wp(1)} />
          <Image
            source={images.depositFilter}
            style={styles.detailDropdownArrow}
            resizeMode="contain"
          />
        </View>
      </View>

    </View>
  );
};



export const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    paddingHorizontal: wp(4),
  },

  backButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cryptoInfo: {
    alignItems: "flex-end",
    flexDirection: 'row',
    width: wp(20),
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  backIcon: {
    width: wp(5.5),
    width: wp(5.5),
  },


  cryptoIcon: {
    width: wp(6),
    height: wp(6),
    borderRadius: 100,
    resizeMode: "contain"
  },
  cryptoSymbol: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    marginBottom: wp(0.6)
  },

  actionButton: {
    paddingHorizontal: wp(1.4),
    // marginLeft: wp(1),
  },
  actionIcon: {
    width: wp(5),
    height: wp(5),
    tintColor: colors.white,
  },
  networkSelector: {
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  networkLabel: {
    fontSize: 12,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: "400"
  },
  networkDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  networkText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    fontWeight: "500"
  },
  dropdownArrow: {
    width: wp(5.5),
    height: hp(4.5),
    tintColor: colors.white,
    marginLeft: wp(2),
  },

  qrCode: {
    width: wp(46),
    height: wp(46),
  },
  addressSection: {
    backgroundColor: colors.InputTextCOlor,
    width: wp(90),
    alignSelf: "center",
    borderRadius: wp(3),
    paddingVertical: wp(5)
  },

  addressLabel: {
    fontSize: 14,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
  },
  addressArrow: {
    width: wp(4),
    height: hp(2),

  },

  addressText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    fontWeight: "500",
    width: wp(60)
  },
  copyButton: {
    paddingVertical: hp(1.2),
    width: wp(20),
    backgroundColor: colors.buttonSigninColor,
    borderRadius: wp(8),
    alignItems: "center"
  },
  copyText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: "400"
  },
  detailsSection: {
    backgroundColor: colors.InputTextCOlor,
    borderRadius: wp(3),
    width: wp(90),
    alignSelf: "center",
  },


  detailLabel: {
    fontSize: 14,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
  },
  detailIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: "contain"
  },

  detailValue: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    textAlign: 'right',
  },
  detailDropdownArrow: {
    width: wp(4),
    height: hp(2),
    tintColor: colors.white,
  },
  detailSubSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    borderWidth: 1,
    borderColor: colors.cardBorderColor
  }
});