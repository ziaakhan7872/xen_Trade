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
import moment from 'moment'

export const AmountTitle = ({ data }) => {
    const Amount = data?.amount ? parseFloat(data?.amount) : 0
    return (
        <View style={styles.amountTitleContainer}>
            <ResponsiveText style={styles.textV1}>Amount</ResponsiveText>
            <Spacer height={hp(0.5)} />
            <View style={appStyles.row}>
                <ResponsiveText style={styles.amountMainText}>{Amount.toFixed(3)}</ResponsiveText>
                <ResponsiveText style={styles.amountMainTextV2}>{data?.symbol}</ResponsiveText>
            </View>
            {data?.status === "completed" ? (
                <View style={appStyles.rowBasic}>
                    <Image source={images.greenTick} style={styles.tickImg} />
                    <ResponsiveText style={[styles.textV1, { color: colors.green, marginLeft: wp(2) }]} >{data?.status}</ResponsiveText>
                </View>
            ) : (
                <View style={appStyles.rowBasic}>
                    <ResponsiveText
                        style={[
                            styles.textV1,
                            {
                                color: data?.status === "failed" ? "red" : data?.status === "pending" || data?.status === "processing" ? "yellow" : "white", marginLeft: wp(2),
                            },
                        ]}
                    >
                        {data?.status}
                    </ResponsiveText>
                </View>
            )}

            <Spacer />
            <ResponsiveText style={[styles.textV1, { textAlign: 'center', }]} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </ResponsiveText>
        </View >
    )
}

export const WithdrawDetailsContainer = ({ data }) => {
    return (
        <View style={{ paddingHorizontal: wp(4) }} >
            <View style={styles.componentHeader}>
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Confirmations</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>{data?.confirmations}</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />

                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Network</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>{data?.networkName}</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />

                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Deposit Wallet</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>{data?.symbol}</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={[styles.confirmValue, { width: wp(50), overflow: 'hidden', textOverflow: 'ellipsis' }]} numberOfLines={1}>
                            {data?.walletAddress}
                        </ResponsiveText>
                        <TouchableOpacity onPress={() => {
                            Clipboard.setString(data?.walletAddress)
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
                            {data?.txHash}
                        </ResponsiveText>
                        <TouchableOpacity onPress={() => {
                            Clipboard.setString(data?.txHash)
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
                    <ResponsiveText style={styles.confirmValue}>{data?.fee || 0}</ResponsiveText>
                </View>
                <Line height={hp(0.1)} width={wp(91.5)} />
                <View style={styles.confirmItem}>
                    <ResponsiveText style={styles.confirmLabel}>Date</ResponsiveText>
                    <ResponsiveText style={styles.confirmValue}>
                        {data?.updatedAt ? moment(data?.updatedAt).format('MM/YYYY, HH:mm:ss') : '--'}
                    </ResponsiveText>              
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