import { useEffect, useState } from "react"
import { GetNetworkListApi } from "../../../../constants/Api/Index"
import { Routes } from "../../../../constants";


export const UseSelectNetworkWithdraw = (props) => {
    const { cryptoData } = props?.route?.params || {};
    const [networkList, setNetworkList] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getNetworkList()
    }, [])

    const getNetworkList = async () => {
        try {
            setLoading(true)
            const getNetwork = await GetNetworkListApi(cryptoData?.symbol);
            console.log("Network List:", getNetwork)
            setNetworkList(getNetwork?.data?.data);
        } catch (error) {
            console.log("Error fetching network list:", error);
            setLoading(fasle)
        } finally{
            setLoading(false)
        }
    }

    const handleNetworkPress = (network) => {
        props?.navigation?.navigate(Routes.AppNavigator, {
            screen: Routes.WithDraw,
            params: {
                network: network,
                cryptoData: cryptoData
            }
        });
    }
    return {
        networkList, setNetworkList,
        handleNetworkPress,
        loading

    }
}


