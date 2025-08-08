
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Platform, TextInput } from 'react-native';
import React from 'react';
import { ResponsiveText } from "../../../../components/ResponsiveText";
import { coinData } from "../../../../utilities/dummyData";
import Spacer, { HorizontalSpacer } from "../../../../components/Spacer";
import images from "../../../../images";
import { colors, Routes } from "../../../../constants"
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import { appStyles } from '../../../../utilities';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/Ionicons';
import Line from '../../../../components/Liner';
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent';
import { PieChart } from 'react-native-gifted-charts';
import BottomSheet from '../../../../components/BottomSheet';


export const DepositWalletShowDetails = ({ openBottomSheet }) => {
  return (

    <View style={[appStyles.row, styles.container]}>
      <View>
        <ResponsiveText style={styles.label}>Total value (BTC)</ResponsiveText>
        <ResponsiveText style={styles.btcValue}>0.2702145</ResponsiveText>
        <ResponsiveText style={styles.usdValue}>= $19,458.89</ResponsiveText>
        <ResponsiveText style={styles.pnl}>Today's PNL <ResponsiveText style={styles.pnlPositive}>+3.33%</ResponsiveText></ResponsiveText>
      </View>

      <TouchableOpacity onPress={openBottomSheet}>
        <Image source={images.pieChart} style={styles.pieChart} />
      </TouchableOpacity>
    </View>
  )
}

export const PortfolioHeader = ({ isChecked, handleCheckboxToggle }) => {
  return (
    <View style={appStyles.row}>
      <ResponsiveText style={styles.portfolioTitle}>PORTFOLIO</ResponsiveText>
      <View style={appStyles.rowBasic}>
        <TouchableOpacity onPress={handleCheckboxToggle} >
          {isChecked ? (
            <FontAwesome5 name="checkbox" size={24} color={colors.mainColor} />
          ) : (
            <Icon name="square" size={24} color={colors.white} />
          )}
        </TouchableOpacity>

        <ResponsiveText style={styles.hideBalances}>Hide 0 Balances</ResponsiveText>
        <Spacer width={wp(2)} />
        <Image source={images.history} style={styles.historyIcon} />
      </View>
    </View>
  )
}

export const TextInputSearch = ({ onChangeText, value , onPress}) => {
  return (
    <View style={styles.containerSearch}>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder="Search..." placeholderTextColor={colors.lightTextColor} />
      <TouchableOpacity onPress={onPress} style={styles.rightIconWrapper}>
        <Image source={images.searchSign} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  )
}

