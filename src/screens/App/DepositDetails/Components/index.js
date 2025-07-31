import { Alert, Image, Platform, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import images from '../../../../images'
import { colors, fontFamily } from '../../../../constants'
import { appStyles } from '../../../../utilities'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import Line from '../../../../components/Liner'
import Clipboard from '@react-native-clipboard/clipboard'

export const AmountTitle = () => {
    return (
        <View style={styles.amountTitleContainer}>
            <ResponsiveText style={styles.textV1}>Amount</ResponsiveText>
            <Spacer height={hp(0.5)} />
            <View style={appStyles.row}>
                <ResponsiveText style={styles.amountMainText}>2521.25</ResponsiveText>
                <ResponsiveText style={styles.amountMainTextV2}>USDT</ResponsiveText>
            </View>

            <View style={appStyles.rowBasic}>
                <Image source={images.greenTick} style={styles.tickImg} />
                <ResponsiveText style={[styles.textV1, { color: colors.green, marginLeft: wp(2) }]} >Completed</ResponsiveText>
            </View>
            <Spacer />
            <ResponsiveText style={[styles.textV1, { textAlign: 'center', }]} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </ResponsiveText>
        </View >
    )
}

export const WithdrawDetailsContainer = ({ address = "0x21505337aa3b5254eb154b8", txid = "0x21505337aa3b5254eb154b8", fee = "1 USDT", date = "11/22, 17:26:15", reference = "227491076" }) => {
    return (
        <View style={{ paddingHorizontal: wp(4) }} >
            <View style={styles.componentHeader}>
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Confirmations</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>50/4</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />

                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Network</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>TRX</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />

                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Deposit Wallet</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>Ethereum</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={[styles.confirmValue, { width: wp(50), overflow: 'hidden', textOverflow: 'ellipsis' }]} numberOfLines={1}>
                            {address}
                        </ResponsiveText>
                        <TouchableOpacity onPress={() => {
                            Clipboard.setString('https://www.exchange/code2354')
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Address copied!', ToastAndroid.SHORT)
                            } else {
                                Alert.alert('Copied!', 'Address copied to clipboard')
                            }
                        }}>
                            <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>TXID</ResponsiveText>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={[styles.confirmValue, { width: wp(50), overflow: 'hidden', textOverflow: 'ellipsis' }]} numberOfLines={1}>
                            {txid}
                        </ResponsiveText>
                        <TouchableOpacity onPress={() => {
                            Clipboard.setString('https://www.exchange/code2354')
                            if (Platform.OS === 'android') {
                                ToastAndroid.show('Address copied!', ToastAndroid.SHORT)
                            } else {
                                Alert.alert('Copied!', 'Address copied to clipboard')
                            }
                        }}>
                            <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Network Fee</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>{fee}</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Date</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>{date}</ResponsiveText>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    amountTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textV1: {
        color: colors.lightTextColor,
        fontFamily: fontFamily.appTextRegular,
        fontSize: 14,
        letterSpacing: wp(0.1),
        lineHeight: hp(1.8)
    },
    amountMainText: {
        color: colors.white,
        fontFamily: fontFamily.mainTextMedium,
        fontSize: 30,
    },
    amountMainTextV2: {
        color: colors.white,
        fontFamily: fontFamily.mainTextMedium,
        fontSize: 20,
        marginLeft: wp(2),
        marginTop: wp(1)
    },
    tickImg: {
        width: wp(4),
        height: hp(4),
        resizeMode: 'contain'
    },
    confirmItem: {
        ...appStyles.row,
        paddingHorizontal: wp(4),
        paddingVertical: hp(1.6),
        borderBottomColor: colors.lineColor,
    },
    confirmLabel: {
        color: colors.iconColor,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular
    },
    confirmValue: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fontFamily.mainTextMedium,
    },
    confirmCopyIcon: {
        width: 16,
        height: 16,
        tintColor: colors.copyIcon,
    },
    componentHeader: {
        backgroundColor: colors.InputTextCOlor,
        borderRadius: wp(3),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
    },
})