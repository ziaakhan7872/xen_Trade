import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import Line from '../../../../components/Liner'
import { MarketData } from '../../../../utilities/dummyData'
import { colors, fontFamily } from '../../../../constants'
import images from '../../../../images'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import InputText from '../../../../components/InputText'


export const RenderFavouriteCoinList = ({ marketData, value, onchangeText,onPress }) => {
    return (
        <View style={style.MarketView}>
            <Spacer />
            <RenderSearchHeader value={value} onchangeText={onchangeText} />
            <Spacer />
            {/* jskms */}
            <RenderFavourteHeader />
            <FlatList
                data={marketData}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity onPress={()=>onPress(item)} style={style.MarketDataView}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: wp(37) }}>
                                <TouchableOpacity>
                                    <Image source={images.starUnFill} style={style.StarImage} />
                                </TouchableOpacity>
                                <HorizontalSpacer />
                                <View>
                                    <ResponsiveText style={style.textHeader}>{item.symbol}</ResponsiveText>
                                    <ResponsiveText style={style.volText}>Vol {item.Vol || "42.35M"}</ResponsiveText>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-start", justifyContent: "flex-start", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader]}>{item.previousPrice || "1.25"}</ResponsiveText>
                                <ResponsiveText style={style.volText}>${item.InUSdt || "2,254.00"}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader, { color: colors.green }]}>{item.Market || "0.01%"}</ResponsiveText>
                                {/* {color:item.Market.startsWith("+")?colors.green:colors.red} */}
                            </View>
                            <Spacer />

                        </TouchableOpacity>
                        <Line height={hp(0.1)} />
                    </>



                )}
            />
        </View>
    )
}

const RenderSearchHeader = ({ value, onchangeText }) => {
    return (

        <InputText
            value={value}
            onChangeText={onchangeText}
            style={style.inputText}
            rightIcon={true}
            placeholderTextColor={colors.iconColor}
            placeholder={"Search.."}
        />


    )
}


const RenderFavourteHeader = () => {
    return (
        <View style={style.filterHeader}>
            <View style={style.filterHeaderInnerView}>
                <ResponsiveText style={style.filterText}>All Pairs</ResponsiveText>
                <HorizontalSpacer width={wp(1)} />
                <Image source={images.filterMaarketHeader} style={style.filterImage} />
            </View>
            <View style={[style.filterHeaderInnerView, { justifyContent: "center" }]}>
                <ResponsiveText style={style.filterText}>Last Price</ResponsiveText>
                <HorizontalSpacer width={wp(1)} />
                <Image source={images.filterMaarketHeader} style={style.filterImage} />
            </View>
            <View style={[style.filterHeaderInnerView, { justifyContent: "flex-end" }]}>
                <ResponsiveText style={style.filterText}>24h Chg</ResponsiveText>
                <HorizontalSpacer width={wp(1)} />
                <Image source={images.filterMaarketHeader} style={style.filterImage} />
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    MarketView: {
        // width: wp(100),
        alignItems: "center",
        flex: 1
    },
    MarketDataView: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderBottomWidth: 1,
        // borderBottomColor: colors.borderColor,
        marginHorizontal: wp(4),
        paddingVertical: hp(1.5), // 👈 Adds top & bottom spacing
    },
    StarImage: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: "contain"
    },
    textHeader: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.white,
        fontFamily: fontFamily.mainTextMedium
    },
    volText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.iconColor,
        fontFamily: fontFamily.appTextRegular
    },
    filterImage: {
        width: wp(4),
        height: wp(4),
        resizeMode: "contain"
    },
    searchButton: {
        width: wp(90),
        backgroundColor: colors.searchBar,
        paddingVertical: hp(1.7),
        borderRadius: wp(3),
        flexDirection: "row",
        alignItems: "center"
        // justifyContent:"space-between"

    },
    searchText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.iconColor
    },
    filterHeader: {
        width: wp(90),
        flexDirection: "row",
        justifyContent: "space-between",

    },
    filterHeaderInnerView: {
        flexDirection: "row",
        width: wp(25),
        alignItems: "center"
    },
    filterText: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.white,
        fontFamily: fontFamily.mainTextRegular
    },
    inputText: {
        width: wp(90),
        // paddingVertical:hp(1),
        backgroundColor: colors.inputBgColor,
        borderRadius: wp(3)
    }
})