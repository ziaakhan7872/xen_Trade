import { use, useEffect, useRef, useState } from "react"
import { DeleteCurrentOrder, GetAccountBalanceMyMarket, getCurrentCoinPrice, getCurrentOrder, getOrderBookApi, getPairApi, PlaceOrder } from "../../../../../Backend/Api/Index"
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
  const [currentOrder, setCurrentOrder] = useState([])
  const [isCurrentSymbol, setIsCurrentSymbol] = useState(false)
  const [tradingType, setTradingType] = useState("limit")
  const [pairs, setPairs] = useState([])
  const [selectedData, setSelectedData] = useState(props?.route?.params?.selectedData || null);
  const [availableQuoteBalance, setAvailableQuoteBalance] = useState("");
  const [availableBaseBalance, setAvailableBaseBalance] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0)
  const [sellQuantity, setSellQuantity] = useState(1);
  const [cureentCoinPrice, setCurrentCoinPrice] = useState(22976.27)
  const [stage, setStage] = useState(0);
  const [orderBook, setOrderBook] = useState({})
  const [Page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [currentSubscription, setCurrentSubscription] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [newCurrentCoinPrice, setNewCurrentCoinPrice] = useState(0)
  // const [current]



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

  const getCurrentCinPriceFunction = async () => {
    try {
      const pair = selectedData?.symbol
      const price = await getCurrentCoinPrice({ pair })
      console.log(price, "current Price")
      setCurrentCoinPrice(price?.data?.price)
      setNewCurrentCoinPrice(price?.data?.price)

    } catch (error) {
      console.log("error in orderBook", error)
    }
  }

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

  useEffect(() => {
    getCurrentCinPriceFunction()
    getOrderBook()
  }, [selectedData])



  useEffect(() => {
    setPrice(quantity * newCurrentCoinPrice);
    setSellPrice(sellQuantity * newCurrentCoinPrice)
  }, [newCurrentCoinPrice]);


  const handleBuyPriceChange = (value) => {
    if (value === "") {
      setPrice("");
      setQuantity("");
      return;
    }


    setPrice(value);

    const priceBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);

    if (!coinPriceBN.isZero() && !priceBN.isNaN()) {
      const newQuantity = priceBN.dividedBy(coinPriceBN).toString();
      const newQ = new BigNumber(newQuantity).toFormat(6)
      setQuantity(newQ);
      console.log("New Quantity:", newQuantity);
    }
  };

  const handleSellPriceChange = (value) => {
    if (value === "") {
      setSellPrice("");
      setSellQuantity("");
      return;
    }


    setSellPrice(value);

    const priceBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);

    if (!coinPriceBN.isZero() && !priceBN.isNaN()) {
      const newQuantity = priceBN.dividedBy(coinPriceBN).toString();
      const newQ = new BigNumber(newQuantity).toFormat(6)
      setSellQuantity(newQ);
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
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);

    if (!qtyBN.isNaN() && !coinPriceBN.isZero()) {
      const newPrice = qtyBN.multipliedBy(coinPriceBN).toString();
      setPrice(newPrice);
    }
  };


  const handleSellQuantityChange = (value) => {
    if (value === "") {
      setSellQuantity("");
      setSellPrice("");
      return;
    }

    const regex = /^\d*\.?\d{0,6}$/;
    if (!regex.test(value)) return;
    setSellQuantity(value);
    const qtyBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);

    if (!qtyBN.isNaN() && !coinPriceBN.isZero()) {
      const newPrice = qtyBN.multipliedBy(coinPriceBN).toString();
      setSellPrice(newPrice);
    }
  };

  const handleBuySliderChange = (value) => {
    const availableBalance = new BigNumber(availableQuoteBalance || 0);
    const sliderValue = new BigNumber(value).dividedBy(100);
    const newPrice = availableBalance.multipliedBy(sliderValue).toString();
    setPrice(newPrice);
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);
    if (!coinPriceBN.isZero() && !new BigNumber(newPrice).isNaN()) {
      const newQuantity = new BigNumber(newPrice).dividedBy(coinPriceBN).toString();
      const formattedQuantity = new BigNumber(newQuantity).toFormat(6);
      setQuantity(formattedQuantity);
    }
    setBuyerSlider(value);

  }

  const handleSellSliderChange = (value) => {
    const availableBalance = new BigNumber(availableBaseBalance || 0);
    const sliderValue = new BigNumber(value).dividedBy(100);
    const newPrice = availableBalance.multipliedBy(sliderValue).toString();
    setSellPrice(newPrice);
    const coinPriceBN = new BigNumber(newCurrentCoinPrice || 0);
    if (!coinPriceBN.isZero() && !new BigNumber(newPrice).isNaN()) {
      const newQuantity = new BigNumber(newPrice).dividedBy(coinPriceBN).toString();
      const formattedQuantity = new BigNumber(newQuantity).toFormat(6);
      setSellQuantity(formattedQuantity);
    }
    setSelSlider(value);

  }



  const getPair = async (newPage=1) => {
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
  const discreaseSellQuantity = () => {
    const currentQty = new BigNumber(sellQuantity || 0); // Ensure numeric
    const newValue = currentQty.minus(1);
    if (newValue.isNegative()) return; // prevent negative
    setSellQuantity(newValue.toString());
    handleSellQuantityChange(newValue.toString());
  };

  const addQuantity = () => {
    const currentQty = new BigNumber(quantity || 0);
    const newValue = currentQty.plus(1);
    setQuantity(newValue.toString());
    handleBuyQuantityChange(newValue.toString());
  };
  const addSellQuantity = () => {
    const currentQty = new BigNumber(sellQuantity || 0);
    const newValue = currentQty.plus(1);
    setSellQuantity(newValue.toString());
    handleSellQuantityChange(newValue.toString());
  };

  useEffect(() => {
    getPair()
    getOrder()

  }, [])

  useEffect(() => {
    getAvailableBalanceQuote()
    getAvailableBalanceBase()
  }, [selectedData])



  const getOrder = async () => {
    try {
      const payload = {
        page: 1,
        size: 20,
        orderDir: "desc"
      }
      const history = await getCurrentOrder(payload)
      setCurrentOrder(history?.data?.Orders)
      console.log(history, "history of current order")
    } catch (error) {
      console.log(error, "error in history of orders")
    }
  }


  const buyOrder = async () => {
    try {
      setLoading(true)

      const payload = {
        price: price.toString(),
        quantity: quantity.toString(),
        side: "buy",
        symbol: selectedData?.symbol,
        type: tradingType
      }
      const response = await PlaceOrder(payload)
      console.log(response, "place order")
      if (response?.status == 201) {
        await getOrder()
      }
      setErrorMessage("")
    } catch (error) {
      console.log(error?.response, "error of place order")
      setErrorMessage(error?.response?.data?.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const sellOrder = async () => {
    try {
      setLoading(true)

      const payload = {
        price: sellPrice.toString(),
        quantity: sellQuantity.toString(),
        side: "sell",
        symbol: selectedData?.symbol,
        type: tradingType
      }
      const response = await PlaceOrder(payload)
      console.log(response, "place order")
      if (response?.status === 201) {
        await getOrder()
      }
      setErrorMessage("")
    } catch (error) {
      console.log(error?.response, "error of place order")
      setErrorMessage(error?.response?.data?.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const DeleteOrder = async (item) => {
    try {

      const ids = item
        ? [item.id]
        : currentOrder?.items?.map((i) => i.id) || [];

      console.log("ids to delete:", ids);

      if (!ids.length) {
        console.log("No order IDs to delete");
        return;
      }

      const payload = { orderIds: ids };

      const response = await DeleteCurrentOrder(payload);
      console.log("Order(s) deleted", response);

      if (response?.status === 200) {
        await getOrder(); // refresh orders after delete
      }
    } catch (error) {
      console.log(error?.response, "error in delete order api");
    }
  };



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
    sellQuantity, setSellQuantity, discreaseSellQuantity, addSellQuantity,
    handleSellPriceChange, handleSellQuantityChange, handleSellSliderChange,
    price, sellPrice,
    cureentCoinPrice, setCurrentCoinPrice,
    handleBuyPriceChange, handleBuyQuantityChange, handleBuySliderChange,
    buyOrder, orderBook, sellOrder,
    pairs: filteredPair, searchText, setSearchText,
    setSelectedData, DeleteOrder,
    errorMessage, loading, newCurrentCoinPrice, setNewCurrentCoinPrice
  }
}


