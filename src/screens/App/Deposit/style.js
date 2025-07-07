import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../constants'


export const styles = StyleSheet.create({
    tokenListContainer: {
      flex: 1,
      marginBottom: hp(20), 
    },
    checkBox:{
height: wp(4.5),
width: wp(4.5),
marginRight: wp(1.5),
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
    color: colors.white,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: wp(4),
  },
  headerIcon: {
    fontSize: 20,
    color: colors.white,
  },
  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
  },
  portfolioHeader: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  portfolioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  portfolioActions: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: wp(3),
  },
  hideBalances: {
    fontSize: 12,
    color: colors.white,
    marginRight: wp(1.5),
  },
  historyIcon: {
    fontSize: 16,
    color: colors.iconColor,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.InputTextCOlor,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: 8,
  },
  searchText: {
    fontSize: 14,
    color: colors.iconColor,
  },
  searchIcon: {
   height: wp(4.5),
    width: wp(4.5),
   
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonSigninColor,
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
    color: colors.white,
  },
  cryptoInfo: {
    justifyContent: 'center',
  },
  cryptoName: {
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
    color: colors.white
  },
  cryptoFullName: {
    fontSize: 12,
    color: colors.lightGray,
  },
  cryptoRight: {
    alignItems: 'flex-end',
  },
  cryptoAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  cryptoValue: {
    fontSize: 12,
    color: colors.iconColor,
  },
 depositButton: {
    text: "Deposit",
    textColor: colors.white,
    backgroundColor: colors.InputTextCOlor,
    buttonWidth: wp(48),
    borderWidth: 1,
    borderColor: colors.mainColor,
    textFontSize: 16,
    height: hp(6),
    borderRadius: 25,
  },
  withdrawButton: {
    text: "Withdraw",
    textColor: colors.white,
    backgroundColor: colors.mainColor,
    buttonWidth: wp(48),
    textFontSize: 16,
    height: hp(6),
    borderRadius: 25,
  },
});