import { useState } from "react"

export const stateDropDowns = () => {
    const [coin, setCoin] = useState("BTC")
    const [network, setNetwork] = useState("BTC")
    const [isCoinListOpen, setIsCoinListOpen] = useState(false)
    const [isNetworkOpen, setIsNetworkOpen] = useState(false)

    const coinList = [
        { label: 'BTC', value: 'BTC' },
        { label: 'ETH', value: 'ETH' },
        { label: 'USDT', value: 'USDT' },
    ]
    const networkList = [
        { label: 'BTC', value: 'BTC' },
        { label: 'Ethereum', value: 'Ethereum' },
        { label: 'Tron (TRC20)', value: 'Tron' },
    ]
    return {
        coin, setCoin,
        network, setNetwork,
        isCoinListOpen, setIsCoinListOpen,
        isNetworkOpen, setIsNetworkOpen,
        coinList, networkList,
    }
}
