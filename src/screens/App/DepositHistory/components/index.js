import { FlatList, Image, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { colors, fontFamily, Routes } from '../../../../constants'
import Entypo from "react-native-vector-icons/Entypo"
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import images from '../../../../images'
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent'
import Line from '../../../../components/Liner'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import InputText from '../../../../components/InputText'
import { appStyles } from '../../../../utilities'
import { DepositHistoryData } from '../../../../utilities/dummyData'
import moment from 'moment'
import BottomSheet from '../../../../components/BottomSheet'


export const DepositFilterHeader = ({ AllCryptoPress, DatePress, statusPress, SelectedSymbol, SelectedStatus, selectedHeaderButton }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={AllCryptoPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={[styles.text, { colors: selectedHeaderButton === "status" ? colors.iconColor : colors.mainBgColor }]}>
          {SelectedSymbol}
        </ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <View >
          <Entypo name="chevron-small-down" size={20} color={selectedHeaderButton === "status" ? colors.mainBgColor : colors.iconColor} />
        </View>
      </TouchableOpacity>
      <HorizontalSpacer width={wp(4)} />
      <TouchableOpacity onPress={DatePress} style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={styles.text}>Date</ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <View >
          <Entypo name="chevron-small-down" size={20} color={colors.iconColor} />
        </View>
      </TouchableOpacity>
      <HorizontalSpacer width={wp(4)} />
      <TouchableOpacity onPress={statusPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <ResponsiveText style={[styles.text, { colors: selectedHeaderButton === "crypto" ? colors.iconColor : colors.mainBgColor }]}>{SelectedStatus?.name ? SelectedStatus?.name : "All statuses"}</ResponsiveText>
        <HorizontalSpacer width={wp(0.7)} />
        <View >
          <Entypo name="chevron-small-down" size={20} color={selectedHeaderButton === "status" ? colors.mainBgColor : colors.iconColor} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export const DepositHistoryComponent = ({ props, HistoryData }) => {
  return (
    <FlatList
      data={HistoryData}
      keyExtractor={(item, index) => item.id.toString() || index.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
      ItemSeparatorComponent={() => <Line height={hp(0.1)} backgroundColor={colors.lineStroke} />}
      ListEmptyComponent={() => (
        <View style={{}}>
          <Spacer height={hp(20)} />
          <Image source={images.noRecord} style={styles.emptyStateIcon} resizeMode="contain" />
          <ResponsiveText style={styles.noResultsText}>No results found</ResponsiveText>
          <ResponsiveText style={styles.emptyStateMessage}>Try changing your filter to show your recent {'\n'} transactions</ResponsiveText>
        </View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => props?.navigation?.navigate(Routes.AppNavigator, { screen: Routes.DepositDetails, params: { response: item } })} style={[appStyles.rowBasic, styles.itemContainer]}>
          <View style={styles.coinDetails}>
            <ResponsiveText style={styles.upperText}>{item.symbol}</ResponsiveText>
            <ResponsiveText style={styles.lowerText}>
              {moment(item.updatedAt).format("MM/DD, HH:mm:ss")}
            </ResponsiveText>
          </View>
          <View style={styles.amountContainer}>
            <ResponsiveText style={styles.upperText}>{item?.amount && (parseFloat(item.amount).toFixed(5))}</ResponsiveText>
            <ResponsiveText
              style={[styles.lowerText,
              {
                color: item.status === 'completed' ? colors.green :
                  item.status === 'pending' || item.status === 'processing' ? colors.yellow1 : colors.red
              }]} >{item.status}
            </ResponsiveText>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const SearchBox = ({ searchCoin, setSearchCoin }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <InputText
        placeholder={"Search..."}
        placeholderTextColor={colors.iconColor}
        // style={styles.InputTextStyle}
        width={wp(94)}
        paddingLeft={wp(3)}
        value={searchCoin}
        onChangeText={setSearchCoin}
      />
      <View style={styles.leftIcon}>
        <EvilIcons name="search" color={colors.mainColor} size={25} />
      </View>
    </View>
  )
}

export const AllCryptoFilterBotomSheet = ({ ref, selectedStatus, closeBottomSheet, AllCryptoFilter, SelectedSymbol, setSelectedSymbol, statusPress, searchCoin, setSearchCoin }) => {
  return (
    <BottomSheet height={hp(60)} ref={ref}>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > */}
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
          <SearchBox setSearchCoin={setSearchCoin} searchCoin={searchCoin} />
          <FlatList
            data={AllCryptoFilter}
            keyExtractor={(item, index) => item.id.toString() || index.toString()}
            renderItem={({ item }) => (
              <View style={styles.filterView}>
                <TouchableOpacity onPress={() => {
                  // console.log("item", item?.name)
                  setSelectedSymbol(item.symbol)
                }} style={styles.filterView2}>
                  <ResponsiveText style={styles.text}>{item.symbol}</ResponsiveText>
                  {SelectedSymbol === item.symbol && (
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
      {/* </KeyboardAvoidingView> */}
    </BottomSheet>
  )
}

export const StatusFilterBottomSheet = ({ ref, closeBottomSheet, StatusData, SelectedSymbol, setSelectedStatus, selectedStatus, AllCryptoPress }) => {

  return (
    <BottomSheet ref={ref}>
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
              <TouchableOpacity onPress={() => setSelectedStatus(item)} style={styles.filterView2}>
                <ResponsiveText style={styles.text}>{item.name}</ResponsiveText>
                {selectedStatus?.name === item.name && (
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
    </BottomSheet>
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
    height: hp(8),
    width: wp(8),
    alignSelf: "center"
  },
  noResultsText: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: wp(1),
    fontFamily: fontFamily.appTextMedium
  },
  emptyStateMessage: {
    color: colors.iconColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
    textAlign: 'center'
  },
  bottomSheetTitle: {
    fontFamily: fontFamily.mainTextBold,
    fontSize: 18,
    color: colors.white,
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
    alignItems: "center",
    height: hp(7)
  },
  filterIcon: {
    width: wp(4),
    height: hp(4),
  },
  itemContainer: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(3.5),
  },
  icon: {
    width: wp(9),
    height: wp(9),
    marginRight: wp(4),
  },
  coinDetails: {
    flex: 1,
  },
  upperText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fontFamily.mainTextMedium,
    marginBottom: wp(1)
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  lowerText: {
    color: colors.lightTextColor,
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
  },
})
