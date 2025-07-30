import { useEffect, useState } from "react";
import { Routes } from "../../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPairApi } from "../../../../constants/Api/Index";


export const UseMarket = (props) => {
    const [marketList, setMarketList] = useState([]);

    useEffect(() => {
        getMarketData();
    }, [])

    const MarketPress = async(item) => {
        await AsyncStorage.setItem("selectedData", JSON.stringify(item))
        props?.navigation.navigate(Routes.AppNavigator,{ screen: Routes.TradeGraphScreen, params: { selectedData: item } })
    }

    const getMarketData = async () => {
        try {
            const response = await getPairApi(1,20);
            setMarketList(response?.data?.data)
            console.log("Market data fetched successfully:", response);
        } catch (error) {
            console.error("Error fetching market data:", error);
        }
    }
    return {
        marketList, setMarketList,
        MarketPress

    }
}


