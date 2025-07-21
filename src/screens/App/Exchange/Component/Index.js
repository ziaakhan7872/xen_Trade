import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import { colors, fontFamily } from '../../../../constants'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import Entypo from "react-native-vector-icons/FontAwesome6"
import images from '../../../../images'
import Slider from '@react-native-community/slider'
import InputText from '../../../../components/InputText'
import Line from '../../../../components/Liner'
import { SimpleButton } from '../../../../components/SimpleButton'
import { coinData, DummyCurrentSymbol, dummyOrderBook } from '../../../../utilities/dummyData'
import { appStyles } from '../../../../utilities'
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment'

export const ExchangeHeader = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ResponsiveText style={styles.headerText}>BTC/USDT</ResponsiveText>
                <HorizontalSpacer />
                <TouchableOpacity>
                    <Entypo name="chevron-down" size={15} color={colors.white} />
                </TouchableOpacity>
                <HorizontalSpacer />
                <ResponsiveText style={styles.currentPriceStyle}>+3.33%</ResponsiveText>
            </View>
            <Image style={styles.tradingGraohImage} source={images.trading} />
        </View>
    )
}

export const BuySellRowButton = ({ buySellButton, setBuySellButton }) => {
    return (
        <View style={styles.buySellRowView}>
            <TouchableOpacity onPress={() => setBuySellButton("buy")} style={[styles.buySellButton, { backgroundColor: buySellButton === "buy" ? colors.green : colors.transparent }]}>
                <ResponsiveText style={[styles.buySellButtonText, { color: buySellButton === "buy" ? colors.white : colors.green }]}>Buy</ResponsiveText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuySellButton("sell")} style={[styles.buySellButton, { backgroundColor: buySellButton === "sell" ? colors.red : colors.transparent }]}>
                <ResponsiveText style={[styles.buySellButtonText, { color: buySellButton === "sell" ? colors.white : colors.red }]}>Sell</ResponsiveText>
            </TouchableOpacity>
        </View>
    )
}

export const BuyForm = ({ setValue, value }) => {
    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.text1}>Limit</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>22976.27</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>12</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={25}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={(val) => setValue(val)}
                />

                <View style={styles.tickContainer}>
                    {marks.map((_, index) => (
                        <View key={index} style={styles.tick} />
                    ))}
                </View>
                <View style={styles.labelContainer}>
                    {marks.map((mark) => (
                        <ResponsiveText key={mark} style={[styles.label, { color: value >= mark ? colors.white : colors.cardBorderColor, },]} >
                            {mark}
                        </ResponsiveText>
                    ))}
                </View>
            </View>
            <Spacer height={hp(1)} />
            <TextInput style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.label2}>Fee</ResponsiveText>
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.0342 USDT</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
                </View>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} width={wp(43)} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.label2}>Total</ResponsiveText>
                <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
            </View>
            <Spacer />
            <SimpleButton buttonWidth={wp(43)} backgroundColor={colors.green} height={hp(4.5)} textColor={colors.white} text={"Buy"} />

        </>

    )
}
export const SellForm = ({ setValue, value }) => {
    const marks = [0, 25, 50, 75, 100];

    return (
        <>
            <TouchableOpacity style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.text1}>Limit</ResponsiveText>
                <Entypo name="chevron-down" size={15} color={colors.white} />
            </TouchableOpacity>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>22976.27</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]}>
                <ResponsiveText style={styles.minuePlusText}>-</ResponsiveText>
                <ResponsiveText style={styles.text1}>12</ResponsiveText>
                <ResponsiveText style={styles.minuePlusText}>+</ResponsiveText>
            </View>
            <Spacer height={hp(1)} />
            <View style={{ width: wp(45), alignSelf: "flex-start" }}>
                <Slider

                    style={{ width: wp(45), height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    step={25}
                    value={value}
                    minimumTrackTintColor={colors.white}
                    maximumTrackTintColor={colors.cardBorderColor}
                    thumbTintColor={colors.white}
                    onValueChange={(val) => setValue(val)}
                />

                <View style={styles.tickContainer}>
                    {marks.map((_, index) => (
                        <View key={index} style={styles.tick} />
                    ))}
                </View>
                <View style={styles.labelContainer}>
                    {marks.map((mark) => (
                        <ResponsiveText key={mark} style={[styles.label, { color: value >= mark ? colors.white : colors.cardBorderColor, },]} >
                            {mark}
                        </ResponsiveText>
                    ))}
                </View>
            </View>
            <Spacer height={hp(1)} />
            <TextInput style={[styles.buySellRowView, { paddingHorizontal: wp(3), borderRadius: wp(3) }]} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <ResponsiveText style={styles.label2}>Balance</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.label2}>Fee</ResponsiveText>
                </View>
                <View>
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.0342 USDT</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
                </View>
            </View>
            <Spacer height={hp(1)} />
            <Line height={hp(0.1)} width={wp(43)} />
            <Spacer height={hp(1)} />
            <View style={{ width: wp(43), flexDirection: "row", justifyContent: "space-between" }}>
                <ResponsiveText style={styles.label2}>Total</ResponsiveText>
                <ResponsiveText style={[styles.label3, { color: colors.white }]}>0.000342 USDT</ResponsiveText>
            </View>
            <Spacer />
            <SimpleButton buttonWidth={wp(43)} backgroundColor={colors.red} height={hp(4.5)} textColor={colors.white} text={"Sell"} />

        </>

    )
}

