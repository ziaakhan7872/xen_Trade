
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
    address, setAddress,
    amount, setAmount,
    fee, setFee,
    error, setError,
    amountReceived, setAmountReceived,
    cryptoData, network,
    handleSubmit


  } = UseWidthDraw(props)

  return (
    <AuthMainContainer>
      <Spacer />
      <WithdrawHeader NetworkImage={network} BackPress={() => props?.navigation?.goBack()} HistoryPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
      <Spacer />
      <AddressInput
        cryptoData={cryptoData} Network={network}
        address={address} setAddress={setAddress}
        amount={amount} setAmount={setAmount}
        error={error} setError={setError}

      />
      <View style={styles.spacer} />
      <FeeInfo
        cryptoData={cryptoData}
        handleSubmit={() => WithdrawConfirmationRef?.current?.expand()}
        fee={fee}
        amount={amount}
        error={error}
      />
      <Portal>
        <WithDrawConfirmationBottomSheet
          address={address}
          amount={amount}
          Network={network}
          cryptData={cryptoData}
          handleSubmit={handleSubmit}
          ref={WithdrawConfirmationRef}

        />
      </Portal>
    </AuthMainContainer>
  );
};

export default WithDraw;

