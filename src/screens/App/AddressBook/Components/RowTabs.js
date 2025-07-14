import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'

const RowTabs = () => {
    const [selected, setSelected] = useState('Crypto')

    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={() => setSelected('Crypto')}>
                <ResponsiveText style={[styles.tabText, selected === 'Crypto' && styles.activeTab]}>Crypto</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected('Fiat')}>
                <ResponsiveText style={[styles.tabText, selected === 'Fiat' && styles.activeTab]}>Fiat</ResponsiveText>
            </TouchableOpacity>
        </View>
    )
}

export default RowTabs

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: wp(5)
    },
    tabText: {
        fontSize: 16,
        color: colors.lightTextColor
    },
    activeTab: {
        color: colors.mainColor,
        borderBottomWidth: 2.5,
        fontWeight: 500,
        borderColor: colors.mainColor,
        paddingBottom: wp(3.8)
    }
})

