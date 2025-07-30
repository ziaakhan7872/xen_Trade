import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { colors } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import InputText from '../../../../components/InputText';




export const SelectCryptoHeader = ({ BackPress, historyPress }) => {

  return (
    <View style={styles.selectCryptoHeader}>
      <TouchableOpacity onPress={BackPress} style={styles.backButtonContainer} >
        <Image source={images.backArrow} style={styles.backArrowIcon} resizeMode="contain" />
      </TouchableOpacity>
      <ResponsiveText style={styles.selectCryptoTitle}>SELECT CRYPTO</ResponsiveText>
      <TouchableOpacity onPress={historyPress} style={styles.selectCryptoCloseButton}>
        <Image source={images.clockIcon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};


export const SelectCryptoSearchBox = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <InputText
        placeholder={"Search..."}
        placeholderTextColor={colors.iconColor}
        // style={styles.InputTextStyle}
        width={wp(92)}
        paddingLeft={wp(3)}
      />
      <View style={styles.leftIcon}>
        <EvilIcons name="search" color={colors.mainColor} size={25} />
      </View>
    </View>
  )
}

export const PopularCrypto = ({ onPress, data }) => {
  return (
    <View >
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cryptoSelectItem}
            onPress={() => onPress(item.symbol, item.id)}
          >
            <Image source={{ uri: item.icon }} style={styles.cryptoSelectIcon} resizeMode='cover' />
            <View style={styles.cryptoSelectDetails}>
              <ResponsiveText style={styles.cryptoSymbol}>{item.symbol}</ResponsiveText>
              <ResponsiveText style={styles.cryptoName}>{item.name}</ResponsiveText>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export const ALlCrypto = ({ onPress, data }) => {
  return (
    <View >
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cryptoSelectItem}
            onPress={() => onPress(item.symbol, item.id)}
          >
            <Image source={{ uri: item.icon }} style={styles.cryptoSelectIcon} resizeMode="cover" />
            <View style={styles.cryptoSelectDetails}>
              <ResponsiveText style={styles.cryptoSymbol}>{item.symbol}</ResponsiveText>
              <ResponsiveText style={styles.cryptoName}>{item.name}</ResponsiveText>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}




const styles = StyleSheet.create({
  // Header

  selectCryptoHeader: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,

  },
  backButtonContainer: {
  },
  backArrowIcon: {
    width: wp(5),
    height: hp(2.5),
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
  selectCryptoTitle: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    fontWeight: "500"
  },
  selectCryptoCloseButton: {
    // position: 'absolute',
    // right: wp(4),
    // padding: wp(1),
    // width: wp(5),
    // height: hp(2.5),
  },


  cryptoSelectItem: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.buttonSigninColor,
  },
  cryptoSelectIcon: {
    width: wp(9),
    height: wp(9),
    marginRight: wp(3),
    borderRadius: 100
  },
  cryptoSelectDetails: {
    flex: 1,
  },
  cryptoSymbol: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.appTextMedium,
  },
  cryptoName: {
    color: colors.iconColor,
    fontSize: 12,
    fontFamily: fontFamily.appTextRegular,
  },

});