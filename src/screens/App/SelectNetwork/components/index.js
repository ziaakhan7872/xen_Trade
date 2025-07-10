import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { useNavigation, useRoute } from '@react-navigation/native';
import images from '../../../../images';
import { colors, Routes } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';

// Network Icon Component
const NetworkIcon = ({ source, name }) => (
  <View style={styles.networkIconContainer}>
    <Image 
      source={source} 
      style={styles.networkIcon} 
      resizeMode="contain"
      onError={() => {
       
        console.log(`Failed to load icon for ${name}`);
      }}
    />
  </View>
);

// Header component for SelectNetwork
export const SelectNetworkHeader = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Image 
          source={images.backArrow}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ResponsiveText style={styles.headerTitle}>SELECT NETWORK</ResponsiveText>
      <View style={styles.headerSpacer} />
    </View>
  );
};

// Network list component
export const NetworkList = () => {

  const navigation = useNavigation();

  
  // Network data with their respective icons
  const networks = [
    {
      id: '1',
      name: 'Tron (TRC20)',
      icon: images.tron,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '2',
      name: 'Ethereum (ERC20)',
      icon: images.EthLogo,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '3',
      name: 'X Layer',
      icon: images.EthLogo, // Using ETH as placeholder for X Layer
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '4',
      name: 'Aptos',
      icon: images.aptos,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '5',
      name: 'Arbitrum One',
      icon: images.arbitrum,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '6',
      name: 'Avalanche C-Chain',
      icon: images.AvaxLogo,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '7',
      name: 'Optimism',
      icon: images.optimism,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    },
    {
      id: '8',
      name: 'Polygon',
      icon: images.polygon,
      minDeposit: '0.01 USDT',
      arrivalTime: '~1 minutes'
    }
  ];

  const handleNetworkSelect = () => {
    // Navigate to Barcode screen with selected network and crypto data
    navigation.navigate(Routes.AppNavigator, {
      screen: Routes.Barcode,
     
    });
  };

  const renderNetworkItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.networkItem}
      onPress={() => handleNetworkSelect()}
    >
      <NetworkIcon source={item.icon} name={item.name} />
      <View style={styles.networkDetails}>
        <ResponsiveText style={styles.networkName}>{item.name}</ResponsiveText>
        <ResponsiveText style={styles.networkInfo}>
          Minimum deposit: {item.minDeposit}
        </ResponsiveText>
        <ResponsiveText style={styles.networkInfo}>
          Est arrival in {item.arrivalTime}
        </ResponsiveText>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={networks}
      keyExtractor={item => item.id}
      renderItem={renderNetworkItem}
      style={styles.networkList}
      contentContainerStyle={styles.networkListContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingTop: hp(1),
    width: '100%',
  },
  backButton: {
    padding: wp(1),
  },
  backIcon: {
    width: wp(6),
    height: hp(2.5),
    tintColor: colors.white,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextBold,
    textAlign: 'center',
  },
  headerSpacer: {
    width: wp(8), // Balance the header
  },
  networkList: {
    flex: 1,
    paddingHorizontal: wp(4),
    width: '100%',
  },
  networkListContent: {
    paddingBottom: hp(5),
  },
  networkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonSigninColor,
    width: '100%',
  },
  networkIconContainer: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: colors.InputTextCOlor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  networkIcon: {
    width: wp(8),
    height: wp(8),
  },
  networkDetails: {
    flex: 1,
  },
  networkName: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    marginBottom: hp(0.3),
  },
  networkInfo: {
    fontSize: 12,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
    marginBottom: hp(0.1),
  },
  arrowIcon: {
    width: wp(4),
    height: hp(2),
    tintColor: colors.iconColor,
  },
};