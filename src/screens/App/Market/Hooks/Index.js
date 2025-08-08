import { useEffect, useState } from "react";
import { colors, Routes } from "../../../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPairApi } from "../../../../constants/Api/Index";
import { Keyboard } from "react-native";
import { hp } from "../../../../components/ResponsiveComponent";


export const UseMarket = (props) => {
    const [marketList, setMarketList] = useState([]);
    const [searchText,setSearchText] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getMarketData();
    }, [])

     useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
         props.navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
         
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // setIsVisible(false); 
       
    props.navigation.setOptions({
      tabBarStyle: {
        paddingTop: hp(0.9),
        backgroundColor: colors.bottomTabColor,
        borderTopWidth: 0,
      }, 
    });
      }
    );

    return () => {
      // Clean up listeners on component unmount
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

    const MarketPress = async(item) => {
        await AsyncStorage.setItem("selectedData", JSON.stringify(item))
        props?.navigation.navigate(Routes.AppNavigator,{ screen: Routes.TradeGraphScreen, params: { selectedData: item } })
    }

    const getMarketData = async () => {
        try {
            setLoading(true)
            const response = await getPairApi(1,20);
            setMarketList(response?.data?.data)
            console.log("Market data fetched successfully:", response);
        } catch (error) {
            console.error("Error fetching market data:", error);
            setLoading(false)
        } finally{
            setLoading(false)
        }
    }

     const filteredMarketList = marketList.filter((item) =>
        item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchText.toLowerCase())
    );
    return {
        marketList:filteredMarketList, setMarketList,
        MarketPress,
        searchText,setSearchText,
        loading

    }
}


