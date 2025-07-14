import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors, Routes } from '../../../../constants'
import { appStyles } from '../../../../utilities'

const AddressCard = (props) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={() => { props?.navigation?.navigate?.(Routes.addressDetailsExpanded) }}>
            <View style={appStyles.row}>
                <ResponsiveText style={styles.label}>ETH-METAMASK</ResponsiveText>
                <Image source={images.ethIcon} style={styles.ethIcon} resizeMode='contain' />
            </View>
            <View style={[appStyles.row, styles.addressTextContainer]}>
                <View style={appStyles.rowBasic}>
                    <ResponsiveText style={styles.address}>0x8R2330...9UYT5665O</ResponsiveText>
                    <TouchableOpacity>
                        <Image source={images.copyIcon} style={styles.copyIcon} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default AddressCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardsBgColor,
        borderRadius: 12,
        borderColor: colors.cardBorderColor,
        borderWidth: 1,
        padding: wp(4),
    },
    label: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    addressTextContainer: {
        marginTop: wp(1.5),
    },
    address: {
        color: colors.lightTextColor,
        fontSize: 14,
        letterSpacing: -0.40
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
    }
})

