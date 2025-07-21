import { useState } from "react"

export const UseExchange = () => {
  const [buySellButton, setBuySellButton] = useState("buy")
  const [buyerSlider, setBuyerSlider] = useState(0);
  const [sellSlider, setSelSlider] = useState(0);
  const [currentOrderHistoryPress, setCurrentOrderHistoryPress] = useState("currentOrder");
  const [currentOrder,setCurrentOrder]= useState(0)
  const [isCurrentSymbol,setIsCurrentSymbol] = useState(false)


  return {
    buySellButton, setBuySellButton,
    buyerSlider, setBuyerSlider,
    sellSlider, setSelSlider,
    currentOrderHistoryPress,setCurrentOrderHistoryPress,
    currentOrder,setCurrentOrder,
    isCurrentSymbol,setIsCurrentSymbol
  }
}