export const FlatlistValues = ({ data = [], textColor }) => {
    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ ...appStyles.row, paddingVertical: 2 }}>
                    <ResponsiveText style={{ ...styles.textFlatList, color: textColor ?? colors.red }}>
                        {item.price}
                    </ResponsiveText>
                    <ResponsiveText style={styles.textFlatList1}>
                        {item.amount}
                    </ResponsiveText>
                </View>
            )}
        />
    );
};


export const PriceUSDT = ({ title1, title2, title3, title4 }) => {
    return (
        <View style={appStyles.row}>
            <View>
                <ResponsiveText style={styles.textPrice}>{title1}</ResponsiveText>
                <ResponsiveText style={styles.textPrice}>{title2}</ResponsiveText>
            </View>
            <View>
                <ResponsiveText style={styles.textPrice}>{title3}</ResponsiveText>
                <ResponsiveText style={{ ...styles.textPrice, textAlign: 'right' }}>{title4}</ResponsiveText>
            </View>
        </View>
    );
};

export const CurrentOrderHistoryHeader = ({ buttonPress, setButtonPress, currentOrders }) => {
    return (
        <View style={[appStyles.row, { width: wp(90), alignSelf: "center" }]}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("currentOrder")} style={[styles.text2, { color: buttonPress === "currentOrder" ? colors.withdrawBtn : colors.iconColor }]} >Current Order ({currentOrders})</ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "currentOrder" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1 }} />)}
                </View>
                <HorizontalSpacer width={wp(5)} />
                <View style={{ alignItems: "center" }}>
                    <ResponsiveText onPress={() => setButtonPress("assets")} style={[styles.text2, { color: buttonPress === "assets" ? colors.withdrawBtn : colors.iconColor }]} >Assets </ResponsiveText>
                    <Spacer customHeight={hp(0.5)} />
                    {buttonPress === "assets" && (
                        <View style={{ height: 2, width: '80%', backgroundColor: colors.withdrawBtn, borderRadius: 1 }} />)}
                </View>
            </View>
            <Image source={images.history} style={styles.images} resizeMode="contain" />
        </View>
    );
};
export const CurrentOrderComponent = ({ isCurrentSymbol, setIsCurrentSymbol }) => {
    return (
        <>
            <View style={[appStyles.row, { width: wp(90), alignSelf: "center" }]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setIsCurrentSymbol(!isCurrentSymbol)} >
                        {isCurrentSymbol ? (
                            <Image source={images.checkBox} style={[styles.images, { width: wp(6), height: wp(6) }]} />
                        ) : (
                            <Icon name="square" size={25} color={colors.white} />
                        )}
                    </TouchableOpacity>
                    <HorizontalSpacer />
                    <ResponsiveText style={styles.text4}>Current Symbol</ResponsiveText>
                </View>
                <ResponsiveText style={styles.text5}>Cancel all</ResponsiveText>

            </View>
            <View style={{ alignSelf: "center" }}>
                <Spacer />
                {(DummyCurrentSymbol && DummyCurrentSymbol.length > 0 ? (
                    <FlatList
                        data={DummyCurrentSymbol}
                        keyExtractor={(item, index) => item.id}
                        ItemSeparatorComponent={(
                            <Spacer height={hp(1)} />
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.OrderMainView}>
                                <View style={styles.orderMainSubView} >
                                    <View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <ResponsiveText style={styles.text6}>{item.name}</ResponsiveText>
                                            <HorizontalSpacer />
                                            <TouchableOpacity>
                                                <Entypo name="chevron-right" size={20} color={colors.white} />

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <ResponsiveText style={[styles.text1, { color: item.type === "Buy" ? colors.green : colors.red }]}>{item.marketType}</ResponsiveText>
                                            <HorizontalSpacer />
                                            <ResponsiveText style={[styles.text1, { color: item.type === "Buy" ? colors.green : colors.red }]}>{item.type}</ResponsiveText>
                                            <HorizontalSpacer />
                                            <ResponsiveText style={[styles.text5]}>{moment(item.time, "MM/DD, HH:mm:ss").format("MM/DD, HH:mm:ss")}</ResponsiveText>

                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                ) : (
                    <>
                        <Spacer />
                        <View style={{ alignItems: "center" }}>
                            <Image source={images.openOrder} style={styles.images} />
                            <Spacer height={hp(1)} />
                            <ResponsiveText style={styles.text4}>No open orders</ResponsiveText>
                        </View>

                    </>
                ))}

            </View>
        </>


    )
}

export const AssetsComponent = (data = coinData) => {
    return (
        <>
            {(data && data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    // ItemSeparatorComponent={(
                    //     <Spacer height={hp(0.2)} />
                    // )}
                    renderItem={({ item }) => (
                        <View style={styles.AssetsView}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image style={styles.image2} source={item.icon} />
                                <HorizontalSpacer />
                                <View>
                                    <ResponsiveText style={styles.text4}>{item.symbol}</ResponsiveText>
                                    <Spacer height={hp(0.5)} />
                                    <ResponsiveText style={[styles.label2, { color: colors.iconColor }]}>{item.name}</ResponsiveText>

                                </View>
                            </View>
                            <View>
                                <ResponsiveText style={[styles.text4, { textAlign: "right" }]}>{item.amount}</ResponsiveText>
                                <Spacer height={hp(0.5)} />
                                <ResponsiveText style={[styles.label3, { color: colors.iconColor, }]}>{item.value}</ResponsiveText>                    </View>
                        </View>
                    )
                    }

                />
            ) : (
                <>
                    <Spacer />
                    <View style={{ alignItems: "center" }}>
                        <Image source={images.openOrder} style={styles.images} />
                        <Spacer height={hp(1)} />
                        <ResponsiveText style={styles.text4}>No open orders</ResponsiveText>
                    </View>

                </>
            ))}

        </>

    )
}



