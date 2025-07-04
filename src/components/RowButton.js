import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { wp } from './ResponsiveComponent';
import { colors } from '../constants';
import AntDesign from "react-native-vector-icons/AntDesign"; // Import AntDesign icons

const RowButton = ({ iconShow = true }) => {
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity style={[styles.buttonStyling]}>
        {iconShow && (
          <AntDesign name="apple1" size={15} color={colors.white} />  
        )}
        <Text style={styles.buttonText}>Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyling}>
        {iconShow && (
          <AntDesign name="google" size={15} color={colors.white} />  
        )}
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RowButton;

const styles = StyleSheet.create({
  buttonRow: {
    width: wp(80),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyling: {
    width: wp(38),
    paddingVertical: wp(4),
    flexDirection: "row",
    justifyContent: "center",  
    alignItems: "center",  
    backgroundColor: colors.authButtonColor,
    borderRadius: wp(16.5),
  },
  buttonText: {
    color: colors.white,  
    fontSize: 16,
    fontWeight: '500',
  },
  buttonText:{
    fontSize:14,
    fontWeight:"400",
    color:colors.white,
    marginLeft:wp(3)
  }
});
