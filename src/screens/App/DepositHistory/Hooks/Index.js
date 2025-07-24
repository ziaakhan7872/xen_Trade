import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

export const UseDepositHstory = () => {
    const allCryptoFilterRef = useRef(null)
    const StatusRef = useRef(null)
    const [selectedSymbol, SetSelectedSymbol] = useState("All crypto")
    const [selectedStatus, SetSelectedStatus] = useState("All statuses")


    const cryptoData = [
        { id: '1', name: 'All crypto', symbol: 'ALL' },
        { id: '2', name: 'USDT', symbol: 'USDT' },
        { id: '3', name: 'BTC', symbol: 'BTC' },
        { id: '4', name: 'ETH', symbol: 'ETH' },
        { id: '5', name: 'XRP', symbol: 'XRP' },
        { id: '6', name: 'BSV', symbol: 'BSV' },
        { id: '7', name: 'INCH', symbol: 'INCH' },
        { id: '8', name: 'LTC', symbol: 'LTC' },
        { id: '9', name: 'OKX', symbol: 'OKX' },
        { id: '10', name: 'OKB', symbol: 'OKB' },
        { id: '11', name: 'LTC', symbol: 'LTC' },
    ];
    const statusData = [
        { id: '1', name: 'All statuses' },
        { id: '2', name: 'In progress' },
        { id: '3', name: 'Received' },
        { id: '4', name: 'Others' },
    ];


    return {
        allCryptoFilterRef, StatusRef,
        cryptoData, statusData,
        selectedSymbol, SetSelectedSymbol,
        selectedStatus,SetSelectedStatus
    }
}


