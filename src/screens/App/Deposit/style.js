import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({

    depositButton:{
        text: "Deposit",
        backgroundColor: "#021C24",
        textColor: "#05BADA",
        buttonWidth: wp(42),
        borderWidth: 1,
        borderColor: "#05BADA",
        onPress: () => {}
    },
    withdrawButton:{
        text: "Withdraw",
        backgroundColor: "#021C24",
        textColor: "#FFFFFF",
        buttonWidth: wp(42),
        onPress: () => {}
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(2),
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: wp(4),
  },
  headerIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portfolioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portfolioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#85A8AE',
  },
  portfolioActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
  },
  hideBalances: {
    fontSize: 12,
    color: '#05BADA',
  },
  historyIcon: {
    fontSize: 16,
    color: '#85A8AE',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#021C24',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: 8,
  },
  searchText: {
    fontSize: 14,
    color: '#85A8AE',
  },
  searchIcon: {
    fontSize: 16,
    color: '#85A8AE',
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#1A3D47',
  },
  cryptoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
  },
  cryptoIconText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  cryptoInfo: {
    justifyContent: 'center',
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cryptoFullName: {
    fontSize: 12,
    color: '#85A8AE',
  },
  cryptoRight: {
    alignItems: 'flex-end',
  },
  cryptoAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cryptoValue: {
    fontSize: 12,
    color: '#85A8AE',
  }
}
)