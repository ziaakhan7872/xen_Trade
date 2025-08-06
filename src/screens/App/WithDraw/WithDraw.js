
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { AddressInput, AmountInput, FeeInfo, SubmitButton, WithDrawConfirmationBottomSheet, WithdrawHeader } from './components';
import { Routes } from '../../../constants';
import Spacer from '../../../components/Spacer';
import { UseWidthDraw } from './Hooks';
import { Portal } from 'react-native-portalize';
import { Camera } from 'react-native-vision-camera';
import { styles } from './styles';

const WithDraw = (props) => {

  const {
    WithdrawConfirmationRef,
    address, setAddress,
    amount, setAmount,
    fee, setFee,
    error, setError,
    walletAddressError, setWalletAddressError,
    amountReceived, setAmountReceived,
    cryptoData, network,
    handleSubmit, handleCopy, validateAddress,
    apiError, setApiError,
    setCameraActive, cameraActive, codeScanner,
    device

  } = UseWidthDraw(props)

  return (
    <AuthMainContainer>
      <Spacer />
      <WithdrawHeader NetworkImage={network} BackPress={() => props?.navigation?.goBack()} HistoryPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.WithdrawHistory })} />
      <Spacer />
      <AddressInput
        onScan={() => setCameraActive(!cameraActive)}
        walletAddressError={walletAddressError} setWalletAddressError={setWalletAddressError}
        validateAddress={validateAddress}
        cryptoData={cryptoData} Network={network}
        address={address} setAddress={setAddress}
        amount={amount} setAmount={setAmount}
        error={error} setError={setError}
      />

      <View style={styles.spacer} />
      <FeeInfo
        address={address}
        cryptoData={cryptoData}
        handleSubmit={() => WithdrawConfirmationRef?.current?.expand()}
        fee={fee}
        amount={amount}
        error={error}
        walletAddressError={walletAddressError}
      />
      <Portal>
        <WithDrawConfirmationBottomSheet
          apiError={apiError}
          handleCopy={handleCopy}
          address={address}
          amount={amount}
          Network={network}
          cryptData={cryptoData}
          handleSubmit={handleSubmit}
          ref={WithdrawConfirmationRef}
        />
        {cameraActive && (
          <View style={StyleSheet.absoluteFill}>
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              codeScanner={codeScanner}
            />

            {/* Optional: Add a semi-transparent overlay with close button */}
            <View style={styles.overlay}>
              <View style={styles.closeButtonContainer}>
                <Text style={styles.closeText} onPress={() => setCameraActive(false)}>X</Text>
              </View>
            </View>
          </View>
        )}
      </Portal>
    </AuthMainContainer>
  );
};

export default WithDraw;

