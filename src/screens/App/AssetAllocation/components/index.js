import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { colors, fontFamily, Routes } from '../../../../constants';
import { appStyles } from '../../../../utilities';
import Spacer from '../../../../components/Spacer';
import { SimpleButton } from '../../../../components/SimpleButton';
import Line from '../../../../components/Liner';


export const MainHeaderCustom = ({ leftImage, rightImage, title, titleLogo, onBackPress, onRightPress }) => {
  return (
    <View style={{ ...appStyles.row, ...styles.headerMainContainer }}>
      <TouchableOpacity onPress={onBackPress} style={styles.leftIconWrapper}>
        <Image source={leftImage} style={styles.leftImage} />
      </TouchableOpacity>

      <View style={[styles.titleWrapper, { ...appStyles.rowBasic }]}>
        <Image source={titleLogo} style={styles.titleImage} />
        <ResponsiveText style={styles.title}>{title}</ResponsiveText>
      </View>
      <TouchableOpacity onPress={onRightPress} style={styles.rightIconWrapper}>
        <Image source={rightImage} style={styles.rightImage} />
      </TouchableOpacity>
    </View>
  )
}

export const AssetAllocationBalance = ({ props }) => (
  <View style={styles.balanceContainer}>
    <ResponsiveText style={styles.totalAvailableLabel}>Total Available</ResponsiveText>
    <Spacer height={hp(1)} />
    <ResponsiveText style={styles.totalAvailableValue}>1.25410012</ResponsiveText>
    <ResponsiveText style={styles.usdValue}>≈ $3,322.33</ResponsiveText>
    <Spacer height={hp(2.5)} />

    <View style={appStyles.row}>
      <View style={styles.balanceBox2}>
        <ResponsiveText style={styles.balanceBoxLabel}>Available</ResponsiveText>
        <ResponsiveText style={styles.balanceBoxValue}>1.254100</ResponsiveText>
      </View>
      <View style={styles.balanceBox}>
        <ResponsiveText style={styles.balanceBoxLabel}>In Order</ResponsiveText>
        <ResponsiveText style={styles.balanceBoxValue}>0.002344</ResponsiveText>
      </View>
    </View>

    <Spacer />
    <SimpleButton btnImage={images.copesIcon} text="Trade" textColor={colors.white} styleView={styles.depositBtn} onPress={() => props?.navigation?.navigate?.(Routes.AppNavigator, { screen: '' })} />
  </View>
);

export const AssetAllocationHistory = () => (
  <View style={styles.historyContainer}>
    <ResponsiveText style={styles.historyLabel}>HISTORY</ResponsiveText>
    <Spacer />
    <Line height={hp(0.1)} />
    <Spacer height={hp(8)} />
    <View style={styles.recordContainer}>
      <Image source={images.noRecord} style={styles.recordIcon} />
      <ResponsiveText style={styles.noRecordText}>No Open Orders</ResponsiveText>
    </View>
  </View>
);


const styles = StyleSheet.create({
  headerMainContainer: {
    paddingTop: wp(4),
  },
  leftImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  rightImage: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  titleImage: {
    width: wp(5.5),
    height: wp(5.5),
    marginRight: wp(2),
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.mainTextMedium,
    color: colors.white,
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftIconWrapper: {
    width: wp(10),
    alignItems: 'flex-start',
  },
  rightIconWrapper: {
    width: wp(10),
    alignItems: 'flex-end',
  },
  balanceContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: hp(2)
  },
  totalAvailableLabel: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
  },
  totalAvailableValue: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fontFamily.mainTextMedium,
  },
  depositBtn: {
    width: wp(44),
    backgroundColor: colors.transparentBtn,
    paddingVertical: hp(1.8),
    marginStart: wp(0.5),
    borderRadius: wp(10),
  },
  usdValue: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  balanceBox: {
    flex: 1,
    backgroundColor: colors.cardColor3,
    paddingHorizontal: wp(3),
    borderTopRightRadius: wp(3),
    borderBottomRightRadius: wp(3),
    alignItems: 'flex-start',
    paddingVertical: hp(1.2),
    paddingTop: hp(1.6),
    borderRightWidth: 2,
    borderRightColor: colors.borderColor,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderLeftColor: colors.borderColor,
  },
  balanceBox2: {
    flex: 1,
    borderLeftWidth: 2,
    borderTopColor: colors.borderColor,
    borderTopWidth: 2,
    borderLeftColor: colors.borderColor,
    backgroundColor: colors.cardColor3,
    borderTopLeftRadius: wp(3),
    borderBottomLeftRadius: wp(3),
    paddingHorizontal: wp(3),
    alignItems: 'flex-start',
    paddingVertical: hp(1.2),
    paddingTop: hp(1.6),

  },
  balanceBoxLabel: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  balanceBoxValue: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fontFamily.mainTextMedium,
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
    fontSize: 18,
    fontFamily: fontFamily.mainTextBold,
    alignSelf: 'flex-start',
  },
  noRecordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  recordContainer: {
    alignItems: 'center',
  },
  recordIcon: {
    width: wp(12),
    height: wp(12),
    resizeMode: 'contain',
  },
  noRecordText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: 14,
    color: colors.white,
    paddingTop: hp(1),
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