import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { colors, fontFamily, fontSize } from '../../../../constants'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { SimpleButton } from '../../../../components/SimpleButton'
import images from '../../../../images'
import Spacer from '../../../../components/Spacer'

export const ReferText = () => {
    return (
        <>
            <View style={appStyles.rowBasic}>
                <ResponsiveText style={styles.referTitle}>REFER FRIENDS.</ResponsiveText>
                <ResponsiveText style={styles.referTitle2}>COLLECT REWARDS</ResponsiveText>
            </View>
            <ResponsiveText style={styles.referTitleSmall}>Earn up to 40% commission on every referral</ResponsiveText>
        </>

    )
}

export const ShareInvite = () => {
    return (
        <View style={[appStyles.row, styles.cardContainer]}>
            <ResponsiveText style={styles.inviteLink}>https://www.exchange/code2354...</ResponsiveText>
            <Image source={images.copyIcon} style={styles.copyIcon}></Image>
            <SimpleButton text={'Share Invite'} textColor={colors.black} btnStyles={{ fontSize: 12 }} styleView={styles.shareBtn}></SimpleButton>
        </View>
    )
}

export const TrackReferrals = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={appStyles.rowBasic}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ResponsiveText style={styles.referTitle}>TRACK YOUR</ResponsiveText>
                    <ResponsiveText style={styles.referTitle2}>REFERRALS</ResponsiveText>
                </View>
                <Image source={images.track} style={styles.trackIcon}></Image>
            </View>
            <Spacer height={hp(1.5)} />
            <View style={appStyles.row}>
                <ResponsiveText style={styles.referTitleSmall}>Referred Users</ResponsiveText>
                <ResponsiveText style={[styles.referTitleSmall, { color: colors.white }]}>8</ResponsiveText>
            </View>
            <Spacer height={hp(0.2)} />
            <View style={appStyles.row}>
                <ResponsiveText style={styles.referTitleSmall}>Your rewards</ResponsiveText>
                <ResponsiveText style={[styles.referTitleSmall, { color: colors.white }]}>$5,633</ResponsiveText>
            </View>
        </View >
    )
}

export const ShareSteps = () => {
    return (
        <View style={styles.cardContainerWBorder}>
            <View style={appStyles.rowBasic}>
                <ResponsiveText style={[styles.referTitle, { fontSize: 16 }]}>SHARE AND EARN MORE:</ResponsiveText>
                <ResponsiveText style={[styles.referTitle2, { fontSize: 16 }]}>HOW IT WORKS</ResponsiveText>
            </View>
            <ResponsiveText style={styles.shareDesc}>There's no limit to how many friends you can refer, so keep sharing your unique referral link and earning rewards for each new user you bring to our platform.</ResponsiveText>

            <Spacer height={hp(2)} />
            <LineDivide />
            <Spacer height={hp(2)} />

            <View style={appStyles.rowBasic}>
                <Image source={images.stepOne} style={styles.stepOneIcon} />
                <View style={styles.stepTextContainer}>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={styles.referTitle}>STEP</ResponsiveText>
                        <ResponsiveText style={styles.referTitle2}>1</ResponsiveText>
                    </View>
                    <ResponsiveText style={styles.stepDesc}>Share Your Unique Referral Link: Once logged in, find your unique referral link on the referral page. Share this link with your friends through social media, email, or messaging apps.</ResponsiveText>
                </View>
            </View>

            <Spacer height={hp(2)} />
            <LineDivide />
            <Spacer height={hp(2)} />

            <View style={appStyles.rowBasic}>
                <Image source={images.stepTwo} style={[styles.stepOneIcon, { marginBottom: hp(5.5) }]} />
                <View style={styles.stepTextContainer}>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={styles.referTitle}>STEP</ResponsiveText>
                        <ResponsiveText style={styles.referTitle2}>2</ResponsiveText>
                    </View>
                    <ResponsiveText style={styles.stepDesc}>Your Friend Signs Up: When your friend clicks on your referral link, they'll be directed to sign up for an account on our platform. Make sure they use the provided link to ensure you receive credit for the referral.</ResponsiveText>
                </View>
            </View>

            <Spacer height={hp(2)} />
            <LineDivide />
            <Spacer height={hp(2)} />

            <View style={appStyles.rowBasic}>
                <Image source={images.stepThree} style={[styles.stepOneIcon, { marginBottom: hp(7) }]} />
                <View style={styles.stepTextContainer}>
                    <View style={appStyles.rowBasic}>
                        <ResponsiveText style={styles.referTitle}>STEP</ResponsiveText>
                        <ResponsiveText style={styles.referTitle2}>3</ResponsiveText>
                    </View>
                    <ResponsiveText style={[styles.stepDesc]}>Both of You Get Rewarded: After your friend successfully signs up and meets the qualifying criteria, both you and your friend will receive rewards. Rewards could include discounts, credits, or other incentives, depending on the terms of our referral program.</ResponsiveText>
                </View>
            </View>


        </View >
    )
}

export const LineDivide = () => {
    return (
        <View style={styles.lineDivide}>
        </View >
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(2.5),
        padding: wp(4.5),
    },
    cardContainerWBorder: {
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(2.5),
        borderColor: colors.borderColor,
        borderWidth: 1.1,
        padding: wp(3),
        paddingTop: wp(4),
    },
    referTitle: {
        fontSize: 20,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white,
    },
    referTitle2: {
        fontSize: 20,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.mainColor,
        marginLeft: wp(2),
    },
    referTitleSmall: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: colors.lightTextColor,
        marginTop: wp(0.5),
    },
    inviteLink: {
        fontSize: 14,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
    },
    copyIcon: {
        width: wp(4.2),
        height: wp(4.2),
        resizeMode: 'contain',
        marginLeft: Platform.OS === 'android' ? wp(0) : wp(2),
    },
    trackIcon: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain',
    },
    shareBtn: {
        marginLeft: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(20),
        backgroundColor: colors.mainColor,
        borderRadius: wp(10),
        paddingVertical: wp(1.5),
    },
    lineDivide: {
        width: wp(92),
        alignSelf: 'center',
        height: wp(0.4),
        backgroundColor: colors.borderColor,
    },
    shareDesc: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        color: colors.lightTextColor,
        marginTop: hp(1),
        lineHeight: hp(2),
    },
    stepOneIcon: {
        width: wp(15),
        height: wp(15),
        resizeMode: 'contain',
        marginLeft: wp(1),
        marginBottom: hp(3.5),
    },
    stepTextContainer: {
        flex: 1,
        marginLeft: wp(4.5),
    },
    stepDesc: {
        fontSize: 12,
        fontFamily: fontFamily.appTextRegular,
        color: colors.lightTextColor,
        marginTop: hp(0.6),
        lineHeight: hp(1.8),
    }
})