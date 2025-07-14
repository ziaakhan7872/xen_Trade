import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DropDown from '../../../../components/dropDown'
import { stateDropDowns } from '../Hooks'
import Spacer from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { hp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'

const DropDowns = () => {
    const {
        coin, setCoin,
        network, setNetwork,
        isCoinListOpen, setIsCoinListOpen,
        isNetworkOpen, setIsNetworkOpen,
        coinList, networkList,
    } = stateDropDowns()

    return (
        <View>
            <ResponsiveText style={styles.inputLabel}>Coin/Currency</ResponsiveText>
            <DropDown
                value={coin}
                items={coinList}
                setValue={setCoin}
                zIndex={isCoinListOpen ? 1001 : 999}
                setIsOpen={setIsCoinListOpen}
            />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Network</ResponsiveText>
            <DropDown
                value={network}
                items={networkList}
                setValue={setNetwork}
                zIndex={isNetworkOpen ? 1001 : 999}
                setIsOpen={setIsNetworkOpen}
            />
        </View>
    )
}

export default DropDowns

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.8),
        fontWeight: 400,
        color: colors.white,
    },
})