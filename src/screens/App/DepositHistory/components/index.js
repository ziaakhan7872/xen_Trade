// import React, { useState } from 'react';
// import { View, Modal, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
// import { ResponsiveText } from "../../../../components/ResponsiveText";
// import { colors } from "../../../../constants";
// import { hp, wp } from "../../../../components/ResponsiveComponent";
// import { StyleSheet } from 'react-native';
// import { fontFamily } from '../../../../constants/fonts';
// import images from '../../../../images'

// // Status data for the filter
// const statusData = [
//   { id: '1', name: 'All statuses' },
//   { id: '2', name: 'In progress' },
//   { id: '3', name: 'Received' },
//   { id: '4', name: 'Others' },
// ];

// // Cryptocurrency data for the filter
// const cryptoData = [
//   { id: '1', name: 'All crypto', symbol: 'ALL' },
//   { id: '2', name: 'USDT', symbol: 'USDT' },
//   { id: '3', name: 'BTC', symbol: 'BTC' },
//   { id: '4', name: 'ETH', symbol: 'ETH' },
//   { id: '5', name: 'XRP', symbol: 'XRP' },
//   { id: '6', name: 'BSV', symbol: 'BSV' },
//   { id: '7', name: 'INCH', symbol: 'INCH' },
//   { id: '8', name: 'LTC', symbol: 'LTC' },
//   { id: '9', name: 'OKX', symbol: 'OKX' },
//   { id: '10', name: 'OKB', symbol: 'OKB' },
//   { id: '11', name: 'LTC', symbol: 'LTC' },
// ];

// export const CryptoFilterModal = ({ 
//   visible, 
//   onClose, 
//   onSelectCrypto, 
//   selectedCrypto = 'All crypto',
//   onSwitchToStatus 
// }) => {
//   const [searchText, setSearchText] = useState('');
//   const [filteredData, setFilteredData] = useState(cryptoData);

//   // Handle search input
//   const handleSearch = (text) => {
//     setSearchText(text);
//     if (text) {
//       const filtered = cryptoData.filter(
//         item => item.name.toLowerCase().includes(text.toLowerCase()) || 
//                item.symbol.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(cryptoData);
//     }
//   };

//   // Render each crypto item
//   const renderItem = ({ item }) => {
//     const isSelected = selectedCrypto === item.name;

//     return (
//       <TouchableOpacity 
//         style={styles.cryptoItem} 
//         onPress={() => {
//           onSelectCrypto(item.name);
//           onClose();
//         }}
//       >
//         <ResponsiveText style={styles.cryptoItemText}>{item.name}</ResponsiveText>
//         {isSelected && (
//           <View style={styles.checkmarkContainer}>
//             <Image 
//               source={images.tickBoxes}
//               style={styles.filterIcon}
//               resizeMode="contain"
//             />
//           </View>
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContainer}>
//           {/* Header */}
//           <View style={styles.modalHeader}>
//             <ResponsiveText style={styles.modalTitle}>ALL CRYPTO</ResponsiveText>
//             <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//               <ResponsiveText style={styles.closeButtonText}>✕</ResponsiveText>
//             </TouchableOpacity>
//           </View>

//           {/* Filter bar - same as main screen for visual consistency */}
//           <View style={styles.filterBar}>
//             <TouchableOpacity style={[styles.filterButton]}>
//               <ResponsiveText style={styles.activeFilterText}>All crypto</ResponsiveText>
//               <Image
//                 source={images.activeFilter}
//                 style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.filterButton}>
//               <ResponsiveText style={styles.filterButtonText}>Date</ResponsiveText>
//               <Image 
//                 source={images.depositFilter}
//                 style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.filterButton}
//               onPress={() => {
//                 onClose();
//                 if (onSwitchToStatus) {
//                   onSwitchToStatus();
//                 }
//               }}
//             >
//               <ResponsiveText style={styles.filterButtonText}>Status</ResponsiveText>
//               <Image 
//                 source={images.depositFilter}
//                 style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Search box */}
//           <View style={styles.searchContainer}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search..."
//               placeholderTextColor={colors.iconColor}
//               value={searchText}
//               onChangeText={handleSearch}
//             />
//             <TouchableOpacity style={styles.searchIconButton}>
//            <Image 
//           source={images.searchSign}
//           style={styles.searchIcon}
//           resizeMode="contain"
//         />
//             </TouchableOpacity>
//           </View>

