
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import styles from './styles';
import { AddressInput, AmountInput, FeeInfo, SubmitButton, WithDrawConfirmationBottomSheet, WithdrawHeader } from './components';
import { Routes } from '../../../constants';
import Spacer from '../../../components/Spacer';
import { UseWidthDraw } from './Hooks';

const WithDraw = (props) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [fee] = useState('0.39');
  const [amountReceived, setAmountReceived] = useState('7.61 EH');
  const [disabled, setDisabled] = useState(true);
  const [available] = useState('0.022 USDT');

  // Calculate amount received when amount changes
  useEffect(() => {
    if (amount && !isNaN(parseFloat(amount))) {
      const received = (parseFloat(amount) - 0.39).toFixed(2);
      setAmountReceived(`${received} ETH`);
    } else {
      setAmountReceived(' ETH');
    }
  }, [amount]);

  const handleBack = () => {
    // Handle navigation back
  };

  const handleScan = () => {
    // Handle QR code scanning
  };

  const handleCopy = () => {
    // Handle address copying
  };

  const handleMax = () => {
    // Set maximum available amount
    setAmount('100');
    setDisabled(false);
    setError('');
  };

  const handleAmountChange = (val) => {
    setAmount(val);
    // Validation logic
    if (parseFloat(val) > 8) {
      setError('Insufficient balance');
      setDisabled(true);
    } else if (val.trim() === '') {
      setDisabled(true);
      setError('');
    } else {
      setError('');
      setDisabled(false);
    }
  };

  const handleSubmit = () => {
    // Handle submission
  };

  const { WithdrawConfirmationRef } = UseWidthDraw()

  return (
    <AuthMainContainer>
      <Spacer />
      <WithdrawHeader BackPress={() => props?.navigation?.goBack()} HistoryPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.DepositHistory })} />
      <AddressInput
        value={address}
        onChange={setAddress}
        onScan={handleScan}
        onCopy={handleCopy}
      />
      <View style={styles.spacer} />
      <FeeInfo handleSubmit={() => WithdrawConfirmationRef?.current?.expand()} fee={fee} amountReceived={amountReceived} />
      <WithDrawConfirmationBottomSheet props={props} ref={WithdrawConfirmationRef} />
    </AuthMainContainer>
  );
};

export default WithDraw;

