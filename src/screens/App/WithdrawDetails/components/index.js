import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../components/ResponsiveText';
import images from '../../../../images';
import { hp, wp } from '../../../../components/ResponsiveComponent';
import { colors, fontFamily } from '../../../../constants';
import Spacer from '../../../../components/Spacer';
import { appStyles } from '../../../../utilities';


// export const ProgressWithdraw = () => {
//   return (
//     <View style={styles.progressContainer}>
//       <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
//       <ResponsiveText style={styles.progressAmountValue}>-15.619111 ETH</ResponsiveText>
//       <Spacer />
//       <View style={styles.progressStepsBox}>
//         <View style={styles.progressStepRow}>
//           <Image source={images.tickBoxes} style={styles.progressStepIconActive} />
//           <View style={styles.progressStepTextBox}>
//             <ResponsiveText style={styles.progressStepTitleActive}>Withdrawal request submitted</ResponsiveText>
//             <ResponsiveText style={styles.progressStepDate}>09/01/2024, 21:19:27</ResponsiveText>
//           </View>
//         </View>

//         <View style={styles.progressStepRow}>
//           <Image source={images.tickBoxes} style={styles.progressStepIconActive} />
//           <View style={styles.progressStepTextBox}>
//             <ResponsiveText style={styles.progressStepTitleActive}>Pending</ResponsiveText>
//             <ResponsiveText style={styles.progressStepDesc}>You have one minute to cancel</ResponsiveText>
//           </View>
//         </View>

//         <View style={styles.progressStepRow}>
//           <Image source={images.tickBoxes} style={styles.progressStepIconInactive} />
//           <View style={styles.progressStepTextBox}>
//             <ResponsiveText style={styles.progressStepTitleInactive}>In progress</ResponsiveText>
//           </View>
//         </View>

//         <View style={styles.progressStepRow}>
//           <Image source={images.tickBoxes} style={styles.progressStepIconInactive} />
//           <View style={styles.progressStepTextBox}>
//             <ResponsiveText style={styles.progressStepTitleInactive}>Sent</ResponsiveText>
//           </View>
//         </View>

//       </View>
//     </View>
//   );
// }
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
];
export const ProgressWithdraw = () => {
  const currentStep = 3 // Make dynamic later

  return (
    <View style={styles.progressContainer}>
      <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
      <ResponsiveText style={styles.progressAmountValue}>-15.619111 ETH</ResponsiveText>
      <Spacer />
      <View style={styles.progressStepsBox}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <View style={styles.progressStepRow} key={index}>
              {/* Progress Indicator */}
              <View style={styles.progressStepIndicator}>
                {/* Circle */}
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

                {/* Line below the circle */}
                {!isLast && (
                  <View
                    style={[
                      styles.verticalLine,
                      index < currentStep - 1
                        ? styles.verticalLineActive
                        : styles.verticalLineInactive,
                    ]}
                  />
                )}
              </View>

              {/* Step Text */}
              <View style={styles.progressStepTextBox}>
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
          );
        })}
      </View>
    </View>
  )
}
// export const ProgressWithdraw = () => {
//   const currentStep = 2; // Make this dynamic based on status (0 to 3)

//   return (
//     <View style={styles.progressContainer}>
//       <ResponsiveText style={styles.progressAmountLabel}>Amount</ResponsiveText>
//       <ResponsiveText style={styles.progressAmountValue}>-15.619111 ETH</ResponsiveText>
//       <Spacer />
//       <View style={styles.progressStepsBox}>
//         {steps.map((step, index) => {
//           const isCompleted = index < currentStep;
//           const isActive = index === currentStep;
//           const isLast = index === steps.length - 1;

//           return (
//             <View style={{ flexDirection: 'row' }} key={index}>
//               {/* Vertical Progress Bar */}
//               <View style={styles.progressStepIndicator}>
//                 {/* Circle */}
//                 <View style={[
//                   styles.stepCircle,
//                   isCompleted && styles.stepCircleCompleted,
//                   isActive && styles.stepCircleActive,
//                 ]}>
//                   {isCompleted && (
//                     <Image source={images.simpleTick} style={styles.tickIcon} />
//                   )}
//                 </View>
//                 {/* Line below the circle */}
//                 {!isLast && <View style={[
//                   styles.verticalLine,
//                   (isCompleted || isActive) && styles.verticalLineActive
//                 ]} />}
//               </View>

