import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../../components/authMainContainer'
import { useNavigation } from '@react-navigation/native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors } from '../../../../constants';



export const WithdrawDetailsHeader = () => {
   const navigation = useNavigation();
  return(

  <View style={styles.headerContainer}>
    <View style={styles.headerSide}>
      <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.backBtn}>
        <Image source={images.backArrow} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
    <View style={styles.headerCenterCustom}>
      <ResponsiveText style={styles.headerTitleCustom}>WITHDRAWAL DETAILS</ResponsiveText>
    </View>
    
  </View>
);
};


export const ProgressWithdraw= () => {
  return (
    <View style={styles.progressContainer}>
      <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
      <ResponsiveText style={styles.progressAmountValue}>-15.619111 ETH</ResponsiveText>
      <View style={styles.progressStepsBox}>
        <View style={styles.progressStepRow}>
          <Image source={images.tickBoxes} style={styles.progressStepIconActive} />
          <View style={styles.progressStepTextBox}>
            <ResponsiveText style={styles.progressStepTitleActive}>Withdrawal request submitted</ResponsiveText>
            <ResponsiveText style={styles.progressStepDate}>09/01/2024, 21:19:27</ResponsiveText>
          </View>
        </View>
        <View style={styles.progressStepRow}>
          <Image source={images.tickBoxes} style={styles.progressStepIconActive} />
          <View style={styles.progressStepTextBox}>
            <ResponsiveText style={styles.progressStepTitleActive}>Pending</ResponsiveText>
            <ResponsiveText style={styles.progressStepDesc}>You have one minute to cancel</ResponsiveText>
          </View>
        </View>
        <View style={styles.progressStepRow}>
          <Image source={images.tickBoxes} style={styles.progressStepIconInactive} />
          <View style={styles.progressStepTextBox}>
            <ResponsiveText style={styles.progressStepTitleInactive}>In progress</ResponsiveText>
          </View>
        </View>
        <View style={styles.progressStepRow}>
          <Image source={images.tickBoxes} style={styles.progressStepIconInactive} />
          <View style={styles.progressStepTextBox}>
            <ResponsiveText style={styles.progressStepTitleInactive}>Sent</ResponsiveText>
          </View>
        </View>
      </View>
    </View>
  );
};


export const WithdrawDetailsContainer = () => {
  return (
     
          
        <View style={styles.componentHeader}>
          <View style={styles.confirmItem}>

            <ResponsiveText style={styles.confirmLabel}>Blockchain</ResponsiveText>
            <ResponsiveText style={styles.confirmValue}>TON</ResponsiveText>
          </View>
          
          <View style={styles.confirmItem}>
            <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
            <View style={styles.confirmAddressContainer}>
              <ResponsiveText style={styles.confirmValue} numberOfLines={1}>0x21505337aa3b5254eb154b8...</ResponsiveText>
              <TouchableOpacity style={{padding: 4}}>
                <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.confirmItem}>
            <ResponsiveText style={styles.confirmLabel}>Network fee</ResponsiveText>
            <ResponsiveText style={styles.confirmValue}>0.15 USDT</ResponsiveText>
          </View>
          
          <View style={styles.confirmItem}>
            <ResponsiveText style={styles.confirmLabel}>Time</ResponsiveText>
            <ResponsiveText style={styles.confirmValue}>09/01/2024, 21:19:27</ResponsiveText>
          </View>
          
          <View style={styles.confirmItem}>
            <ResponsiveText style={styles.confirmLabel}>Reference no.</ResponsiveText>
            <ResponsiveText style={styles.confirmValue}>227491076</ResponsiveText>
          </View>
          </View>
         
  );
};

export const WithDrawBtn= () => {

  return (
    <TouchableOpacity style={styles.confirmButton} >
               <ResponsiveText style={styles.confirmButtonText}>Cancel Withdrawal</ResponsiveText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
   
  },
  headerSide: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  headerCenterCustom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  
  headerTitleCustom: {
    color: '#fff',
    fontSize: 18,
  },
  progressContainer: {
    margin: 20,
    backgroundColor: colors.progressContainer,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },
  progressAmountLabel: {
    color: colors.amountLabel,
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  progressAmountValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },
  progressStepsBox: {
    width: '100%',
  
    paddingHorizontal: wp(10),
  },
  progressStepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  progressStepIconActive: {
    width: 22,
    height: 22,

    marginRight: 12,
    marginTop: 2,
  },
  progressStepIconInactive: {
    width: 22,
    height: 22,
    tintColor: colors.authButtonColor,
    marginRight: 12,
    marginTop: 2,
  },
  progressStepTextBox: {
    flex: 1,
  },
  progressStepTitleActive: {
    color: '#fff',
    fontSize: 15,
 
  },
  progressStepTitleInactive: {
    color: colors.lightTextColor,
    fontSize: 15,
 
  },
  progressStepDate: {
    color: colors.lightTextColor,
    fontSize: 13,
    marginTop: 2,
  },
  progressStepDesc: {
    color: colors.lightTextColor,
    fontSize: 13,
    marginTop: 2,
  },
 
  confirmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderBottomColor,
  },
  confirmLabel: {
    color: colors.amountLabel,
    fontSize: 14,
  },
  confirmValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
   componentHeader:{
   margin: 20,
    backgroundColor: colors.cardBorderColor,
    borderRadius: 12,
    marginTop:hp(1),
  },
  confirmCopyIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    tintColor: colors.copyIcon,
  },
    confirmAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '60%',
    marginRight: 28,
  },
   confirmButton: {
    backgroundColor: colors.mainColor,
    borderRadius: 24,
    marginHorizontal: 20,
    marginVertical: hp(9),
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
})