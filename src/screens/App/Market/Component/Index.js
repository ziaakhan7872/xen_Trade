import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'
import { ResponsiveText } from '../../../../components/ResponsiveText'
import AntDesign from "react-native-vector-icons/AntDesign"
import { HorizontalSpacer } from '../../../../components/Spacer'
import images from '../../../../images'
import { MarketData } from '../../../../utilities/dummyData'

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
                    <View style={style.MarketDataView}>
                        {/* <AntDesign name="star" size={15} color={colors.mainColor}/> */}
                        <Image source={images.starFill} style={style.StarImage} />
                        <View>
                            <ResponsiveText>{item.name}</ResponsiveText>
                            <ResponsiveText>Vol {item.Vol}</ResponsiveText>

                        </View>
                         <View>
                            <ResponsiveText>{item.previousPrice}</ResponsiveText>
                            <ResponsiveText>{item.InUSdt}</ResponsiveText>

                        </View>
                         <View>
                            <ResponsiveText>{item.previousPrice}</ResponsiveText>

                        </View>
                    </View>
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
        width: wp(100),
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        marginHorizontal: wp(4),
        // marginVertical:wp(4)
    },
    StarImage: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: "contain"
    }
})