//           {/* Crypto list */}
//           <FlatList
//             data={filteredData}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//             style={styles.listContainer}
//             ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// // Status Filter Modal Component
// export const StatusFilterModal = ({ 
//   visible, 
//   onClose, 
//   onSelectStatus, 
//   selectedStatus = 'All statuses',
//   onSwitchToCrypto 
// }) => {
//   const [searchText, setSearchText] = useState('');
//   const [filteredData, setFilteredData] = useState(statusData);

//   // Handle search input
//   const handleSearch = (text) => {
//     setSearchText(text);
//     if (text) {
//       const filtered = statusData.filter(
//         item => item.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(statusData);
//     }
//   };

//   // Render each status item
//   const renderItem = ({ item }) => {
//     const isSelected = selectedStatus === item.name;

//     return (
//       <TouchableOpacity 
//         style={styles.cryptoItem} 
//         onPress={() => {
//           onSelectStatus(item.name);
//           onClose();
//         }}
//       >
//         <ResponsiveText style={styles.cryptoItemText}>{item.name}</ResponsiveText>
//         {isSelected && (
//           <View style={styles.checkmarkContainer}>
//            <Image 
//               source={images.tickBoxes}
//               style={styles.filterIcon}
//               resizeMode="contain"
//             />
//           </View>
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContainerStatus}>
//           {/* Header */}
//           <View style={styles.modalHeader}>
//             <ResponsiveText style={styles.modalTitle}>STATUS</ResponsiveText>
//             <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//               <ResponsiveText style={styles.closeButtonText}>✕</ResponsiveText>
//             </TouchableOpacity>
//           </View>

//           {/* Filter bar */}
//           <View style={styles.filterBar}>
//             <TouchableOpacity 
//               style={styles.filterButton}
//               onPress={() => {
//                 onClose();
//                 if (onSwitchToCrypto) {
//                   onSwitchToCrypto();
//                 }
//               }}
//             >
//               <ResponsiveText style={styles.filterButtonText}>All crypto</ResponsiveText>
//               <Image 
//                 source={images.depositFilter}
//                   style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.filterButton}>
//               <ResponsiveText style={styles.filterButtonText}>Date</ResponsiveText>
//               <Image 
//                 source={images.depositFilter}
//                   style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={[styles.filterButton]}>
//               <ResponsiveText style={styles.activeFilterText}>Status</ResponsiveText>
//               <Image
//                 source={images.activeFilter}
//                 style={styles.activeFilterIcon}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Search box */}
//           <View style={styles.searchContainer}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search..."
//               placeholderTextColor={colors.iconColor}
//               value={searchText}
//               onChangeText={handleSearch}
//             />
//             <TouchableOpacity style={styles.searchIconButton}>
//               <Image 
//                 source={images.searchSign}
//                 style={styles.searchIconImage}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Status list */}
//           <FlatList
//             data={filteredData}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//             style={styles.listContainer}
//             ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',

//     justifyContent: 'flex-end',
//   },
//   modalOverlaystatus: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',

//   },
//   filterIcon:{
//     width: wp(4),
//     height: hp(4),  
//   },
//   modalContainer: {

