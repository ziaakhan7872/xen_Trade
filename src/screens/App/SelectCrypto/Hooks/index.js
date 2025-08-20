import { useEffect, useState } from 'react';
import { GetCryptoListApi, } from '../../../../Backend/Api/Index';
import { Routes } from '../../../../constants';

export const useSelectCrypto = (props) => {
    const [cryptoList, setCryptoList] = useState([])
    const [papulaistrCryptoL, setPapulaistrCryptoL] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchCoin, setSearchCoin] = useState("")

    useEffect(() => {
        DisplayCryptoList()
    }, [])


    const DisplayCryptoList = async () => {
        console.log("Starting API Request")

        try {
            setLoading(true)
            const cryptoList = await GetCryptoListApi()
            console.log("--CRYPTO LIST DATA--", cryptoList?.data?.data)
            setCryptoList(cryptoList?.data?.data || 'N/A')
            setPapulaistrCryptoL(cryptoList?.data?.data)
        } catch (error) {
            console.log("Error Displaying Crypto List", error);
            setError('Failed to load crypto list');
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }

    const filteredCryptoList = cryptoList.filter((item) =>
        item?.name?.toLowerCase().includes(searchCoin.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchCoin.toLowerCase())
    );

    const handleCryptoNavigation = (item) => {
        props?.navigation.navigate(Routes.AppNavigator, { screen: Routes.SelectNetwork, params: { cryptoItem: item }, });
    };


    return {
        cryptoList: filteredCryptoList, loading, error,
        handleCryptoNavigation,
        searchCoin, setSearchCoin,
        papulaistrCryptoL:filteredCryptoList,
    }
}
