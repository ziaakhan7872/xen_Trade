import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { colors, fontFamily, Routes } from '../../../../constants';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer';
import InputText from '../../../../components/InputText';
import Line from '../../../../components/Liner';
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent';
import { SimpleButton } from '../../../../components/SimpleButton';



export const WithdrawHeader = ({ BackPress, HistoryPress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSide}>
        <TouchableOpacity onPress={BackPress} style={styles.backBtn}>
          <Image source={images.backArrow} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenterCustom}>
        <Image source={images.ethIcon} style={styles.headerIconCustom} />
        <HorizontalSpacer />
        <ResponsiveText style={styles.headerTitleCustom}>ON-CHAIN</ResponsiveText>
      </View>
      <View style={styles.headerSide}>
        <TouchableOpacity style={styles.clockBtn} onPress={HistoryPress}>
          <Image source={images.history} style={styles.clockIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const AddressInput = ({ value, onChange, onCopy, onScan, onMax, error = true, errorText = "Insufficient balancee" }) => (
  <View style={{ alignItems: "center" }}>
    <View style={styles.inputContainer}>
      <ResponsiveText style={styles.label}>Address</ResponsiveText>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={images.ethIcon} style={styles.networkIconTop} />
        <ResponsiveText style={styles.networkTextTop}>Ethereum(ERC20)</ResponsiveText>
        <Image source={images.depositFilter} style={styles.arrowDownIconTop} />
      </View>
    </View>
    <Spacer height={hp(1)} />
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <InputText width={wp(95)} />
      <TouchableOpacity onPress={onScan} style={styles.iconButton}>
        <Image source={images.ScanIcon} style={styles.scanIcon} />
      </TouchableOpacity>
    </View>
    <View>
      <ResponsiveText style={styles.label}>Withdrawal Amount</ResponsiveText>
      <Spacer height={hp(1)} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <InputText width={wp(95)} style={{ borderWidth: error ? 1 : 0, borderColor: error ? colors.red : 'transparent', borderRadius: wp(3), marginBottom: 0 }} />
        <View style={[styles.iconButton, { flexDirection: "row", alignItems: "center", bottom: wp(2) }]}>
          <ResponsiveText style={styles.currency}>ETH</ResponsiveText>
          <HorizontalSpacer width={wp(2)} />
          <TouchableOpacity style={styles.maxBtn} onPress={onMax}>
            <ResponsiveText style={styles.maxText}>MAX</ResponsiveText>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer height={hp(1)} />
      {error && (
        <ResponsiveText style={[styles.errorText,]}   > {errorText} </ResponsiveText>)}
      <View style={styles.availableTextContainer}>
        <ResponsiveText style={styles.availableText}>Available </ResponsiveText>
        <HorizontalSpacer />
        <ResponsiveText style={styles.USDTText}>0.022 USDT</ResponsiveText>
      </View>
    </View>
  </View>

);


export const FeeInfo = ({ fee, amountReceived, handleSubmit, insufficentBalance = false }) => (
  <View style={styles.feeContainer}>
    <View style={[styles.feeRow, { borderBottomWidth: 0.2, borderBottomColor: colors.lineColor }]}>
      <ResponsiveText style={styles.feeLabel}>Network fee</ResponsiveText>
      <ResponsiveText style={[styles.feeLabel, { color: colors.white }]}>{fee} </ResponsiveText>
    </View>
    <View style={styles.feeRow}>
      <ResponsiveText style={styles.feeLabel}>Amount received</ResponsiveText>
      <ResponsiveText style={[styles.feeValue]}>{amountReceived}</ResponsiveText>
    </View>
    <Spacer />
    <View style={{ alignItems: "center" }}>
      <SimpleButton
        text={"Submit"}
        disabled={insufficentBalance ? true : false}
        textColor={insufficentBalance ? colors.buttonSigninColor : colors.black}
        backgroundColor={insufficentBalance ? colors.gray3 : colors.mainColor}
        height={hp(6)}
        buttonWidth={wp(80)}
        onPress={handleSubmit}
      />
    </View>
    <Spacer />
  </View>
);

export const WithDrawConfirmationBottomSheet = ({ props, ref, disabled, address = "0x21505337aa3b5254eb154b", amount = "15.769112", fee = "0.15 USDT", received = "15.7" }) => {


  return (
    <GorhomBottomSheet sheetRef={ref}>
      <View style={styles.confirmContainer}>
        <View style={styles.confirmHeader}>
          <ResponsiveText style={styles.confirmTitle}>WITHDRAWAL CONFIRMATION</ResponsiveText>
          <TouchableOpacity onPress={() => sheetRef.current.close()}>
            <ResponsiveText style={styles.confirmClose}>X</ResponsiveText>
          </TouchableOpacity>
        </View>
        <Spacer />
        <View style={{ paddingHorizontal: wp(5) }}>
          <View style={styles.componentHeader}>
            <View style={styles.confirmItem}>
              <ResponsiveText style={styles.confirmLabel}>Network</ResponsiveText>
              <ResponsiveText style={styles.confirmValue}>ETH-TON</ResponsiveText>
            </View>

            <View style={styles.confirmItem}>
              <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
              <View style={styles.confirmAddressContainer}>
                <ResponsiveText style={styles.confirmValue} numberOfLines={1}>{address}</ResponsiveText>
                <TouchableOpacity >
                  <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.confirmItem}>
              <ResponsiveText style={styles.confirmLabel}>Withdrawal amount</ResponsiveText>
              <ResponsiveText style={styles.confirmValue}>{amount} ETH</ResponsiveText>
            </View>

            <View style={styles.confirmItem}>
              <ResponsiveText style={styles.confirmLabel}>Network fee</ResponsiveText>
              <ResponsiveText style={styles.confirmValue}>{fee}</ResponsiveText>
            </View>

            <View style={styles.confirmItem}>
              <ResponsiveText style={styles.confirmLabel}>Amount received</ResponsiveText>
              <ResponsiveText style={styles.confirmValue}>{received} ETH</ResponsiveText>
            </View>
          </View>
        </View>

        <View style={styles.confirmWarning}>
          <Image source={images.infoCircle} style={styles.confirmWarningIcon} />
          <ResponsiveText style={styles.confirmWarningText}>Please make sure all information above is correct</ResponsiveText>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.WithdrawDetails })}>
          <ResponsiveText style={styles.confirmButtonText}>Confirm</ResponsiveText>
        </TouchableOpacity>

      </View>
    </GorhomBottomSheet>
  );
};
const styles = StyleSheet.create({


  networkIconTop: {
    width: 18,
    height: 18,
    marginRight: 4,
    resizeMode: 'contain',
  },
  networkTextTop: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },
  arrowDownIconTop: {
    width: wp(3.5),
    height: wp(3.5),
    resizeMode: 'contain',
    tintColor: colors.white
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100),
    paddingHorizontal: wp(2)


  },
  headerSide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  headerCenterCustom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconCustom: {
    width: wp(6.5),
    height: wp(6.5),
    resizeMode: "contain"
  },

  headerTitleCustom: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: fontFamily.mainTextMedium
  },
  clockBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockIcon: {
    width: wp(5.5),
    height: wp(5.5),
    resizeMode: 'contain',
  },
  inputContainer: {
    width: wp(100),
    paddingHorizontal: wp(3),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },


  iconButton: {
    position: "absolute",
    right: wp(2.5),
    bottom: wp(7.5),
  },
  copyIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',

  },
  scanIcon: {
    width: wp(5.5),
    height: wp(5.5),
    resizeMode: 'contain',
  },


  currency: {
    color: colors.white,
    fontSize: 15,
    marginHorizontal: 8,
  },
  maxBtn: {
    backgroundColor: colors.authButtonColor,
    width: wp(13),
    height: hp(4),
    borderRadius: wp(5),
    alignItems: "center",
    justifyContent: "center"
  },
  maxText: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 12,
    fontFamily: fontFamily.appTextRegular
  },
  errorText: {
    color: colors.red,
    fontWeight: '400',
    fontSize: 12,
    fontFamily: fontFamily.appTextRegular
  },
  availableText: {
    color: colors.placeHolderTextColor,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },
  feeContainer: {
    backgroundColor: colors.gray2,
    paddingVertical: hp(1),
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    // borderBottomWidth:1,
    // borderBottomColor:colors.lineColor,
    paddingHorizontal: wp(3)
  },
  feeLabel: {
    color: colors.iconColor,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },
  feeValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: fontFamily.appTextMedium
  },
  confirmContainer: {
    width: wp(100),
    // paddingHorizontal:wp(4)

  },
  confirmHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.lineColor,
  },
  confirmTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fontFamily.mainTextBold
  },
  confirmClose: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fontFamily.mainTextBold
  },
  confirmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.lineColor,
  },
  confirmLabel: {
    color: colors.iconColor,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },
  confirmValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: fontFamily.mainTextMedium,

  },
  confirmAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // maxWidth: '60%',
    // marginRight: 28,
  },
  confirmCopyIcon: {
    width: 16,
    height: 16,
    tintColor: colors.copyIcon,
  },
  confirmWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: colors.confirmwarning,
    borderRadius: 8,
    padding: 12,
  },
  confirmWarningIcon: {
    width: 18,
    height: 18,
    tintColor: colors.white,
    marginRight: 8,
  },
  confirmWarningText: {
    color: colors.white,
    fontSize: 13,
  },
  confirmButton: {
    backgroundColor: colors.mainColor,
    borderRadius: 24,
    marginHorizontal: 20,

    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  componentHeader: {
    backgroundColor: colors.InputTextCOlor,
    borderRadius: wp(3),

  },
  availableTextContainer: {
    flexDirection: 'row',
    alignItems: "center"

  },
  USDTText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular

  },

});