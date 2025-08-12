import { StyleSheet, View, ToastAndroid, Platform, Alert, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import images from '../../../../images'
import TextInputField from '../../../../components/TextInputField'
import { colors, fontFamily } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Spacer from '../../../../components/Spacer'

export const InputForm = ({ isEditable }) => {
    return (

        <View>
            <ResponsiveText style={styles.inputLabel}>Name</ResponsiveText>
            <TextInputField placeholder={'ETH-Metamask'} placeholderTextColor={colors.white} editable={isEditable} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Address</ResponsiveText>
            <TextInputField placeholder={'0x8R209h462hks83518t0jm709UYTO'} placeholderTextColor={colors.white} editable={isEditable} />
            <TouchableOpacity onPress={() => {
                Clipboard.setString('0x8R2330...9UYT5665O')
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Address copied!', ToastAndroid.SHORT)
                } else {
                    Alert.alert('Copied!', 'Address copied to clipboard')
                }
            }}>
                <Image source={images.copyIcon} style={styles.copyIcon} resizeMode='contain' />
            </TouchableOpacity>
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Network</ResponsiveText>
            <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} editable={isEditable} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Tag Type</ResponsiveText>
            <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} editable={isEditable} />
            <Spacer />
            <ResponsiveText style={styles.inputLabel}>Tag</ResponsiveText>
            <TextInputField placeholder={'Default'} placeholderTextColor={colors.white} editable={isEditable} />
            <Spacer />

        </View>
    )
}

const styles = StyleSheet.create({
    copyIcon: {
        width: wp(4.5),
        height: wp(4.5),
        position: 'absolute',
        marginLeft: wp(82.5),
        bottom: hp(1.8)
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: hp(0.7),
        fontFamily: fontFamily.appTextRegular,
        color: colors.white,
    },
})