import { View, StyleSheet } from 'react-native'
import React from 'react'
import DropDown from '../../../../components/dropDown'
import Spacer from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { hp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import TextInputField from '../../../../components/TextInputField'


const DropDowns = ({
    coin, setCoin,
    network, setNetwork,
    isCoinListOpen, setIsCoinListOpen,
    isNetworkOpen, setIsNetworkOpen,
    coinList, networkList,
}) => {
    return (
        <View>
            <ResponsiveText style={styles.inputLabel}>Coin/Currency</ResponsiveText>
            <View style={{ zIndex: isCoinListOpen ? 1000 : 999 }}>
                <DropDown
                    value={coin}
                    items={coinList}
                    setValue={setCoin}
                    setIsOpen={setIsCoinListOpen}
                />
            </View>

            <Spacer />

            <ResponsiveText style={styles.inputLabel}>Network</ResponsiveText>
            <View style={{ zIndex: isNetworkOpen ? 1000 : 998 }}>
                <DropDown
                    value={network}
                    items={networkList}
                    setValue={setNetwork}
                    setIsOpen={setIsNetworkOpen}
                />
            </View>
        </View>
    )
}

export const InputFieldGroup = () => {
    return (
        <>
            <ResponsiveText style={styles.inputLabel}>Wallet Name</ResponsiveText>
            <TextInputField placeholder={'Enter Wallet Here'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Wallet Address</ResponsiveText>
            <TextInputField placeholder={'Enter Wallet Address'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Tag Type</ResponsiveText>
            <TextInputField placeholder={'Destination Tag'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Tag</ResponsiveText>
            <TextInputField placeholder={'Tag'} placeholderTextColor={colors.placeHolderTextColor} />
            <Spacer />
        </>
    )
}


export default DropDowns

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.8),
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.8),
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },
})