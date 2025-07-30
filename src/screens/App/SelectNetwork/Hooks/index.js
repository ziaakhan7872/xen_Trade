import { Routes } from "../../../../constants"
import { GetNetworkListApi } from "../../../../constants/Api/Index"
import { useEffect, useState } from "react"

export const useSelectNetwork = (props) => {
    const { cryptoItem } = props?.route?.params  // get passed data from SelectCrypto API screen
    console.log("NETWORKS DATA|||", cryptoItem)
    const [networkList, setNetworkList] = useState([])

    useEffect(() => {
        DisplayNetworkList()
    }, [])

    const DisplayNetworkList = async () => {

        try {
            const networkListRes = await GetNetworkListApi(cryptoItem.symbol)
            console.log("--NETWORK LIST DATA--", networkListRes);
            setNetworkList(networkListRes?.data?.data || [])
        }
        catch (error) {
            console.log("Error Displaying Network List", error);
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
        networkList,
    }
}
