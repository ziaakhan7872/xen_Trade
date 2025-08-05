import { Routes } from "../../../../constants"
import { GetNetworkListApi } from "../../../../constants/Api/Index"
import { useEffect, useState } from "react"

export const useSelectNetwork = (props) => {
    const { cryptoItem } = props?.route?.params  // get passed data from SelectCrypto API screen
    console.log("NETWORKS DATA|||", cryptoItem)
    const [networkList, setNetworkList] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        DisplayNetworkList()
    }, [])

    const DisplayNetworkList = async () => {

        try {
            setLoading(true)
            const networkListRes = await GetNetworkListApi(cryptoItem.symbol)
            console.log("--NETWORK LIST DATA--", networkListRes);
            setNetworkList(networkListRes?.data?.data || [])
        }
        catch (error) {
            console.log("Error Displaying Network List", error);
            setLoading(false)
        } finally{
            setLoading(false)
        }
    }

    const handleNetworkNavigation = (item) => {
        props?.navigation?.navigate?.(Routes.AppNavigator, {
            screen: Routes.Barcode,
            params: { networkList: item, cryptoItem: cryptoItem },
        });

    }

    return {
        // DisplayDepositDetails
        handleNetworkNavigation,
        networkList, loading
    }
}
