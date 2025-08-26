import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Routes } from "../../../../../constants";
import { getCurrentCoinPrice, getGraphChartApi, getOrderBookApi, getPairApi } from "../../../../../Backend/Api/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSocket } from "../../../../../Backend/SocketContextProvider/Socket";

const UseTradeGraphScreen = (props) => {
  const [selectedData, setSelectedData] = useState(props?.route?.params?.selectedData || null)
  const favouriteBottomSheetRef = useRef(null)
  const socketRef = useRef(null)
  const { centrifugueBuild } = useSocket()
  const [starPress, setStarPress] = useState(false);

  const [orderBookHeaderPress, setOrderBookHeaderPress] = useState("orderbook")
  const [pair, setPairs] = useState([])
  const [searchText, setSearchText] = useState("")
  const [page, setPage] = useState(1)
  const [currentCoinPrice, setCurrentCoinPrice] = useState(0)
  const [currentSubscription, setCurrentSubscription] = useState(null)
  const [timeInterval, setTimeInterval] = useState("5m")
  const [bullishState, setBullishState] = useState(false)
  const [candleChartData, setCandleChartData] = useState([]);
  const [orderBook,setOrderBook] = useState([])


  // const selectRandomData = useCallback(() => {
  //   setCandleChartData((prevData) => {
  //     const lastCandle = prevData[prevData.length - 1];
  //     const basePrice = lastCandle.close;

  //     const randomHigh = basePrice + Math.floor(Math.random() * 500);
  //     const randomLow = basePrice - Math.floor(Math.random() * 500);
  //     const randomOpen = basePrice + Math.floor(Math.random() * 200 - 100);
  //     const randomClose = basePrice + Math.floor(Math.random() * 200 - 100);
  //     const randomVolume = Math.floor(Math.random() * 200000) + 50000;

  //     const newTimestamp = lastCandle.timestamp + 60 * 1000;

  //     const newCandle = {
  //       timestamp: newTimestamp,
  //       open: randomOpen,
  //       high: randomHigh,
  //       low: randomLow,
  //       close: randomClose,
  //       volume: randomVolume,
  //     };

  //     return [...prevData, newCandle];
  //   });
  // }, []);

 

  // useEffect(() => {
  //   const interval = setInterval(selectRandomData, 10000);
  //   return () => clearInterval(interval);
  // }, [selectRandomData]);

  const BuyPress = () => {
    props?.navigation?.navigate(Routes.BottomNavigator, { screen: Routes.ExchangeScreen, params: { selectedData, buySellButtonProps: "buy" } });
    console.log("Buy button pressed");
  };
  const SellPress = () => {
    props?.navigation?.navigate(Routes.BottomNavigator, { screen: Routes.ExchangeScreen, params: { selectedData, buySellButtonProps: "sell" } });
    console.log("Sell button pressed");
  };

  useEffect(() => {
    getPair()
  }, [])

  useEffect(() => {
    getCurrentCinPriceFunction()
    getOrderBook()
  }, [selectedData])
  useEffect(() => {
    getGraphChartFunction()
  }, [selectedData, timeInterval])

  //Current Coin Price Socket

  useEffect(() => {
    console.log("centrifugueBuild", centrifugueBuild)
    const channelName = `${selectedData?.symbol}@trade`;


    let sub = centrifugueBuild.getSubscription(channelName)

    if (!sub) {
      sub = centrifugueBuild.newSubscription(channelName);
    }
    if (currentSubscription) {
      currentSubscription?.unsubscribe();
      setCurrentSubscription(null);
    }
    sub.on("subscribed", (ctx) => {
      console.log(`Subscribed to ${channelName}`, ctx);
    });

    sub.on("publication", (ctx) => {
      console.log("publication to trade ", channelName, ctx?.data);
      setCurrentCoinPrice(ctx?.data?.p)
    });

    sub.on("error", (err) => {
      console.error(`Subscription error on ${channelName}:`, err);
    });

    sub.on("unsubscribed", () => {
      // optional
    });

    if (sub.state !== "subscribed" && sub.state !== "subscribing") {
      console.log(sub, "subscribing")
      sub.subscribe();
      setCurrentSubscription(sub)
    }

    socketRef.current = sub;

    return () => {

      socketRef.current = null;
    };
  }, [centrifugueBuild, selectedData]);

  //Graph Chart Socket

  useEffect(() => {
    console.log("centrifugueBuild", centrifugueBuild)
    const channelName = `${selectedData?.symbol}@kline_${timeInterval}`;

    let sub = centrifugueBuild.getSubscription(channelName)

    if (!sub) {
      sub = centrifugueBuild.newSubscription(channelName);
    }
    if (currentSubscription) {
      currentSubscription?.unsubscribe();
      setCurrentSubscription(null);
    }
    sub.on("subscribed", (ctx) => {
      console.log(`Subscribed to ${channelName}`, ctx);
    });

    sub.on("publication", (ctx) => {
      console.log("publication to trade ", channelName, ctx?.data);
      const chartData = formatGraphData(ctx?.data)
      setCandleChartData(prev => [...prev, ...chartData]);
      const updatedCandel = [...candleChartData, ...chartData];
      const last = updatedCandel[updatedCandel.length -1];
      if (last) {
        setBullishState(last?.close >= last?.open)
      }
    });

    sub.on("error", (err) => {
      console.error(`Subscription error on ${channelName}:`, err);
    });

    sub.on("unsubscribed", () => {
      // optional
    });

    if (sub.state !== "subscribed" && sub.state !== "subscribing") {
      console.log(sub, "subscribing")
      sub.subscribe();
      setCurrentSubscription(sub)
    }

    socketRef.current = sub;

    return () => {

      socketRef.current = null;
    };
  }, [centrifugueBuild, selectedData]);

  //Order Book Socket

   useEffect(() => {
    console.log("centrifugueBuild", centrifugueBuild)
    const channelName = `${selectedData?.symbol}@depth`;


    let sub = centrifugueBuild.getSubscription(channelName)

    if (!sub) {
      sub = centrifugueBuild.newSubscription(channelName);
    }
    if (currentSubscription) {
      currentSubscription?.unsubscribe();
      setCurrentSubscription(null);
    }
    sub.on("subscribed", (ctx) => {
      console.log(`Subscribed to ${channelName}`, ctx);
    });

    sub.on("publication", (ctx) => {
      console.log("publication", channelName, ctx?.data);
      setOrderBook(ctx?.data)
    });

    sub.on("error", (err) => {
      console.error(`Subscription error on ${channelName}:`, err);
    });

    sub.on("unsubscribed", () => {
      // optional
    });

    if (sub.state !== "subscribed" && sub.state !== "subscribing") {
      console.log(sub, "subscribing")
      sub.subscribe();
      setCurrentSubscription(sub)
    }

    socketRef.current = sub;

    return () => {

      socketRef.current = null;
    };
  }, [centrifugueBuild, selectedData]);

  const getOrderBook = async () => {
      try {
        const pair = selectedData?.symbol
        const OrderBook = await getOrderBookApi(pair)
        console.log(OrderBook, "orderBook")
        setOrderBook(OrderBook?.data?.orderBook)
  
      } catch (error) {
        console.log("error in orderBook", error)
      }
    }


  const getPair = async (newPage = 1) => {
    try {
      const response = await getPairApi(newPage, 20)
      setPairs(response?.data?.data)
      console.log(response)
      setPage(newPage)
      const asyncData = await AsyncStorage.getItem("selectedData")
      if (asyncData) {
        setSelectedData(JSON.parse(asyncData));
      }
      else {
        const selectedCoin = response?.data?.data?.find(item => item?.base === "btc")
        setSelectedData(selectedCoin)
        await AsyncStorage.setItem("selectedData", JSON.stringify(selectedCoin))
      }
    } catch (error) {
      console.error("Error fetching pairs:", error)
    }
  }

  const getCurrentCinPriceFunction = async () => {
    try {
      const pair = selectedData?.symbol
      const price = await getCurrentCoinPrice({ pair })
      console.log(price, "current Price in trade graph screen")
      setCurrentCoinPrice(price?.data?.price)

    } catch (error) {
      console.log("error in orderBook", error)
    }
  }

  const getGraphChartFunction = async () => {
    try {
      const payload = {
        symbol: selectedData?.symbol,
        interval: timeInterval
      }
      const response = await getGraphChartApi(payload)
      console.log(response, "graph response")
      const chartData = formatGraphData(response?.data)
      if (!chartData?.length) return;

    setCandleChartData(chartData);

    const lastCandle = chartData[chartData.length - 1];
    setBullishState(lastCandle.close >= lastCandle.open);
    console.log(bullishState, "bullishState");
    } catch (error) {
      console.log(error?.response, "error in graph chart function")
    }
  }


  const formatGraphData = (rawData) => {
    return rawData?.map(item => ({
      timestamp: item[0] * 1000,
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
      volume: parseFloat(item[5]),
      volumequte: parseFloat(item[7])
    }))
  }


  return {
    starPress, setStarPress,
    candleChartData, setCandleChartData,
    BuyPress, SellPress,
    orderBookHeaderPress, setOrderBookHeaderPress,
    favouriteBottomSheetRef,
    selectedData, pair,
    searchText, setSearchText, setSelectedData, currentCoinPrice,
    timeInterval, setTimeInterval,bullishState,orderBook
  };
};

export default UseTradeGraphScreen;