const styles = StyleSheet.create({
    header: {
        width: wp(90),
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center"


    },
    headerText: {
        fontSize: 22,
        fontWeight: "500",
        color: colors.white,
        fontFamily: fontFamily.appTextMedium
    },
    currentPriceStyle: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.mainColor,
        fontFamily: fontFamily.appTextMedium
    },
    tradingGraohImage: {
        width: wp(6),
        height: wp(6),
        resizeMode: "contain"
    },
    buySellRowView: {
        width: wp(43),
        height: hp(4.5),
        borderRadius: wp(10),
        backgroundColor: colors.cardsBgColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: colors.white
    },
    orderBookView: {
        width: wp(43),

    },
    buySellButton: {
        width: wp(21.5),
        height: hp(4.5),
        borderRadius: wp(10),
        alignItems: "center",
        justifyContent: "center"
    },
    buySellButtonText: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: fontFamily.appTextRegular

    },
    text1: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.white,
        fontFamily: fontFamily.appTextRegular
    },
    minuePlusText: {
        fontSize: 22,
        fontWeight: "400",
        color: colors.white
    },
    slider: {
        width: wp(43),
        borderWidth: 1
    },
    tickContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 20,
        right: 20,
        height: 30,
        pointerEvents: 'none',
        bottom: 15,
    },
    tick: {
        width: 1,
        height: 12,
        backgroundColor: colors.cardBorderColor,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        color: 'white',
        fontSize: 14,
    },
    label2: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor,
        fontFamily: fontFamily.appTextMedium
    },
    label3: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.iconColor,
        textAlign: "right",
        fontFamily: fontFamily.appTextMedium
    },



    orderBookView2: {
        width: wp(43),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(2),
        paddingVertical: wp(3),
        backgroundColor: colors.red,
        paddingBottom: 10,
        opacity: 0.3
    },
    textFlatList: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
    },
    textFlatList1: {
        fontSize: 11,
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
    },
    textPrice: {
        fontSize: 10,
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor,
    },
    text2: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor
    },
    images: {
        width: wp(5),
        height: wp(5),
        resizeMode: "contain",
        // borderWidth:1
    },
    image2: {
        width: wp(10),
        height: wp(10),
        resizeMode: "contain",
        // borderWidth:1
    },
    text4: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.white
    },
    text5: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.iconColor
    },
    OrderMainView: {
        width: wp(90),
        justifyContent: "center",
        backgroundColor: colors.cardsBgColor,
        borderRadius: wp(3)
    },
    orderMainSubView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        // alignSelf:"center"
        paddingHorizontal: wp(5),
        paddingVertical: wp(2)
    },
    text6: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: fontFamily.appTextMedium,
        color: colors.white
    },
    text7: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.white,
        fontFamily: fontFamily.appTextMedium
    },
    AssetsView: {
        width: wp(100),
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
        flexDirection: "row",
        justifyContent: "space-between"
    }



})