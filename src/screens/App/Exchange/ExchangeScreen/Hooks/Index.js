import { useEffect, useRef, useState } from "react"
import { getPairApi } from "../../../../../constants/Api/Index"

export const UseExchange = (props) => {
  const { selectedData ,buySellButtonProps} = props?.route?.params || {}
  console.log("UseExchange called with selectedData:", selectedData)
  const tradngBottomSheetRef = useRef(null)
  const favouriteBottomSheetRef = useRef(null)

  const [buySellButton, setBuySellButton] = useState(buySellButtonProps)
  const [buyerSlider, setBuyerSlider] = useState(0);
  const [sellSlider, setSelSlider] = useState(0);
  const [currentOrderHistoryPress, setCurrentOrderHistoryPress] = useState("currentOrder");
  const [currentOrder, setCurrentOrder] = useState(0)
  const [isCurrentSymbol, setIsCurrentSymbol] = useState(false)
  const [tradingType, setTradingType] = useState("limit")


  const getPair = async () => {
    try {
      const response = await getPairApi(1, 20)
      console.log("getPair response:", response)
    } catch (error) {
      console.error("Error fetching pairs:", error)
    }
  }

  useEffect(() => {
    getPair()
  }, [])



  return {
    buySellButton, setBuySellButton,
    buyerSlider, setBuyerSlider,
    sellSlider, setSelSlider,
    currentOrderHistoryPress, setCurrentOrderHistoryPress,
    currentOrder, setCurrentOrder,
    isCurrentSymbol, setIsCurrentSymbol,
    tradngBottomSheetRef, favouriteBottomSheetRef,
    tradingType, setTradingType,
    selectedData,
  }
}


