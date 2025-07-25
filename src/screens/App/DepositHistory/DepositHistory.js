import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ResponsiveText } from "../../../components/ResponsiveText"
import { colors } from "../../../constants"
import { AuthMainContainer } from '../../../components/authMainContainer'
import { hp, wp } from "../../../components/ResponsiveComponent"
import { useNavigation } from '@react-navigation/native'
import images from '../../../images'
import { AllCryptoFilterBotomSheet, CryptoFilterModal, DepositFilterHeader, DepositHistoryComponent, StatusFilterBottomSheet, StatusFilterModal } from './components'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import { UseDepositHstory } from './Hooks/Index'
import { Portal } from 'react-native-portalize'

const DepositHistory = (props) => {
  const { allCryptoFilterRef, StatusRef, cryptoData, statusData, SetSelectedSymbol, selectedSymbol, selectedStatus, SetSelectedStatus } = UseDepositHstory()
  return (
    <AuthMainContainer  >
      <View style={{ paddingHorizontal: wp(5) }}>
        <MainHeader onBackPress={()=>props?.navigation?.goBack()} title={"Deposit History"} leftImage={images.backArrow} rightImage={images.infoIcon} />
      </View>
      <Spacer height={hp(4)} />
      <DepositFilterHeader
        SelectedStatus={selectedStatus}
        statusPress={() => StatusRef?.current?.expand()}
        SelectedSymbol={selectedSymbol}
        AllCryptoPress={() => allCryptoFilterRef?.current?.expand()}

      />

      <DepositHistoryComponent />
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


      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Image source={images.backArrow} style={styles.backIcon} resizeMode="contain" />
        </TouchableOpacity>
        <ResponsiveText style={styles.headerTitle}>DEPOSIT HISTORY</ResponsiveText>
        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoIconContainer}>
            <Image style={styles.infoIcon}
              source={images.infoIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setShowCryptoModal(true)}>
          <ResponsiveText style={styles.filterButtonText}>{selectedCrypto}</ResponsiveText>
          <Image 
            source={images.depositFilter}
            style={styles.filterIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterButton}>
          <ResponsiveText style={styles.filterButtonText}>Date</ResponsiveText>
          <Image 
            source={images.depositFilter}
            style={styles.filterIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterButton} onPress={() => setShowStatusModal(true)}>
          <ResponsiveText style={styles.filterButtonText}>{selectedStatus}</ResponsiveText>
          <Image 
            source={images.depositFilter}
            style={styles.filterIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      
      <CryptoFilterModal 
        visible={showCryptoModal} 
        onClose={() => setShowCryptoModal(false)}
        onSelectCrypto={(crypto) => setSelectedCrypto(crypto)}
        selectedCrypto={selectedCrypto}
        onSwitchToStatus={() => {
          setShowCryptoModal(false);
          setTimeout(() => setShowStatusModal(true), 300);
        }}
      />
      
      <StatusFilterModal
        visible={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        onSelectStatus={(status) => setSelectedStatus(status)}
        selectedStatus={selectedStatus}
        onSwitchToCrypto={() => {
          setShowStatusModal(false);
          setTimeout(() => setShowCryptoModal(true), 300);
        }}
      />

      <View style={styles.emptyStateContainer}>
        <Image 
          source={images.union}
          style={styles.emptyStateIcon}
          resizeMode="contain"
        />
        <ResponsiveText style={styles.noResultsText}>No results found</ResponsiveText>
        <ResponsiveText style={styles.emptyStateMessage}>
          Try changing your filter to show your recent transactions
        </ResponsiveText>
      </View> */}
    </AuthMainContainer>
  )
}

export default DepositHistory
