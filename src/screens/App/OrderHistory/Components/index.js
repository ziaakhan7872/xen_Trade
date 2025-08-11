import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images from '../../../../images'
import { appStyles } from '../../../../utilities'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Line from '../../../../components/Liner'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors, fontFamily } from '../../../../constants'
import { SimpleButton } from '../../../../components/SimpleButton'
import { OrderHistoryData } from '../../../../utilities/dummyData'
import Entypo from "react-native-vector-icons/FontAwesome6"
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment'
import BottomSheet from '../../../../components/BottomSheet'


export const FilterTextInput = ({ openBottomSheet, onChangeText, value }) => {
    return (
        <View style={styles.containerMain}>
            <View style={styles.containerInner}>
                <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder="Search..." placeholderTextColor={colors.lightTextColor} />
                <TouchableOpacity style={styles.rightIconWrapper}>
                    <Image source={images.searchSign} style={styles.iconRight} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.6} onPress={openBottomSheet} style={styles.leftIconWrapper}>
                <Image source={images.filter2} style={styles.iconLeft} />
            </TouchableOpacity>
        </View>
    )
}

export const History = () => {
    return (
        <>
            <Spacer height={hp(16)} />
            <View style={styles.recordContainer}>
                <Image source={images.noRecord} style={styles.recordIcon} />
                <ResponsiveText style={styles.noRecordText}>No Open Orders</ResponsiveText>
            </View>
        </>
    )
}

export const FilterBottomSheet = ({ groupKey, bottomSheetRef, closeBottomSheet, selected, setSelected }) => {

    const resetFilters = () => {
        setSelected(selected[groupKey] == 0)
    }

    return (
        <BottomSheet ref={bottomSheetRef} height={hp(70)} >
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
            <Spacer height={hp(2.5)} />
        </BottomSheet>

    )
}

export const OrderHistoryList = () => {
    return (
        <View style={{ alignSelf: "center" }}>
            <Spacer />
            <FlatList
                data={OrderHistoryData}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={(
                    <Spacer height={hp(1)} />
                )}
                ListEmptyComponent={() => (
                    <History />
                )}
                renderItem={({ item }) => (
                    <View style={styles.OrderMainView}>
                        <View style={styles.orderMainSubView} >
                            <View>
                                <View style={appStyles.rowBasic}>
                                    <ResponsiveText style={styles.text6}>{item.name}</ResponsiveText>
                                    <HorizontalSpacer />
                                    <TouchableOpacity>
                                        <Entypo name="chevron-right" size={20} color={colors.white} />

                                    </TouchableOpacity>
                                </View>
                                <View style={appStyles.rowBasic}>
                                    <ResponsiveText style={[styles.text1, { color: item.type === "Buy" ? colors.green : colors.red }]}>{item.marketType}</ResponsiveText>
                                    <HorizontalSpacer />
                                    <ResponsiveText style={[styles.text1, { color: item.type === "Buy" ? colors.green : colors.red }]}>{item.type}</ResponsiveText>
                                    <HorizontalSpacer />
                                    <ResponsiveText style={[styles.text5]}>{moment(item.time, "MM/DD, HH:mm:ss").format("MM/DD, HH:mm:ss")}</ResponsiveText>

                                </View>
                            </View>
                            <View style={appStyles.rowBasic}>
                                <TouchableOpacity>
                                    <Feather name="edit" size={20} color={colors.white} />
                                </TouchableOpacity>
                                <HorizontalSpacer />
                                <Line height={hp(2)} width={wp(1)} />
                                <HorizontalSpacer />
                                <ResponsiveText style={styles.buySellButtonText}>Cancel</ResponsiveText>
                            </View>

                        </View>
                        <View style={styles.orderMainSubView}>
                            <View>
                                <ResponsiveText style={[styles.text5]}>Order Amount {item.symbol}</ResponsiveText>
                                <Spacer height={hp(0.5)} />
                                <ResponsiveText style={styles.text7}>{item.OrderAmount}</ResponsiveText>

                            </View>
                            <View>
                                <ResponsiveText style={[styles.text5]}>Filled {item.symbol}</ResponsiveText>
                                <Spacer height={hp(0.5)} />
                                <ResponsiveText style={styles.text7}>{item.Filled}</ResponsiveText>
                            </View>
                            <View>
                                <ResponsiveText style={[styles.text5]}>Order Price</ResponsiveText>
                                <Spacer height={hp(0.5)} />
                                <ResponsiveText style={styles.text7}>{item.OrderPrice}</ResponsiveText>
                            </View>
                        </View>
                    </View>

                )}
            />
        </View>
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
    containerMain: {
        ...appStyles.rowBasic,
        justifyContent: 'center'
    },
    containerInner: {
        ...appStyles.rowBasic,
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(2),
        height: hp(6.5),
        width: wp(78),
        paddingHorizontal: wp(4),
        borderColor: colors.borderColor,
        borderWidth: 1.5,
    },
    leftIconWrapper: {
        backgroundColor: colors.inputBgColor,
        paddingHorizontal: wp(3.5),
        borderRadius: wp(2),
        paddingVertical: hp(1.55),
        marginLeft: wp(2),
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
        paddingVertical: hp(2),
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
        // flex: 1,
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
        // paddingBottom: Platform.OS === 'android' ? hp(5.5) : hp(1.5), // More space on Android
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
        marginRight: wp(1),
    },
    OrderMainView: {
        backgroundColor: colors.cardsBgColor,
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        borderRadius: wp(3)
    },
    orderMainSubView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingHorizontal: wp(5),
        paddingVertical: wp(2)
    },
    text1: {
        fontSize: 14,
        color: colors.white,
        fontFamily: fontFamily.appTextRegular
    },
    text5: {
        fontSize: 14,
        fontFamily: fontFamily.appTextRegular,
        color: colors.iconColor
    },
    text6: {
        fontSize: 20,
        fontFamily: fontFamily.mainTextMedium,
        color: colors.white
    },
    text7: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fontFamily.appTextMedium
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