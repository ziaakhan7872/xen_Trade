import  { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { GetCryptoListApi, GetDepositHistoryApi } from '../../../../Backend/Api/Index';

export const UseDepositHstory = () => {
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
           getDepositHistory();
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
   
       const getDepositHistory = async () => {
           try {
               const payload = {
                   page: 1,
                   limit: 20,
                   userId: user?.id,
                   symbol: selectedSymbol === "All crypto" ? "" : selectedSymbol,
                   status: selectedStatus ? selectedStatus.value : null,
               }
               console.log(payload, "payload")
               const DepositDetailResponse = await GetDepositHistoryApi(payload)
               const withdrawlsData = DepositDetailResponse?.data?.deposits?.data;
               console.log("Deposit history response", DepositDetailResponse)
               setWithdrawHistory(withdrawlsData)
           } catch (error) {
               console.log("error in DetailHistory", error?.response)
   
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


