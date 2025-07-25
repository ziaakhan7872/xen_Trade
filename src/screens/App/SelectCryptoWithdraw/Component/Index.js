import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { colors } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import { coinData } from '../../../../utilities/dummyData';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import InputText from '../../../../components/InputText';
import { HorizontalSpacer } from '../../../../components/Spacer';




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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <InputText
                placeholder={"Search..."}
                placeholderTextColor={colors.iconColor}
                width={wp(92)}
                paddingLeft={wp(5)}
            />
            <View style={styles.leftIcon}>
                <EvilIcons name="search" color={colors.mainColor} size={25} />
            </View>
        </View>
    )
}

export const PopularCrypto = ({ onPress }) => {
    return (
        <View >
            <FlatList
                data={coinData}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.cryptoSelectItem}
                        onPress={onPress}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Image source={item.icon} style={styles.cryptoSelectIcon} resizeMode="contain" />
                            <View style={styles.cryptoSelectDetails}>
                                <ResponsiveText style={styles.cryptoSymbol}>{item.symbol}</ResponsiveText>
                                <ResponsiveText style={styles.cryptoName}>{item.name}</ResponsiveText>
                            </View>
                        </View>

                        <View style={styles.cryptoSelectDetails}>
                            <ResponsiveText style={[styles.cryptoSymbol, { textAlign: "right" }]}>{item.amount}</ResponsiveText>
                            <ResponsiveText style={[styles.cryptoName, { textAlign: "right" }]}>{item.value}</ResponsiveText>
                        </View>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}
export const SelectCryptoRowButton = ({ data=coinData ,onPress}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}  
        ItemSeparatorComponent={() => (
          <HorizontalSpacer width={wp(2)} />  
        )}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: wp(0.2) }}>  
            <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", backgroundColor: colors.gray3 ,paddingVertical:hp(0.8),paddingHorizontal:wp(2.4),borderRadius:wp(5)}}>
              <Image style={styles.image} source={item.icon} />
              <HorizontalSpacer width={wp(1)} />
              <ResponsiveText style={styles.text2}>{item.symbol}</ResponsiveText>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};






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
        // width: wp(90),
        // backgroundColor: colors.cardColor3,
        borderRadius: wp(3),
        color: colors.white,
        paddingHorizontal: wp(3)

    },
    leftIcon: {
        position: "absolute",
        right: wp(5),
        bottom: hp(3.5)
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
        justifyContent: "space-between"
    },
    cryptoSelectIcon: {
        width: wp(9),
        height: wp(9),
        marginRight: wp(3),
    },
    cryptoSelectDetails: {
        // flex: 1,
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
    image: {
        width: wp(6),
        height: wp(6),
        resizeMode: "contain"
    },
    text2: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white
    }

});