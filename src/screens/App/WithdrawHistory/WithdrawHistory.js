import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { hp, wp } from "../../../components/ResponsiveComponent"
import images from '../../../images'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import { Portal } from 'react-native-portalize'
import { Usewithdrawhistory } from './Hook/Index'
import { AllCryptoFilterBotomSheet, DepositFilterHeader, DepositHistoryComponent, StatusFilterBottomSheet } from './Component/Index'

const WithdrawHistory = (props) => {
  const { 
    allCryptoFilterRef, StatusRef, 
    cryptoData,  statusData, 
    SetSelectedSymbol, selectedSymbol, 
    selectedStatus, SetSelectedStatus ,
    withdrawHistory,
    selectedHeaderButton,setSelectedHeaderButton,
    searchCoin,setSearchCoin
} = Usewithdrawhistory()
  return (
    <AuthMainContainer  >
      <View style={{ paddingHorizontal: wp(5) }}>
        <MainHeader onBackPress={() => props?.navigation?.goBack()} title={"Withdraw HISTORY"} leftImage={images.backArrow} rightImage={images.infoIcon} />
      </View>
      <Spacer height={hp(4)} />
      <DepositFilterHeader
        SelectedStatus={selectedStatus}
        statusPress={() => {
            StatusRef?.current?.expand()
            setSelectedHeaderButton("status")
        }}
        SelectedSymbol={selectedSymbol}
        AllCryptoPress={() => {
            setSelectedHeaderButton("crypto")
            allCryptoFilterRef?.current?.expand()}}

      />
      <Spacer height={hp(4)} />

      <DepositHistoryComponent  HistoryData={withdrawHistory} props={props} />
      <AllCryptoFilterBotomSheet
      searchCoin={searchCoin} setSearchCoin={setSearchCoin}
        selectedStatus={selectedStatus}
        setSelectedSymbol={SetSelectedSymbol}
        SelectedSymbol={selectedSymbol}
        AllCryptoFilter={cryptoData}
        ref={allCryptoFilterRef}
        statusPress={() => {
          allCryptoFilterRef?.current?.close()
          setTimeout(() => {
            StatusRef?.current?.expand()
          }, 300);
        }}
        closeBottomSheet={() => allCryptoFilterRef?.current?.close()}

      />
      <Portal>
        <StatusFilterBottomSheet
          setSelectedStatus={SetSelectedStatus}
          selectedStatus={selectedStatus}
          SelectedSymbol={selectedSymbol}
          StatusData={statusData}
          ref={StatusRef}
          AllCryptoPress={() => {
            StatusRef?.current?.close()
            setTimeout(() => {
              allCryptoFilterRef?.current?.expand()
            }, 300);
          }}
          closeBottomSheet={() => StatusRef?.current?.close()}
        />
      </Portal>
    </AuthMainContainer >
  )
}

export default WithdrawHistory
