import React from 'react';
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { colors } from '../../../../constants';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { fontFamily } from '../../../../constants/fonts';
import { Networks } from '../../../../utilities/dummyData';
import { HorizontalSpacer } from '../../../../components/Spacer';


export const NetworkList = ({ onPress, data }) => {
  return (
    <View >
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.networkItem} onPress={onPress} >
            <Image source={{ uri: item.logo }} style={styles.networkIcon} resizeMode="contain" />
            <HorizontalSpacer />
            <View style={styles.networkDetails}>
              <ResponsiveText style={styles.networkName}>{item.name + ' ' + '(' + item.standard + ')'}</ResponsiveText>
              <ResponsiveText style={styles.networkInfo}>Minimum deposit: {item.minDeposit} </ResponsiveText>
              <ResponsiveText style={styles.networkInfo}> Est arrival in {item.arrivalTime} </ResponsiveText>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingTop: hp(1),
    width: '100%',
  },



  networkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.AccountInfoBorderColor,
    width: wp(100),
    paddingHorizontal: wp(5)
  },

  networkIcon: {
    width: wp(9),
    height: wp(9),
    resizeMode: "cover"
  },
  networkDetails: {
    flex: 1,
  },
  networkName: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    fontWeight: "500"
  },
  networkInfo: {
    fontSize: 14,
    color: colors.iconColor,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: "400"
  },

});

