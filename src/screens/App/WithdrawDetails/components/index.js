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
import moment from 'moment';


const getStatusStyles = (status, step) => {
  switch (step) {
    case "submitted":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.progressStepTitleActive : styles.progressStepTitleInactive;
    case "pending":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.progressStepTitleActive : styles.progressStepTitleInactive;
    case "inProgress":
      return status === "inProgress" || status === "sent" ? styles.progressStepTitleActive : styles.progressStepTitleInactive;
    case "sent":
      return status === "sent" ? styles.progressStepTitleActive : styles.progressStepTitleInactive;
    default:
      return styles.progressStepTitleInactive;
  }
};

const getStepCircleStyles = (status, step) => {
  switch (step) {
    case "submitted":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.stepCircleCompleted : styles.stepCircleInactive;
    case "pending":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.stepCircleCompleted : styles.stepCircleInactive;
    case "inProgress":
      return status === "inProgress" || status === "sent" ? styles.stepCircleCompleted : styles.stepCircleInactive;
    case "sent":
      return status === "sent" ? styles.stepCircleCompleted : styles.stepCircleInactive;
    default:
      return styles.stepCircleInactive;
  }
};

const getTickIconStyles = (status, step) => {
  switch (step) {
    case "submitted":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.tickIconCompleted : styles.tickIconInactive;
    case "pending":
      return status === "pending" || status === "inProgress" || status === "sent" ? styles.tickIconCompleted : styles.tickIconInactive;
    case "inProgress":
      return status === "inProgress" || status === "sent" ? styles.tickIconCompleted : styles.tickIconInactive;
    case "sent":
      return status === "sent" ? styles.tickIconCompleted : styles.tickIconInactive;
    default:
      return styles.tickIconInactive;
  }
};

const shouldShowVerticalLine = (step) => {
  return step !== "sent"; // Do not show the vertical line after "sent"
};


export const ProgressWithdraw = ({ response }) => {


  return (
    <View style={styles.progressContainer}>
      <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
      <ResponsiveText style={styles.progressAmountValue}>{response?.amount && (parseFloat(response.amount).toFixed(5))} {response?.symbol}</ResponsiveText>
      <Spacer height={hp(1.2)} />

      <View style={styles.progressStepsBox}>
        {["submitted", "pending", "inProgress", "sent"].map((step) => (
          <View key={step} style={styles.progressStepRow}>
            <View style={styles.progressStepIndicator}>
              <View style={[getStepCircleStyles(response?.status, step), styles.stepCircle]}>
                <Image
                  source={images.simpleTick}
                  style={[getTickIconStyles(response?.status, step), styles.tickIcon]}
                />
              </View>

              {shouldShowVerticalLine(step) && (
                <View
                  style={[
                    styles.verticalLine,
                    (step === "submitted" || response?.status === "inProgress" || response?.status === "sent")
                      ? styles.verticalLineActive
                      : styles.verticalLineInactive,
                  ]}
                />
              )}

            </View>
            <View>
              <ResponsiveText style={getStatusStyles(response?.status, step)}>
                {step === "submitted" && "Withdrawal request submitted"}
                {step === "pending" && "Pending"}
                {step === "inProgress" && "In Progress"}
                {step === "sent" && "Sent"}
              </ResponsiveText>

              <ResponsiveText style={styles.progressStepDate}>
                {step === "submitted" && response?.createdAt && moment(response.createdAt).format("DD/MM/YYYY, HH:mm:ss")}
              </ResponsiveText>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};


export const WithdrawDetailsContainer = ({ cryptoData,network,response}) => {
  return (
    <View >
      <View style={styles.componentHeader}>
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Blockchain</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{response?.networkName}</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
          <View style={appStyles.rowBasic}>
            <ResponsiveText style={[styles.confirmValue, { width: wp(50), overflow: 'hidden', textOverflow: 'ellipsis' }]} numberOfLines={1}>
              {response?.tokenAddress}
            </ResponsiveText>
            <TouchableOpacity>
              <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Network fee</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{network?.fee || 0} {network?.name}</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Time</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{moment(response.createdAt).format("DD/MM/YYYY, HH:mm:ss")}</ResponsiveText>
        </View>
        <Line height={hp(0.1)} width={wp(91.5)} />
        <View style={styles.confirmItem}>
          <ResponsiveText style={styles.confirmLabel}>Reference no.</ResponsiveText>
          <ResponsiveText style={styles.confirmValue}>{response.createdAt || "227491076"}</ResponsiveText>
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