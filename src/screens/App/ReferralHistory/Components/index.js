import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { wp, hp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily, Routes, } from '../../../../constants'
import { appStyles } from '../../../../utilities'
import images from '../../../../images'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Spacer from '../../../../components/Spacer'
import { GorhomBottomSheet } from '../../../../components/GorhumBottomSheetComponent'
import Line from '../../../../components/Liner'
import { SimpleButton } from '../../../../components/SimpleButton'

export const FilterTextInput = ({ openBottomSheet }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openBottomSheet} style={styles.leftIconWrapper}>
                <Image source={images.filter} style={styles.iconLeft} />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={colors.placeHolderTextColor} />
            <TouchableOpacity style={styles.rightIconWrapper}>
                <Image source={images.searchSign} style={styles.iconRight} />
            </TouchableOpacity>
        </View>
    )
}

export const History = () => {
    return (
        <>
            <View style={appStyles.row}>
                <ResponsiveText style={styles.historyHeadings}>Date</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Transaction ID</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Reward</ResponsiveText>
                <ResponsiveText style={styles.historyHeadings}>Reward Type</ResponsiveText>
            </View>
            <Spacer height={hp(16)} />
            <View style={styles.recordContainer}>
                <Image source={images.noRecord} style={styles.recordIcon} />
                <ResponsiveText style={styles.noRecordText}>No Record Found</ResponsiveText>
            </View>
        </>
    )
}

export const FilterBottomSheet = ({ groupKey, bottomSheetRef, closeBottomSheet, selected, setSelected }) => {

    const resetFilters = () => {
        setSelected(selected[groupKey] == 0)
    }

    return (
        <GorhomBottomSheet sheetRef={bottomSheetRef}>
            <View style={[appStyles.row, { ...styles.containerSpacer }]}>
                <ResponsiveText style={styles.bottomSheetTitle}>FILTER</ResponsiveText>
                <TouchableOpacity onPress={closeBottomSheet}>
                    <Image source={images.closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>

            <Line height={1} backgroundColor={colors.lineColor} />

            <Spacer height={hp(1.5)} />

            <View style={styles.filterContainer}>
                <ResponsiveText style={styles.filterTitles}>Created At</ResponsiveText>
                <FilterGroup
                    options={['All', 'Today', 'Yesterday', 'Last Week', 'Last Month', 'Custom Date']}
                    groupKey="createdAt"
                    selected={selected}
                    setSelected={setSelected}
                />
            </View>
            <Spacer height={hp(1.5)} />

            <View style={styles.filterContainer}>
                <ResponsiveText style={styles.filterTitles}>Order Type</ResponsiveText>
                <FilterGroup
                    options={['Market', 'Limit']}
                    groupKey="orderType"
                    selected={selected}
                    setSelected={setSelected}
                />
            </View>
            <Spacer height={hp(1.5)} />

            <View style={styles.filterContainer}>
                <ResponsiveText style={styles.filterTitles}>Transaction Type</ResponsiveText>
                <FilterGroup
                    options={['All', 'Buy', 'Sell']}
                    groupKey="transactionType"
                    selected={selected}
                    setSelected={setSelected}
                />
            </View>
            <Spacer height={hp(2.5)} />
            <View style={[appStyles.row, styles.buttonRow]}>
                <SimpleButton onPress={() => resetFilters()} text="Reset" textColor={colors.white} styleView={styles.resetBtn} />
                <SimpleButton text="Show Results" textColor={colors.black} styleView={styles.showBtn} />
            </View>
        </GorhomBottomSheet>

    )
}

const FilterGroup = ({ options = [], groupKey, selected, setSelected }) => {
    const currentValue = selected[groupKey] || options[0];

    const handleSelect = (option) => {
        setSelected((prev) => ({ ...prev, [groupKey]: option }));
    };

    return (
        <View style={styles.filterWrapContainer}>
            {options.map((item) => {
                const isSelected = currentValue === item;
                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => handleSelect(item)}
                        activeOpacity={0.6}
                        style={[
                            styles.filterSelectionContainer,
                            {
                                ...appStyles.rowBasic,
                                backgroundColor: colors.transparentBtn,
                            },
                        ]}
                    >
                        {isSelected && (
                            <Image source={images.blueTick} style={styles.tickSelectIcon} />
                        )}
                        <ResponsiveText
                            style={[
                                styles.filterSelection,
                                { color: isSelected ? colors.white : colors.lightTextColor },
                            ]}
                        >
                            {item}
                        </ResponsiveText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...appStyles.rowBasic,
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(2),
        height: hp(7),
        paddingHorizontal: wp(4),
        alignItems: 'center',
        borderColor: colors.borderColor,
        borderWidth: 1.5,
    },
    leftIconWrapper: {
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        borderRightWidth: 2.5,
        borderRightColor: colors.borderColor,
        marginRight: wp(2.5),
    },
    rightIconWrapper: {
        paddingHorizontal: wp(2),
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
    },
    iconLeft: {
        width: wp(7),
        height: wp(7),
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    iconRight: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'contain',
        tintColor: colors.mainColor,
    },
    historyHeadings: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: 16,
        color: colors.white,
    },
    recordContainer: {
        alignItems: 'center',
    },
    recordIcon: {
        width: wp(12),
        height: wp(12),
        resizeMode: 'contain',
    },
    noRecordText: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.white,
        paddingTop: hp(1),
    },
    bottomSheetTitle: {
        fontFamily: fontFamily.mainTextBold,
        fontSize: 18,
        color: colors.white,
        flex: 1,
    },
    containerSpacer: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(3),
    },
    closeIcon: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    tickSelectIcon: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: 'contain',
        marginRight: wp(2),
    },
    filterTitles: {
        fontFamily: fontFamily.mainTextMedium,
        fontSize: 18,
        color: colors.white,
        paddingTop: hp(1),
    },
    filterContainer: {
        flex: 1,
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
        paddingBottom: hp(2),
        backgroundColor: colors.cardColor3,
        borderRadius: wp(3),
        width: wp(90),
    },
    filterSelectionContainer: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.2),
        backgroundColor: colors.transparentBtn,
        borderRadius: wp(10),
    },
    filterWrapContainer: {
        flexDirection: 'row',
        gap: wp(2.5),
        marginTop: hp(1.5),
    },
    filterSelection: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.white,
    },
    buttonRow: {
        paddingHorizontal: wp(3.5),
        paddingBottom: Platform.OS === 'android' ? hp(2) : hp(1), // More space on Android

    },
    resetBtn: {
        paddingHorizontal: wp(17),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        marginStart: wp(1.5),
        borderRadius: wp(10),
    },
    showBtn: {
        paddingHorizontal: wp(11.5),
        backgroundColor: colors.mainColor,
        marginLeft: wp(3), // space between buttons
        paddingVertical: hp(2),
        borderRadius: wp(10),
        marginRight: wp(1)
    },
    tickSelectIcon: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: 'contain',
        marginRight: wp(2),
    },
    filterSelectionContainer: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.2),
        backgroundColor: colors.transparentBtn,
        borderRadius: wp(10),
    },
    filterSelection: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.white,
    },
    filterWrapContainer: {
        flexDirection: 'row',
        gap: wp(2.5),
        flexWrap: 'wrap',
        marginTop: hp(1.5),
    },
})
