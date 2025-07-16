import { useState } from "react"

export const UseExchange = () => {
    const [buySellButton,setBuySellButton] = useState("buy")
    const [buyerSlider, setBuyerSlider] = useState(0);
    const [sellSlider, setSelSlider] = useState(0);

  return {
    buySellButton,setBuySellButton,
    buyerSlider,setBuyerSlider,
    sellSlider,setSelSlider
  }
}


