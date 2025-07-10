import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ResponsiveText } from "../../../components/ResponsiveText"
import { colors } from "../../../constants"
import { AuthMainContainer } from '../../../components/authMainContainer'
import { hp, wp } from "../../../components/ResponsiveComponent"
import { useNavigation } from '@react-navigation/native'
import images from '../../../images'
import { CryptoFilterModal, StatusFilterModal } from './components'

const DepositHistory = () => {
  const navigation = useNavigation();
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState('All crypto');
  const [selectedStatus, setSelectedStatus] = useState('All statuses');

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <AuthMainContainer  >
      {/* Header */}
      <View style={styles.header}>
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

      {/* Filters */}
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
      
      {/* Crypto Filter Modal */}
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
      
      {/* Status Filter Modal */}
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

      {/* Empty state */}
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
      </View>
    </AuthMainContainer>
  )
}

export default DepositHistory
