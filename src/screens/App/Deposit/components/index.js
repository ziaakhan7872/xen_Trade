
import WalletHome from "../WalletHome";
// import images from '../../../images';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ResponsiveText } from "../../../../components/ResponsiveText";
import { coinData } from "../../../../utilities/dummyData";
import Spacer from "../../../../components/Spacer";
import images from "../../../../images";

export {
     WalletHome
}

const DepositWalletShowDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Total value (BTC)</Text>
        <Text style={styles.btcValue}>0.2702145</Text>
        <Text style={styles.usdValue}>= $19,458.89</Text>
        <Text style={styles.pnl}>Today's PNL <Text style={styles.pnlPositive}>+3.33%</Text></Text>
      </View>
      <Image
        source={images.DepositLogo}
        style={styles.icon}
        resizeMode="contain"
      />
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
          data={coinData}
          showsVerticalScrollIndicator={false}
          itemContainerStyle={() => <Spacer/>}
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




export const styles = StyleSheet.create({
     // DepositShowDetails
    container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#021C24', 
    padding: 20,
    borderRadius: 12,
    margin: 10,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: '#85A8AE',
    fontSize: 12,
    marginBottom: 4,
  },
  btcValue: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  usdValue: {
    color: '#85A8AE',
    fontSize: 14,
    marginTop: 4,
  },
  pnl: {
    marginTop: 4,
    fontSize: 14,
    color: '#85A8AE',
  },
  pnlPositive: {
    color: '#05BADA', 
    fontWeight: 'bold',
  },
  iconPercent: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  // TokenList
  container: {
    backgroundColor: '#0e1a22',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#1c2b34',
    borderBottomWidth: 1,
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
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  name: {
    color: '#a0a0a0',
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  value: {
    color: '#a0a0a0',
    fontSize: 12,
  }

});
