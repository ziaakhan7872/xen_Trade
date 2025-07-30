
import React, { useState } from 'react';
import { View } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import styles from './styles';
import { AddressInput, AmountInput, FeeInfo, SubmitButton, WithDrawConfirmationBottomSheet, WithdrawHeader } from './components';
import { Routes } from '../../../constants';
import Spacer from '../../../components/Spacer';
import { UseWidthDraw } from './Hooks';
import { Portal } from 'react-native-portalize';

const WithDraw = (props) => {

  const {
     WithdrawConfirmationRef,
     address,setAddress,
     amount,setAmount ,
     fee,setFee,
     error,setError,
     amountReceived,setAmountReceived,
      cryptoData, network

    } = UseWidthDraw(props)

  return (
    <AuthMainContainer>
      <Spacer />
      <WithdrawHeader NetworkImage={network} BackPress={() => props?.navigation?.goBack()} HistoryPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
      <Spacer />
      <AddressInput
      Network={network}
        value={address}
        onChange={setAddress}
       
      />
      <View style={styles.spacer} />
      <FeeInfo handleSubmit={() => WithdrawConfirmationRef?.current?.expand()} fee={fee} amountReceived={amountReceived} />
      <Portal>
        <WithDrawConfirmationBottomSheet handleSubmit={() => props?.navigation?.navigate?.(Routes.WithdrawDetails)} ref={WithdrawConfirmationRef} />
      </Portal>
    </AuthMainContainer>
  );
};

export default WithDraw;

