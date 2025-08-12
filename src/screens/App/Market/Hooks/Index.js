import { useEffect, useState } from "react";
import { colors, Routes } from "../../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPairApi } from "../../../../constants/Api/Index";
import { Keyboard } from "react-native";
import { hp } from "../../../../components/ResponsiveComponent";


export const UseMarket = (props) => {
    const [marketList, setMarketList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [loading, setLoading] = useState(false)
    const [Page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        getMarketData();
    }, [])



    const MarketPress = async (item) => {
        await AsyncStorage.setItem("selectedData", JSON.stringify(item))
        props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.TradeGraphScreen, params: { selectedData: item } })
    }

    const getMarketData = async (newPage) => {
        if (hasMore) {
            try {
                setLoading(true)
                const response = await getPairApi(newPage || Page, 20);
                setMarketList(response?.data?.data)
                const marketData = response?.data?.data
                setPage(newPage)
                setHasMore(marketData?.length === 20)
                console.log("Market data fetched successfully:", response);
            } catch (error) {
                console.error("Error fetching market data:", error);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
    }

    const handleMarketData = () => {
    if (Page) {
      getMarketData(Page+1);
    }
  };

    const filteredMarketList = marketList.filter((item) =>
        item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchText.toLowerCase())
    );
    return {
        marketList: filteredMarketList, setMarketList,
        MarketPress,
        searchText, setSearchText,
        loading , handleMarketData

    }
}


