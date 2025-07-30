// import { Routes } from '../../../../constants'
// import { GetNetworkListApi } from '../../../../constants/Api/Index';

// export const useSelectCrypto = (props) => {

//     const DisplayNetworkList = async (symbol) => {
//         console.log("Starting Network Details API Fetch with symbol:", symbol)

//         try {
//             const networkList = await GetNetworkListApi(symbol)
//             console.log("Navigating to NetworkDETAILS Screen with userData:", networkList);
//             props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.SelectNetwork, params: { networkList: networkList?.data?.data } })
//         } catch (error) {
//             console.log("Error Displaying Network List", error);
//         }
//     }
//     return {
//         DisplayNetworkList
//     }
// }
import { Routes } from '../../../../constants';
import { GetNetworkListApi, GetNetworkMinDepApi } from '../../../../constants/Api/Index';

export const useSelectCrypto = (props) => {
    const DisplayNetworkList = async (symbol, marketId) => {
        console.log("Starting Network Details API Fetch with symbol:", symbol, "|", marketId);

        try {
            // 1. Fetch networks (basic info)
            const networkListResponse = await GetNetworkListApi(symbol);
            const networks = networkListResponse?.data?.data || [];

            // 2. Fetch minimum deposit info
            const minDepositResponse = await GetNetworkMinDepApi(marketId);
            const minDeposits = minDepositResponse?.data?.data || [];

            // 3. Merge the data
            const mergedNetworks = networks.map((network) => {
                // Match by chainId (preferred) or fallback to name
                const minDepMatch =
                    minDeposits.find((item) => item.chainId === network.chainId) ||
                    minDeposits.find((item) => item.id === network.id)

                return {
                    ...network,
                    minDeposit: minDepMatch?.minDeposit || 'N/A', // default if not found 
                    // arrivalTime: minDepMatch?.minDeposit || '~1 minutes', // default if not found 
                    arrivalTime: '~1 minutes', // default if not found 
                };
            });

            // 4. Navigate with merged data
            props?.navigation?.navigate?.(Routes.AppNavigator, {
                screen: Routes.SelectNetwork,
                params: { networkList: mergedNetworks },
            });

            console.log("Navigating to NetworkDETAILS Screen with merged data:", mergedNetworks);
        } catch (error) {
            console.log("Error Displaying Network List", error);
        }
    };

    return {
        DisplayNetworkList,
    };
};
