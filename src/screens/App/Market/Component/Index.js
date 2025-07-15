import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import AntDesign from "react-native-vector-icons/AntDesign"
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import images from '../../../../images'
import { MarketData } from '../../../../utilities/dummyData'
import Line from '../../../../components/Liner'

export const RenderMarketHeader = () => {
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

export const RenderMarketList = ({ marketData = MarketData }) => {
    return (
        <View style={style.MarketView}>
            <FlatList
                data={marketData}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
                renderItem={({ item }) => (
                    <>
                     <View style={style.MarketDataView}>
                        <View style={{  flexDirection: "row", alignItems: "center",width:wp(37)}}>
                            <TouchableOpacity>
                            <Image source={item.favourite?images.starFill:images.starUnFill} style={style.StarImage} />
                            </TouchableOpacity>
                            <HorizontalSpacer />
                            <View>
                                <ResponsiveText style={style.textHeader}>{item.name}</ResponsiveText>
                                <ResponsiveText style={style.volText}>Vol {item.Vol}</ResponsiveText>
                            </View>
                        </View>
                        <View style={{  alignItems: "flex-start",justifyContent:"flex-start",width:wp(25)}}>
                            <ResponsiveText style={[style.textHeader]}>{item.previousPrice}</ResponsiveText>
                            <ResponsiveText style={style.volText}>{item.InUSdt}</ResponsiveText>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" ,width:wp(25)}}>
                            <ResponsiveText style={[style.textHeader,{color:item.Market.startsWith("+")?colors.green:colors.red}]}>{item.Market}</ResponsiveText>
                        </View>
                        <Spacer/>
                        
                    </View>
                    <Line height={hp(0.1)}/>
                    </>
                   


                )}
            />
        </View>
    )
}
const style = StyleSheet.create({
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
        color: colors.white
    },
    filterImage: {
        width: wp(4),
        height: wp(4),
        resizeMode: "contain"
    },
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
        color: colors.white
    },
    volText: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.iconColor
    }
})