//     backgroundColor: colors.cryptofilter,
//     height: '80%',
//     width: '100%',
//   },
//    modalContainerStatus: {
//     backgroundColor: colors.cryptofilter,
//     height: '50%',
//     width: '100%',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(2.5),
//     backgroundColor: colors.cryptofilter,
//     borderBottomWidth: 0.5,
//     borderBottomColor: 'rgba(5, 30, 35, 0.8)',
//   },
//   modalTitle: {
//     fontSize: 16,
//     color: colors.white,
//     fontFamily: fontFamily.appTextBold,
//   },
//   closeButton: {
//     padding: wp(2),
//   },
//   closeButtonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: fontFamily.appTextBold,
//   },
//   filterBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1),
//     backgroundColor: colors.cryptofilter,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: colors.cryptofilter,
//     paddingHorizontal: wp(2.5),
//     paddingVertical: hp(0.8),
//     borderRadius: 6,
//     marginRight: wp(3),
//     minWidth: wp(22),
//     justifyContent: 'space-between',
//   },
//   filterButtonText: {
//     color: colors.iconColor,
//     fontSize: 12,
//     marginRight: wp(1.5),
//     fontFamily: fontFamily.appTextRegular,
//   },
//   activeFilterText: {
//     color: colors.withdrawBtn,
//     fontSize: 12,
//     marginRight: wp(1.5),
//     fontFamily: fontFamily.appTextRegular,
//   },
//   filterArrow: {
//     color: colors.iconColor,
//     fontSize: 8,
//   },
//   activeFilterArrow: {
//     color: colors.white,
//     fontSize: 8,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: colors.searchBar,
//     marginHorizontal: wp(4),
//     marginVertical: hp(1.5),
//     borderRadius: 6,
//     height: hp(5.5),
//   },
//   searchInput: {
//     flex: 1,
//     color: colors.white,
//     paddingHorizontal: wp(3),
//     paddingVertical: hp(1.2),
//     fontFamily: fontFamily.appTextRegular,
//     fontSize: 14,
//   },
//   searchIconButton: {
//     paddingHorizontal: wp(3),
//   },
//   searchIcon: {
//    width: wp(4),
//     height: hp(4),
//   },
//   listContainer: {
//     flex: 1,
//   },
//   cryptoItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1.8),
//   },
//   itemSeparator: {
//   height: hp(0.1),
//     backgroundColor: colors.depositBtn, 

//   },
//   cryptoItemText: {
//     color: colors.white,
//     fontSize: 14,
//     fontFamily: fontFamily.appTextRegular,
//   },
//   checkmarkContainer: {
//     width: wp(5),
//     height: wp(5),
//     borderRadius: wp(2.5),
//     backgroundColor: colors.mainColor,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkmark: {
//     color: colors.black,
//     fontSize: 12,
//     fontFamily: fontFamily.appTextBold,
//   },
//   activeFilterIcon:{
//     width: wp(4),
//     height: hp(4),
//   },
//   searchIconImage:{
//     width: wp(4),
//     height: hp(4),  
//   },
//   infoLimit:{
//         width: wp(4.5),
//         height: hp(4.5),
//   }
// });

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { colors, fontFamily } from '../../../../constants'
import Entypo from "react-native-vector-icons/Entypo"
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import images from '../../../../images'
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent'
import Line from '../../../../components/Liner'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import InputText from '../../../../components/InputText'


export const DepositFilterHeader = ({ AllCryptoPress, DatePress, statusPress, SelectedSymbol,SelectedStatus }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={styles.text}>{SelectedSymbol}</ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <TouchableOpacity onPress={AllCryptoPress}>
          {/* {AllCryptoPress ?( */}
          <Entypo name="chevron-small-up" size={20} color={colors.iconColor} />

          {/* // ):( */}
          {/* <Entypo name="chevron-small-down" size={20} color={colors.iconColor} />

          )} */}
        </TouchableOpacity>
      </View>
      <HorizontalSpacer width={wp(4)} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={styles.text}>Date</ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <TouchableOpacity onPress={DatePress}>
          <Entypo name="chevron-small-down" size={20} color={colors.iconColor} />
        </TouchableOpacity>
      </View>
      <HorizontalSpacer width={wp(4)} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={styles.text}>{SelectedStatus}</ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <TouchableOpacity onPress={statusPress}>
          <Entypo name="chevron-small-down" size={20} color={colors.iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const DepositHistoryComponent = ({ data }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data && data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id.toString() || index.toString()}
          renderItem={({ item }) => (
            <View>

            </View>
          )}

        />
      ) : (
        <View style={{ alignItems: "center" }}>
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
      )}

    </View>

  )
}

