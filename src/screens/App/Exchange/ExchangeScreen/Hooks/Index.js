import { useEffect, useRef, useState } from "react"
import { GetAccountBalanceMyMarket, getPairApi, PlaceOrder } from "../../../../../Backend/Api/Index"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector } from "react-redux"
import BigNumber from 'bignumber.js';
import { InteractionManager } from "react-native";
import { useSocket } from "../../../../../Backend/SocketContextProvider/Socket";



export const UseExchange = (props) => {
  const tradngBottomSheetRef = useRef(null)
  const favouriteBottomSheetRef = useRef(null)
  const socketRef = useRef(null)
  const { user } = useSelector((state) => state.user);
  const { centrifugueBuild } = useSocket()

  const userId = user?.id

  const [buySellButton, setBuySellButton] = useState(props?.route?.params?.buySellButtonProps || "buy")
  const [buyerSlider, setBuyerSlider] = useState(0);
  const [sellSlider, setSelSlider] = useState(0);
  const [currentOrderHistoryPress, setCurrentOrderHistoryPress] = useState("currentOrder");
  const [currentOrder, setCurrentOrder] = useState(0)
  const [isCurrentSymbol, setIsCurrentSymbol] = useState(false)
  const [tradingType, setTradingType] = useState("limit")
  const [pairs, setPairs] = useState([])
  const [selectedData, setSelectedData] = useState(props?.route?.params?.selectedData || null);
  const [availableQuoteBalance, setAvailableQuoteBalance] = useState("");
  const [availableBaseBalance, setAvailableBaseBalance] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [cureentCoinPrice, setCurrentCoinPrice] = useState(22976.27)
  const [stage, setStage] = useState(0);
  const [orderBook, setOrderBook] = useState({})
  const [Page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [currentSubscription, setCurrentSubscription] = useState(null)



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
  }, [centrifugueBuild, selectedData?.symbol]);



  useEffect(() => {
    setPrice(quantity * cureentCoinPrice);
  }, []);


  const handleBuyPriceChange = (value) => {
    if (value === "") {
      setPrice("");
      setQuantity("");
      return;
    }


    setPrice(value);

    const priceBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(cureentCoinPrice || 0);

    if (!coinPriceBN.isZero() && !priceBN.isNaN()) {
      const newQuantity = priceBN.dividedBy(coinPriceBN).toString();
      const newQ = new BigNumber(newQuantity).toFormat(6)
      setQuantity(newQ);
      console.log("New Quantity:", newQuantity);
    }
  };



  const handleBuyQuantityChange = (value) => {
    if (value === "") {
      setQuantity("");
      setPrice("");
      return;
    }

    const regex = /^\d*\.?\d{0,6}$/;
    if (!regex.test(value)) return;
    setQuantity(value);
    const qtyBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(cureentCoinPrice || 0);

    if (!qtyBN.isNaN() && !coinPriceBN.isZero()) {
      const newPrice = qtyBN.multipliedBy(coinPriceBN).toString();
      setPrice(newPrice);
    }
  };

  const handleBuySliderChange = (value) => {
    const availableBalance = new BigNumber(availableQuoteBalance || 0);
    const sliderValue = new BigNumber(value).dividedBy(100);
    const newPrice = availableBalance.multipliedBy(sliderValue).toString();
    setPrice(newPrice);
    const coinPriceBN = new BigNumber(cureentCoinPrice || 0);
    if (!coinPriceBN.isZero() && !new BigNumber(newPrice).isNaN()) {
      const newQuantity = new BigNumber(newPrice).dividedBy(coinPriceBN).toString();
      const formattedQuantity = new BigNumber(newQuantity).toFormat(6);
      setQuantity(formattedQuantity);
    }
    setBuyerSlider(value);

  }



  const getPair = async (newPage) => {
    try {
      const response = await getPairApi(newPage, 20)
      setPairs(response?.data?.data)
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

  const handleMarketData = () => {
    if (Page) {
      getPair(Page + 1);
    }
  };

  const filteredPair = pairs.filter((item) =>
    item?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
    item?.symbol?.toLowerCase().includes(searchText.toLowerCase())
  );

  const getAvailableBalanceQuote = async () => {
    try {
      const availableQuoteBalance = await GetAccountBalanceMyMarket(userId, selectedData?.quoteMarketId)
      console.log("Available Quote balance:", availableQuoteBalance)
      setAvailableQuoteBalance(availableQuoteBalance?.data?.data?.amount || "0")
      console.log("Available Quote amount:", availableQuoteBalance?.data?.data?.amount)
    } catch (error) {
      console.error("Error fetching available quote balance:", error)
    }
  }

  const getAvailableBalanceBase = async () => {
    try {
      const availableBaseBalance = await GetAccountBalanceMyMarket(userId, selectedData?.baseMarketId)
      console.log("Available Base balance:", availableBaseBalance)
      setAvailableBaseBalance(availableBaseBalance?.data?.data?.amount || "0")
    } catch (error) {
      console.error("Error fetching available base balance:", error)
    }
  }

  const discreaseQuantity = () => {
    const currentQty = new BigNumber(quantity || 0); // Ensure numeric
    const newValue = currentQty.minus(1);
    if (newValue.isNegative()) return; // prevent negative
    setQuantity(newValue.toString());
    handleBuyQuantityChange(newValue.toString());
  };

  const addQuantity = () => {
    const currentQty = new BigNumber(quantity || 0);
    const newValue = currentQty.plus(1);
    setQuantity(newValue.toString());
    handleBuyQuantityChange(newValue.toString());
  };

  useEffect(() => {
    getPair()
  }, [])

  useEffect(() => {
    getAvailableBalanceQuote()
    getAvailableBalanceBase()
  }, [selectedData])


  const buyOrder = async () => {
    try {
      const payload = {
        price: price,
        quantity: quantity,
        side: "buy",
        symbol: selectedData?.symbol,
        type: tradingType
      }
      const response = await PlaceOrder(payload)
      console.log(response, "place order")
    } catch (error) {
      console.log(error?.response, "error of place order")
    }
  }


  return {
    stage, setStage,
    buySellButton, setBuySellButton,
    buyerSlider, setBuyerSlider,
    sellSlider, setSelSlider,
    currentOrderHistoryPress, setCurrentOrderHistoryPress,
    currentOrder, setCurrentOrder,
    isCurrentSymbol, setIsCurrentSymbol,
    tradngBottomSheetRef, favouriteBottomSheetRef,
    tradingType, setTradingType,
    selectedData, availableBaseBalance, availableQuoteBalance,
    quantity, setQuantity, discreaseQuantity, addQuantity,
    price, setPrice,
    cureentCoinPrice, setCurrentCoinPrice,
    handleBuyPriceChange, handleBuyQuantityChange, handleBuySliderChange,
    buyOrder, orderBook,
    pairs: filteredPair, searchText, setSearchText,
    setSelectedData
  }
}