//               {/* Step Text */}
//               <View style={styles.progressStepTextBox}>
//                 <ResponsiveText
//                   style={isCompleted || isActive
//                     ? styles.progressStepTitleActive
//                     : styles.progressStepTitleInactive}
//                 >
//                   {step.title}
//                 </ResponsiveText>
//                 {step.date && (
//                   <ResponsiveText style={styles.progressStepDate}>
//                     {step.date}
//                   </ResponsiveText>
//                 )}
//                 {step.description && (
//                   <ResponsiveText style={styles.progressStepDesc}>
//                     {step.description}
//                   </ResponsiveText>
//                 )}
//               </View>
//             </View>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

export const WithdrawDetailsContainer = () => {
  return (


    <View style={styles.componentHeader}>
      <View style={styles.confirmItem}>

        <ResponsiveText style={styles.confirmLabel}>Blockchain</ResponsiveText>
        <ResponsiveText style={styles.confirmValue}>TON</ResponsiveText>
      </View>

      <View style={styles.confirmItem}>
        <ResponsiveText style={styles.confirmLabel}>Address</ResponsiveText>
        <View style={styles.confirmAddressContainer}>
          <ResponsiveText style={styles.confirmValue} numberOfLines={1}>0x21505337aa3b5254eb154b8...</ResponsiveText>
          <TouchableOpacity style={{ padding: 4 }}>
            <Image source={images.copyIcon} style={styles.confirmCopyIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.confirmItem}>
        <ResponsiveText style={styles.confirmLabel}>Network fee</ResponsiveText>
        <ResponsiveText style={styles.confirmValue}>0.15 USDT</ResponsiveText>
      </View>

      <View style={styles.confirmItem}>
        <ResponsiveText style={styles.confirmLabel}>Time</ResponsiveText>
        <ResponsiveText style={styles.confirmValue}>09/01/2024, 21:19:27</ResponsiveText>
      </View>

      <View style={styles.confirmItem}>
        <ResponsiveText style={styles.confirmLabel}>Reference no.</ResponsiveText>
        <ResponsiveText style={styles.confirmValue}>227491076</ResponsiveText>
      </View>
    </View>

  );
};

export const WithDrawBtn = () => {
  return (
    <TouchableOpacity style={styles.confirmButton} >
      <ResponsiveText style={styles.confirmButtonText}>Cancel Withdrawal</ResponsiveText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  progressContainer: {
    // alignContent: 'center',
    // flex: 1,
    backgroundColor: colors.cardColor3,
    borderRadius: wp(3),
    paddingVertical: hp(3),
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
    // width: '100%',
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
  progressStepIndicator: {//done
    alignItems: 'center',
    marginRight: wp(3),
  },
  stepCircle: {//done kinda
    width: wp(5.5),
    height: wp(5.5),
    borderRadius: wp(16),
    borderWidth: 2,

    // borderColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleCompleted: {//done
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,

  },
  stepCircleActive: {//done
    backgroundColor: 'transparent',
    borderColor: colors.mainColor,
  },
  stepCircleInactive: {//done
    backgroundColor: colors.cardColor2,
    borderColor: colors.lightTextColor,
  },
  tickIcon: {//done
    width: wp(3),
    height: wp(3),
    // tintColor: colors.black,//remove
  },
  tickIconCompleted: {//done
    tintColor: colors.black,
  },

  tickIconActive: {//done
    tintColor: colors.mainColor,
  },

  tickIconInactive: {//done
    tintColor: colors.lightTextColor,
  },
  verticalLine: {
    width: wp(0.5),
    // flex: 1,
    height: hp(3),
    backgroundColor: '#777',
    // marginBottom: hp(2),
  },
  verticalLineActive: {//done
    backgroundColor: colors.mainColor,
  },
  verticalLineInactive: {
    backgroundColor: colors.lightTextColor,
  },
  progressStepRow: {
    flexDirection: 'row',
    // paddingVertical: hp(0.5), // moderate vertical space per row
  },
  confirmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderBottomColor,
  },
  confirmLabel: {
    color: colors.amountLabel,
    fontSize: 14,
  },
  confirmValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  componentHeader: {
    margin: 20,
    backgroundColor: colors.cardBorderColor,
    borderRadius: 12,
    marginTop: hp(1),
  },
  confirmCopyIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    tintColor: colors.copyIcon,
  },
  confirmAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '60%',
    marginRight: 28,
  },
  confirmButton: {
    backgroundColor: colors.mainColor,
    borderRadius: 24,
    marginHorizontal: 20,
    marginVertical: hp(9),
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
})