const SearchBox = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <InputText
        placeholder={"Search..."}
        placeholderTextColor={colors.iconColor}
        style={styles.InputTextStyle}
      />
      <View style={styles.leftIcon}>
        <EvilIcons name="search" color={colors.mainColor} size={25} />
      </View>
    </View>
  )
}
export const AllCryptoFilterBotomSheet = ({ ref,selectedStatus, closeBottomSheet, AllCryptoFilter, SelectedSymbol, setSelectedSymbol, statusPress}) => {
  return (
    <GorhomBottomSheet sheetRef={ref}>
      <Spacer />
      <View style={styles.BottomSheetView}>
        <View style={styles.bottomHeader}>
          <ResponsiveText style={styles.bottomSheetTitle}>ALL CRYPTO</ResponsiveText>
          <ResponsiveText onPress={closeBottomSheet} style={styles.bottomSheetTitle}>X</ResponsiveText>
        </View>
        <Spacer />
        <Line width={wp(100)} height={hp(0.1)} backgroundColor={colors.lineColor} />
        <Spacer />
        <DepositFilterHeader statusPress={statusPress} SelectedStatus={selectedStatus} SelectedSymbol={SelectedSymbol} />
        <Spacer />
        <Line width={wp(100)} height={hp(0.1)} backgroundColor={colors.lineColor} />
        <Spacer />
        <SearchBox />
        <FlatList
          data={AllCryptoFilter}
          keyExtractor={(item, index) => item.id.toString() || index.toString()}
          renderItem={({ item }) => (
            <View style={styles.filterView}>
              <TouchableOpacity onPress={() => setSelectedSymbol(item.name)} style={styles.filterView2}>
                <ResponsiveText style={styles.text}>{item.name}</ResponsiveText>
                {SelectedSymbol === item.name && (
                  <Image
                    source={images.tickBoxes}
                    style={styles.filterIcon}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </GorhomBottomSheet>
  )
}

export const StatusFilterBottomSheet=({ ref, closeBottomSheet, StatusData, SelectedSymbol, setSelectedStatus,selectedStatus,AllCryptoPress }) =>{

  return(
    <GorhomBottomSheet sheetRef={ref}>
      <Spacer />
      <View style={styles.BottomSheetView}>
        <View style={styles.bottomHeader}>
          <ResponsiveText style={styles.bottomSheetTitle}>STATUS</ResponsiveText>
          <ResponsiveText onPress={closeBottomSheet} style={styles.bottomSheetTitle}>X</ResponsiveText>
        </View>
        <Spacer />
        <Line width={wp(100)} height={hp(0.1)} backgroundColor={colors.lineColor} />
        <Spacer />
        <DepositFilterHeader AllCryptoPress={AllCryptoPress} SelectedStatus={selectedStatus} SelectedSymbol={SelectedSymbol} />
        <Spacer />
        <Line width={wp(100)} height={hp(0.1)} backgroundColor={colors.lineColor} />
        <Spacer />
        <FlatList
          data={StatusData}
          keyExtractor={(item, index) => item.id.toString() || index.toString()}
          renderItem={({ item }) => (
            <View style={styles.filterView}>
              <TouchableOpacity onPress={() => setSelectedStatus(item.name)} style={styles.filterView2}>
                <ResponsiveText style={styles.text}>{item.name}</ResponsiveText>
                {selectedStatus === item.name && (
                  <Image
                    source={images.tickBoxes}
                    style={styles.filterIcon}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </GorhomBottomSheet>
  )

}


const styles = StyleSheet.create({
  header: {
    width: wp(90),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5)
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular
  },
  emptyStateIcon: {
    height: hp(6),
    width: wp(6),
    alignSelf: "center"
  },
  noResultsText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
    // textAlign: 'center',
    fontFamily: fontFamily.appTextMedium
  },
  emptyStateMessage: {
    color: colors.iconColor,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular,
  },
  bottomSheetTitle: {
    fontFamily: fontFamily.mainTextBold,
    fontSize: 18,
    color: colors.white,
    fontWeight: "700"
  },
  bottomSheetText: {
    fontFamily: fontFamily.mainTextMedium,
    fontSize: 18,
    color: colors.white
  },
  BottomSheetView: {
    width: wp(100),
  },
  bottomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(4)

    //  paddingVertical:hp(4)
  },
  InputTextStyle: {
    width: wp(90),
    backgroundColor: colors.cardColor3,
    borderRadius: wp(3),
    color: colors.white,

  },
  leftIcon: {
    position: "absolute",
    right: wp(7),

    bottom: hp(4)
  },
  filterView: {
    width: wp(100),
    borderBottomColor: colors.lineColor,
    borderBottomWidth: 1,
    // paddingVertical: hp(2) 
  },
  filterView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    alignItems:"center",
    height:hp(7)

  },
  filterIcon: {
    width: wp(4),
    height: hp(4),

  },
})
