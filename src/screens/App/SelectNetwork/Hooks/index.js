import { Routes } from "../../../../constants"
import { GetNetworkListApi } from "../../../../constants/Api/Index"
import { useEffect, useState } from "react"

export const useSelectNetwork = (props) => {
    const { cryptoItem } = props?.route?.params  // get passed data from SelectCrypto API screen
    console.log("NETWORKS DATA|||", cryptoItem)
    const [networkList, setNetworkList] = useState([])

    useEffect(() => {
        DisplayNetworkList()
    })

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

    const handleNetworkNavigation = async () => {
        props?.navigation?.navigate?.(Routes.AppNavigator, {
            screen: Routes.Barcode,
            params: { networkList: networkList },
        });

    }

    return {
        // DisplayDepositDetails
        handleNetworkNavigation,
        networkList,
    }
}
// const previousData = props?.route?.params?.networkList
// const userData = useSelector((state) => state.user)
// const [depositDetailData, setDepositDetailData] = useState()

// console.log(previousData, 'previousDatapreviousData');




// const DisplayDepositDetails = async (userId, chainId, symbol) => {
//     console.log("Starting Network Details API Fetch with symbol:", "userID", userId, "|", "chainId", chainId, "|", "symbol", symbol)
//     try {

//         let payLoads = {
//             id: userData?.id,
//             chainId: previousData?.chainId,
//             symbol
//         }

//         const response = await GetDepositDetailsApi(payLoads)
//         setDepositDetailData(response)

//         console.log(depositDetailData, ':::::depositDetailDatadepositDetailDatadepositDetailData');

//         // props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.Barcode, params: {} })
//     }
//     catch (error) {

//     }
// }