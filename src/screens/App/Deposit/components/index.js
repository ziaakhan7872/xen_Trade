
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { ResponsiveText } from "../../../../components/ResponsiveText";
import { coinData } from "../../../../utilities/dummyData";
import Spacer from "../../../../components/Spacer";
import images from "../../../../images";
import { colors, Routes } from "../../../../constants"
import { useNavigation } from "@react-navigation/native"
import { hp } from '../../../../components/ResponsiveComponent';

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
        <Image
          source={images.DepositLogo}
          style={styles.chartIcon}
          resizeMode="contain"
        />
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
//     </View>
//     <View style={styles.amountContainer}>
//       <ResponsiveText style={styles.amount}>{item.amount}</ResponsiveText>
//       <ResponsiveText style={styles.value}>{item.value}</ResponsiveText>
//     </View>
//   </View>
// );

export const TokenList = ({}) => {
    return (
        <FlatList 
          data={[...coinData, ...coinData]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            paddingBottom: hp(20),  
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
    navigation.navigate(Routes.DepositHistory);
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
  }

});
