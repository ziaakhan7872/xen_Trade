import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAccountDetail, GetCryptoListApi } from '../../../../constants/Api/Index';
import { useSelector } from 'react-redux';
import { Routes } from '../../../../constants';


export const UseSelectCryptoWithdraw = (props) => {
  const { user } = useSelector((state) => state.user);
    const [cryptoList, setCryptoList] = useState([]);


    useEffect(()=>{
        getCryptoData()
    },[])

    const getCryptoData = async()=>{
        try {
            const getCryptoData = await GetCryptoListApi(1,10)
            console.log("Crypto Data:", getCryptoData?.data?.data)
            setCryptoList(getCryptoData?.data?.data)

            const GetAccountDetail = await getAccountDetail(1, 10, user?.id);
            console.log("Account Details:", GetAccountDetail);

            const mergeData = getCryptoData?.data?.data?.map((item)=>{
                const matchAccount = GetAccountDetail?.data?.data?.find((acount)=>acount?.market?.symbol === item?.symbol);
                return {
                    ...item,
                    account: matchAccount || null, 
                };
            });
            setCryptoList(mergeData); 
            console.log("Merged Crypto Data:", mergeData);

            
        } catch (error) {
            console.log("Error fetching crypto data:", error);
        }
    }

    const RecentCryptoPress = (item)=>{
        props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.SelectNetworkWIthdraw , params: { cryptoData: item } });
    }

     const CryptoPress = (item)=>{
        props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.SelectNetworkWIthdraw , params: { cryptoData: item } });
    }

    return {
        cryptoList,
        RecentCryptoPress,
        CryptoPress
    }
}