export const TokenList = ({ props, cryptoData }) => {
  return (
    <FlatList
      data={cryptoData}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Line height={hp(0.1)} />}
      removeClippedSubviews={false}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity activeOpacity={0.6} onPress={() => props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.AssetAllocation, params: { data: item } })} style={[appStyles.rowBasic, styles.itemContainer]}>
            <Image source={{ uri: item?.icon }} style={styles.icon} />
            <HorizontalSpacer />
            <View style={styles.coinDetails}>
              <ResponsiveText style={styles.upperText}>{item.symbol}</ResponsiveText>
              <ResponsiveText style={styles.lowerText}>{item.name}</ResponsiveText>
            </View>
            <View style={styles.amountContainer}>
              <ResponsiveText style={styles.upperText}>{item?.account?.amount
                ? item?.account?.amount.toString().includes(".")
                  ? Number(item.account.amount).toFixed(4)
                  : item.account.amount
                : "0"}
              </ResponsiveText>
              <ResponsiveText style={styles.lowerText}>$ {item?.account?.amount
                ? item?.account?.amount.toString().includes(".")
                  ? Number(item.account.amount).toFixed(4)
                  : item.account.amount
                : "0"}
              </ResponsiveText>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export const ChartBottomSheet = ({ bottomSheetRef, closeBottomSheet }) => {
  const pieData = [
    { value: 30, color: '#05BADA' },
    { value: 35, color: '#0B8DA4' },
    { value: 10, color: '#006B7E' },
    { value: 40, color: '#004B58' },
  ];
  return (
    <BottomSheet ref={bottomSheetRef} height={hp(60)}>
      <View style={styles.sheetContainer}>
        <View style={[appStyles.row, styles.headerRow]}>
          <ResponsiveText style={styles.sheetTitle}>ASSETS ALLOCATION</ResponsiveText>
          <TouchableOpacity onPress={closeBottomSheet} style={styles.closeBtn}>
            {/* <ResponsiveText style={styles.closeText}></ResponsiveText> */}
            <Image source={images.closeIcon} style={styles.historyIcon} />
          </TouchableOpacity>
        </View>
        <Line height={hp(0.1)} />
        <View style={{ alignItems: 'center', marginTop: 20, backgroundColor: "transparent" }}>
          <PieChart
            data={pieData}
            showText={false}
            radius={90}
            innerRadius={68}
            innerCircleColor={colors.bottomSheetBackgroundColor}
            centerLabelComponent={() => (
              <View style={{ alignItems: 'center' }}>
                <ResponsiveText style={styles.pieCenterText}>APY</ResponsiveText>
                <ResponsiveText style={styles.pieCenterText2}>127%</ResponsiveText>
              </View>
            )}
          />
        </View>
        <View style={[appStyles.row, styles.legendRow]}>
          <View style={styles.legendMarker} />
          <ResponsiveText style={styles.legendText}>BTC</ResponsiveText>
          <View style={[styles.legendMarker, { backgroundColor: '#0B8DA4' }]} />
          <ResponsiveText style={styles.legendText}>ETH</ResponsiveText>
          <View style={[styles.legendMarker, { backgroundColor: '#006B7E' }]} />
          <ResponsiveText style={styles.legendText}>BTC</ResponsiveText>
          <View style={[styles.legendMarker, { backgroundColor: '#004B58' }]} />
          <ResponsiveText style={styles.legendText}>RTH</ResponsiveText>
        </View>
        <TouchableOpacity style={styles.okBtn} onPress={closeBottomSheet}>
          <ResponsiveText style={styles.okText}>Ok</ResponsiveText>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  // DepositShowDetails
  container: {
    backgroundColor: colors.cardColor3,
    paddingHorizontal: wp(4.5),
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    borderColor: colors.cardBorderColor,
    borderWidth: 1.5,
  },
  label: {
    color: colors.lightTextColor,
    fontSize: 12,
    fontFamily: fontFamily.appTextMedium,
    marginBottom: wp(2),
  },
  btcValue: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fontFamily.mainTextMedium,
  },
  usdValue: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
    marginTop: Platform.OS === 'android' ? wp(2) : wp(0),
  },
  pnl: {
    fontFamily: fontFamily.appTextMedium,
    marginTop: wp(2),
    fontSize: 14,
    color: colors.lightTextColor,
  },
  pnlPositive: {
    color: colors.mainColor,
    fontFamily: fontFamily.mainTextMedium,
    fontSize: 15,
  },
  pieChart: {
    width: wp(18),
    height: wp(18),
    resizeMode: "contain",
  },
  // TokenList
  itemContainer: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(3.5),
  },
  icon: {
    width: wp(9),
    height: wp(9),
    borderRadius: 100
  },
  coinDetails: {
    flex: 1,
  },
  upperText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.mainTextMedium,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  lowerText: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  //asset Allocation
  sheetContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(2),
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    marginBottom: hp(3),
  },
  sheetTitle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fontFamily.mainTextBold,
  },
  pieCenterText: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium
  },
  pieCenterText2: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fontFamily.mainTextMedium
  },
  legendRow: {
    marginTop: hp(3),
    marginVertical: hp(2),
  },
  legendMarker: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(2),
    backgroundColor: '#05BADA',
    marginHorizontal: wp(1.5),
  },
  legendText: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
    marginRight: wp(4),
  },
  okBtn: {
    width: wp(88),
    backgroundColor: colors.transparentBtn,
    borderRadius: wp(16),
    alignItems: 'center',
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  okText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  portfolioTitle: {
    fontSize: 24,
    fontFamily: fontFamily.mainTextMedium,
    color: colors.white,
    fontWeight: "500"
  },
  hideBalances: {
    paddingLeft: wp(1.5),
    paddingRight: wp(1.5),
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
  },
  historyIcon: {
    width: wp(5.5),
    height: wp(5.5),
    color: colors.white,
    resizeMode: "contain",
  },
  containerSearch: {
    ...appStyles.rowBasic,
    alignSelf: 'center',
    backgroundColor: colors.inputBgColor,
    borderRadius: wp(3),
    height: hp(6.5),
    width: wp(93),
    paddingHorizontal: wp(4),
    borderColor: colors.borderColor,
    borderWidth: 1.5,
  },
  rightIconWrapper: {
    paddingHorizontal: wp(2),
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
  iconRight: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    tintColor: colors.mainColor,
  },
});
