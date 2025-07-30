import { useEffect, useState } from 'react';
import { GetCryptoListApi, } from '../../../../constants/Api/Index';
import { Routes } from '../../../../constants';

export const useSelectCrypto = (props) => {
    const [cryptoList, setCryptoList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        DisplayCryptoList()
    }, [])


    const DisplayCryptoList = async () => {
        console.log("Starting API Request")

        try {
            const cryptoList = await GetCryptoListApi()
            console.log("--CRYPTO LIST DATA--", cryptoList?.data?.data)
            setCryptoList(cryptoList?.data?.data || 'N/A')
        } catch (error) {
            console.log("Error Displaying Crypto List", error);
            setError('Failed to load crypto list');
        } finally {
            setLoading(false);
        }
    }

    const handleCryptoNavigation = (item) => {
        props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectNetwork, params: { cryptoItem: item }, });
    };


    return {
        cryptoList, loading, error,
        handleCryptoNavigation
    }
}
