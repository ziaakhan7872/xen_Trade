import { useEffect, useState } from "react";
import { GetMarketListApi } from "../../../../constants/Api/Index";


export const UseMarket = () => {
    const [marketList,setMarketList] = useState([]);

    useEffect(()=>{
        getMarketData();
    },[])

    const getMarketData = async()=>{
        try {
            const response = await GetMarketListApi();
            setMarketList(response?.data?.data)
            console.log("Market data fetched successfully:", response); 
        } catch (error) {
            console.error("Error fetching market data:", error);
        }
    }
  return {
    marketList,setMarketList

  }
}


