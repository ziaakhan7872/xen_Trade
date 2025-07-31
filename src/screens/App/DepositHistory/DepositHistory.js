import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { hp, wp } from "../../../components/ResponsiveComponent"
import images from '../../../images'
import { AllCryptoFilterBotomSheet, DepositFilterHeader, DepositHistoryComponent, StatusFilterBottomSheet, StatusFilterModal } from './components'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import { UseDepositHstory } from './Hooks/Index'
import { Portal } from 'react-native-portalize'

const DepositHistory = (props) => {
  const { allCryptoFilterRef, StatusRef, cryptoData, statusData, SetSelectedSymbol, selectedSymbol, selectedStatus, SetSelectedStatus } = UseDepositHstory()
  return (
    <AuthMainContainer  >
      <View style={{ paddingHorizontal: wp(5) }}>
        <MainHeader onBackPress={() => props?.navigation?.goBack()} title={"DEPOSIT HISTORY"} leftImage={images.backArrow} rightImage={images.infoIcon} />
      </View>
      <Spacer height={hp(4)} />
      <DepositFilterHeader
        SelectedStatus={selectedStatus}
        statusPress={() => StatusRef?.current?.expand()}
        SelectedSymbol={selectedSymbol}
        AllCryptoPress={() => allCryptoFilterRef?.current?.expand()}

      />
      <Spacer height={hp(4)} />

      <DepositHistoryComponent props={props} />
      <AllCryptoFilterBotomSheet
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

export default DepositHistory
