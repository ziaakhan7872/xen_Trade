
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
import Navigation from '../../../../navigation';


export const DepositWalletShowDetails = () => {
  const [showAssetSheet, setShowAssetSheet] = useState(false);
  const assetSheetRef = useRef(null);

  const handleAssetOpen = () => {
    setShowAssetSheet(true);
    setTimeout(() => {
      assetSheetRef.current?.open();
    }, 100);
  };

  const handleAssetClose = () => {
    setShowAssetSheet(false);
    assetSheetRef.current?.close();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <ResponsiveText style={styles.label}>Total value (BTC)</ResponsiveText>
          <ResponsiveText style={styles.btcValue}>0.2702145</ResponsiveText>
          <ResponsiveText style={styles.usdValue}>= $19,458.89</ResponsiveText>
          <ResponsiveText style={styles.pnl}>Today's PNL <ResponsiveText style={styles.pnlPositive}>+3.33%</ResponsiveText></ResponsiveText>
        </View>
        <View style={styles.chartContainer}>
          <TouchableOpacity onPress={handleAssetOpen}>
            <Image
              source={images.DepositLogo}
              style={styles.chartIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet ref={assetSheetRef} height={hp(45)}>
        <AssetAllocation onClose={handleAssetClose} />
      </BottomSheet>
    </>
  );
};
// Asset Allocation BottomSheet Component
const AssetAllocation = ({ onClose }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.sheetContainer}>
      <View style={styles.headerRow}>
        <ResponsiveText style={styles.sheetTitle}>ASSETS ALLOCATION</ResponsiveText>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <ResponsiveText style={styles.closeText}>×</ResponsiveText>
        </TouchableOpacity>
      </View>
      <View style={styles.doughnutContainer}>
        <Image source={images.doughnutChart} style={styles.doughnutImg} resizeMode="contain" />
      </View>
      <View style={styles.legendRow}>
        <View style={styles.legendDot} />
        <ResponsiveText style={styles.legendText}>BTC</ResponsiveText>
        <View style={styles.legendDot3}  />
        <ResponsiveText style={styles.legendText}>ETH</ResponsiveText>
        <View style={styles.legendDot2} />
        <ResponsiveText style={styles.legendText}>BTC</ResponsiveText>
        <View style={styles.legendDot1} />
        <ResponsiveText style={styles.legendText}>RTH</ResponsiveText>
      </View>
      <TouchableOpacity style={styles.okBtn} onPress={() => navigation.navigate(Routes.AppNavigator, { screen: Routes.AssetAllocation })}>
        <ResponsiveText style={styles.okText}>Ok</ResponsiveText>
      </TouchableOpacity>
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

export const useDepositNavigation = () => {
  const navigation = useNavigation();
  
  const handleDepositPress = () => {
    navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectCrypto });
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
   //asset Allocation
  sheetContainer: {
    backgroundColor: colors.bottomSheetBackgroundColor,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(2),
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: hp(2),
  },
  sheetTitle: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.appTextBold,
  },
  closeBtn: {
    padding: wp(2),
  },
  closeText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  doughnutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
  doughnutImg: {
    width: wp(32),
    height: wp(32),
  },
  apyCenter: {
    position: 'absolute',
    top: '38%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  apyLabel: {
    color: colors.iconColor,
    fontSize: 13,
    fontFamily: fontFamily.appTextRegular,
  },
  apyValue: {
    color: colors.mainColor,
    fontSize: 22,
    fontFamily: fontFamily.appTextBold,
    marginTop: 2,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.dot3,
    marginHorizontal: 6,
  },
   legendDot1: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.dot1,
    marginHorizontal: 6,
  }, legendDot3: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.dot3,
    marginHorizontal: 6,
  }, legendDot2: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.dot2,
    marginHorizontal: 6,
  },
  legendText: {
    color: colors.iconColor,
    fontSize: 13,
    fontFamily: fontFamily.appTextRegular,
    marginRight: 10,
  },
  okBtn: {
    width: wp(90),
    backgroundColor: colors.buttonSigninColor,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: hp(1.5),
    marginTop: hp(2),
  },
  okText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
});
