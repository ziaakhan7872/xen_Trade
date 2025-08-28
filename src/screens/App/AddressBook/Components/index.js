import { View, TouchableOpacity, Image, StyleSheet, Platform, Alert } from 'react-native'
import React from 'react'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily, Routes } from '../../../../constants'
import { appStyles } from '../../../../utilities'
import { copyPaste } from '../../../../CommonHelperFunction/Util'

export const RowTabs = ({ selected, setSelected }) => {

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

export const AddressCard = ({ props }) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={() => { props?.navigation?.navigate?.(Routes.addressDetailsExpanded) }}>
            <View style={appStyles.row}>
                <ResponsiveText style={styles.label}>ETH-METAMASK</ResponsiveText>
                <Image source={images.ethIcon} style={styles.ethIcon} resizeMode='contain' />
            </View>
            <View style={[appStyles.row, styles.addressTextContainer]}>
                <View style={appStyles.rowBasic}>
                    <ResponsiveText style={styles.address}>0x8R2330...9UYT5665O</ResponsiveText>
                    <TouchableOpacity
                        onPress={() => {
                            if (Platform.OS === 'android') {
                                copyPaste.copy('0x8R2330...9UYT5665O');
                            } else {
                                Alert.alert('Copied!', 'Address copied to clipboard')
                            }
                        }}>
                        <Image source={images.copyIcon} style={styles.copyIcon} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: wp(5)
    },
    tabText: {
        fontSize: 16,
        color: colors.lightTextColor,
        fontFamily: fontFamily.appTextRegular,
    },
    activeTab: {
        color: colors.mainColor,
        borderBottomWidth: 2.5,
        fontFamily: fontFamily.appTextMedium,
        borderColor: colors.mainColor,
        paddingBottom: wp(3.8)
    },
    card: {
        backgroundColor: colors.cardsBgColor,
        borderRadius: 12,
        borderColor: colors.cardBorderColor,
        borderWidth: 1,
        padding: wp(4),
    },
    label: {
        color: colors.white,
        fontFamily: fontFamily.mainTextMedium,
        fontSize: 16
    },
    addressTextContainer: {
        marginTop: wp(1.5),
    },
    address: {
        color: colors.lightTextColor,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
    },
    copyIcon: {
        width: wp(4),
        height: wp(4),
        marginLeft: wp(2.5)
    },
    ethIcon: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(2),
        marginTop: wp(0.8)
    },
})

