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


export const RenderFavouriteCoinList = ({ marketData = MarketData }) => {
    return (
        <View style={style.MarketView}>
            <Spacer/>
            <RenderSearchHeader/>
            <Spacer/>
            <RenderFavourteHeader />
            <FlatList
                data={marketData}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <>
                        <View style={style.MarketDataView}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: wp(37) }}>
                                <TouchableOpacity>
                                    <Image source={item.favourite ? images.starFill : images.starUnFill} style={style.StarImage} />
                                </TouchableOpacity>
                                <HorizontalSpacer />
                                <View>
                                    <ResponsiveText style={style.textHeader}>{item.name}</ResponsiveText>
                                    <ResponsiveText style={style.volText}>Vol {item.Vol}</ResponsiveText>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-start", justifyContent: "flex-start", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader]}>{item.previousPrice}</ResponsiveText>
                                <ResponsiveText style={style.volText}>{item.InUSdt}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end", width: wp(25) }}>
                                <ResponsiveText style={[style.textHeader, { color: item.Market.startsWith("+") ? colors.green : colors.red }]}>{item.Market}</ResponsiveText>
                            </View>
                            <Spacer />

                        </View>
                        <Line height={hp(0.1)} />
                    </>



                )}
            />
        </View>
    )
}

const RenderSearchHeader = () => {
    return (
        <TouchableOpacity style={style.searchButton}>
            <HorizontalSpacer />
            <EvilIcons name="search" color={colors.mainColor} size={25} />
            <HorizontalSpacer />
            <ResponsiveText style={style.searchText}>Search...</ResponsiveText>
        </TouchableOpacity>
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
        fontFamily:fontFamily.mainTextMedium
    },
    volText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.iconColor,
        fontFamily:fontFamily.appTextRegular
    },
    filterImage: {
        width: wp(4),
        height: wp(4),
        resizeMode: "contain"
    },
      searchButton:{
        width:wp(90),
        backgroundColor:colors.searchBar,
        paddingVertical:hp(1.7),
        borderRadius:wp(3),
        flexDirection:"row",
        alignItems:"center"
    // justifyContent:"space-between"

    },
    searchText:{
        fontSize:14,
        fontWeight:"400",
        color:colors.iconColor
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
        fontFamily:fontFamily.mainTextRegular
    },
})