import { useEffect, useState } from "react"
import { GetDepositDetailsApi } from "../../../../constants/Api/Index"
import { useSelector } from "react-redux"

const useBarcode = (props) => {
    const networkList = props?.route?.params
    const previousCrypto = props?.route?.params?.cryptoItem
    const userData = useSelector((state) => state.user)
    const [depositDetailData, setDepositDetailData] = useState([])

    // console.log(previousData, 'previousDatapreviousData');
    useEffect(() => {
        DisplayDepositDetails()
    }, [])

    const DisplayDepositDetails = async (payLoads) => {
        console.log("DisplayDepositDetails ENTERED")

        try {
            payLoads = {
                userId: userData?.user?.id,
                chainId: networkList?.networkList?.chainId,
                symbol: previousCrypto?.symbol
            }
            console.log("Starting Network Details API Fetch with symbol:", payLoads)

            const response = await GetDepositDetailsApi(payLoads)
            setDepositDetailData(response)

            // props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.Barcode, params: {} })
        }
        catch (error) {
            console.log("Error fetching DATA from API", error)
        }
    }

    return {
        networkList, previousCrypto, depositDetailData
    }
}

export default useBarcode