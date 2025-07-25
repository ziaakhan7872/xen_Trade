import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors, fontFamily } from '../../../../constants';
import Spacer from '../../../../components/Spacer';
import { appStyles } from '../../../../utilities';
import { SimpleButton } from '../../../../components/SimpleButton';
import Line from '../../../../components/Liner';

const steps = [
  {
    title: 'Withdrawal request submitted',
    date: '09/01/2024, 21:19:27',
  },
  {
    title: 'Pending',
    description: 'You have one minute to cancel',
  },
  {
    title: 'In progress',
  },
  {
    title: 'Sent',
  },
]

export const ProgressWithdraw = () => {
  const currentStep = 2 // Make dynamic later

  return (
    <View style={styles.progressContainer}>
      <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
      <ResponsiveText style={styles.progressAmountValue}>-15.619111 ETH</ResponsiveText>
      <Spacer height={hp(1.2)} />
      <View style={styles.progressStepsBox}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isActive = index === currentStep - 1
          const isLast = index === steps.length - 1

          return (
            <View style={styles.progressStepRow} key={index}>
              <View style={styles.progressStepIndicator}>
                <View
                  style={[
                    styles.stepCircle,
                    isCompleted
                      ? styles.stepCircleCompleted
                      : isActive
                        ? styles.stepCircleActive
                        : styles.stepCircleInactive,
                  ]}
                >
                  <Image
                    source={images.simpleTick}
                    style={[
                      styles.tickIcon,
                      isCompleted
                        ? styles.tickIconCompleted
                        : isActive
                          ? styles.tickIconActive
                          : styles.tickIconInactive,
                    ]}
                  />
                </View>

                {!isLast && (
                  <View
                    style={[
                      styles.verticalLine,
                      index < currentStep
                        ? styles.verticalLineActive
                        : styles.verticalLineInactive,
                    ]}
                  />
                )}
              </View>

              <View>
                <ResponsiveText
                  style={
                    isCompleted
                      ? styles.progressStepTitleActive
                      : styles.progressStepTitleInactive
                  }
                >
                  {step.title}
                </ResponsiveText>

                {step.date && (
                  <ResponsiveText style={styles.progressStepDate}>
                    {step.date}
                  </ResponsiveText>
                )}

                {step.description && (
                  <ResponsiveText style={styles.progressStepDesc}>
                    {step.description}
                  </ResponsiveText>
                )}
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export const WithdrawDetailsContainer = ({ address = "0x21505337aa3b5254eb154b", fee = "0.15 USDT", time = "09/01/2024, 21:19:27", reference = "227491076" }) => {
  return (
    <View >
      <View style={styles.componentHeader}>
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Blockchain</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>TON</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
          <View style={appStyles.rowBasic}>
            <ResponsiveText style={[styles.confirmValue, { width: wp(50), overflow: 'hidden', textOverflow: 'ellipsis' }]} numberOfLines={1}>
              {address}
            </ResponsiveText>
            <TouchableOpacity>
              <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Network fee</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{fee}</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Time</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{time}</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Reference no.</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{reference}</ResponsiveText>
        </View>
      </View>
    </View>

  );
};

export const WithDrawBtn = () => {
  return (
    <View style={{ alignItems: "center", paddingBottom: hp(5) }}>
      <SimpleButton
        btnStyles={{ fontFamily: fontFamily.appTextRegular }}
        text={"Cancel Withdrawl"}
        textColor={colors.black}
        backgroundColor={colors.mainColor}
        height={hp(6)}
        buttonWidth={wp(90)}
        onPress={() => { '' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progressContainer: {
    // alignContent: 'center',
    // flex: 1,
    backgroundColor: colors.disableCard,
    borderRadius: wp(3),
    paddingVertical: hp(2.5),
  },
  progressAmountLabel: {
    color: colors.lightTextColor,
    fontFamily: fontFamily.appTextMedium,
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  progressAmountValue: {
    color: colors.white,
    fontFamily: fontFamily.mainTextMedium,
    fontSize: 24,
    textAlign: 'center',
  },
  progressStepsBox: {
    paddingHorizontal: wp(15),
  },
  progressStepTitleActive: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    fontSize: 14,
  },
  progressStepTitleInactive: {
    color: colors.lightTextColor,
    fontFamily: fontFamily.appTextMedium,
    fontSize: 14,
  },
  progressStepDate: {
    color: colors.lightTextColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 12,
  },
  progressStepDesc: {
    color: colors.lightTextColor,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 12,
  },
  progressStepIndicator: {
    alignItems: 'center',
    marginRight: wp(3),
  },
  stepCircle: {
    width: wp(5.5),
    height: wp(5.5),
    borderRadius: wp(16),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleCompleted: {
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
  },
  stepCircleActive: {
    backgroundColor: 'transparent',
    borderColor: colors.mainColor,
  },
  stepCircleInactive: {
    backgroundColor: colors.disableColor,
    borderColor: colors.disableColor,
  },
  tickIcon: {
    width: wp(3),
    height: wp(3),
  },
  tickIconCompleted: {
    tintColor: colors.black,
  },
  tickIconActive: {
    tintColor: colors.mainColor,
  },
  tickIconInactive: {
    tintColor: colors.disableColor2,
  },
  verticalLine: {
    width: wp(0.5),
    height: hp(3),
  },
  verticalLineActive: {
    backgroundColor: colors.mainColor,
  },
  verticalLineInactive: {
    backgroundColor: colors.lightTextColor,
  },
  progressStepRow: {
    flexDirection: 'row',
  },
  feeLabel: {
    color: colors.iconColor,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.appTextRegular
  },
  feeValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: fontFamily.appTextMedium
  },
  confirmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderWidth: 1.5
  },
})