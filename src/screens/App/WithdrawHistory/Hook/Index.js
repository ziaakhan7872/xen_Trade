import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useRef, useState } from 'react'
import { GetCryptoListApi, getWithdrawlsHistory } from '../../../../constants/Api/Index'
import { useSelector } from 'react-redux';

export const Usewithdrawhistory = () => {
    const { user } = useSelector((state) => state.user);

    const allCryptoFilterRef = useRef(null)
    const StatusRef = useRef(null)
    const [selectedSymbol, SetSelectedSymbol] = useState("All crypto")
    const [selectedStatus, SetSelectedStatus] = useState(null)
    const [cryptoData, setCryptoData] = useState([])
    const [withdrawHistory, setWithdrawHistory] = useState([])
    const [selectedHeaderButton,setSelectedHeaderButton] = useState("")
    const [searchCoin,setSearchCoin] = useState("")



    const statusData = [
        { id: '1', name: 'Completed', value: "completed" },
        { id: '2', name: 'Pending', value: "pending" },
        { id: '3', name: 'Processing', value: "processing" },
        { id: '4', name: 'Failed', value: "failed" },
    ];

    useEffect(() => {

        getSymbol();
    }, []);

    useEffect(() => {
        getWithdraw();
    }, [selectedSymbol, selectedStatus]);


    const getSymbol = async () => {
        try {
            const getCrypto = await GetCryptoListApi(1, 20)
            console.log("response", getCrypto?.data?.data)
            setCryptoData(getCrypto?.data?.data)
        } catch (error) {
            console.log("error in getSymbol", error)
        }
    }


     const filteredCryptoList = cryptoData.filter((item) =>
        item.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchCoin.toLowerCase())
    );

    const getWithdraw = async () => {
        try {
            const payload = {
                page: 1,
                limit: 20,
                userId: user?.id,
                symbol: selectedSymbol === "All crypto" ? "" : selectedSymbol,
                status: selectedStatus ? selectedStatus.value : null,
            }
            console.log(payload, "payload")
            const withdrawalsResponse = await getWithdrawlsHistory(payload)
            const withdrawlsData = withdrawalsResponse?.data?.withdrawals?.data;
            console.log("withdraw history response", withdrawlsData)
            setWithdrawHistory(withdrawlsData)
        } catch (error) {
            console.log("error in getWithdraw", error?.response)

        }
    }





    return {
        allCryptoFilterRef, StatusRef,
        cryptoData:filteredCryptoList, statusData,
        selectedSymbol, SetSelectedSymbol,
        selectedStatus, SetSelectedStatus,
        withdrawHistory,
        selectedHeaderButton,setSelectedHeaderButton,
        searchCoin,setSearchCoin
    }
}


