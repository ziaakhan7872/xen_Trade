import axios from "axios"
import { ACCOUNTS_SERVICE_BASE_URL, ASSETS_MANAGER_BASE_URL, AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"
import { getAuthToken } from "../../redux/store"


const token = getAuthToken()
console.log("token",token)

// AuthApis

export const SignUpApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/auth/signup`,payload, {
        headers: getHeaders()
    })
}

export const EmailVerificationApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/otp-code`,payload, {
        headers: getHeaders()
    })
}
export const LoginVerificationApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/login-otp`, payload, {
        headers: getHeaders()
    })
}
export const LoginApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/auth/login`, payload, {
        headers: getHeaders()
    })
}

// MarketApis
export const GetCryptoListApi = async (page, limit) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/markets`, {
        headers: getHeaders(token),
        params: { page: page, limit: limit, isListed: true }
    })
}
export const GetNetworkListApi = async (symbol) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/chains/by-market-symbol`, {
        headers: getHeaders(token),
        params: { symbol },
    })
}
// export const GetNetworkMinDepApi = async (payloads) => {
//     return axios.get(`${ASSETS_MANAGER_BASE_URL}/networks`, {
//         headers: getHeaders(token),
//         params: { payloads },
//     })
// }

export const GetDepositDetailsApi = async (payLoads) => {
    return axios.get(`${ACCOUNTS_SERVICE_BASE_URL}/accounts/user-account`, {
        headers: getHeaders(token),
        // params: { id, chainId, symbol },
        params: payLoads
    })
}

//Pair Api


export const getPairApi = async (page, limit) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/pairs`, {
        headers: getHeaders(token),
        params: { page: page, limit: limit, isActive: true }
    })
}

//Account Api

export const GetAccountBalanceMyMarket = async (userId, marketId) => {
    return axios.get(`${ACCOUNTS_SERVICE_BASE_URL}/account-details/account-balance-by-market`, {
        headers: getHeaders(token),
        params: { userId: userId, marketId: marketId }
    })
}

export const getAccountDetail = async (page, limit, userId) => {
    return axios.get(`${ACCOUNTS_SERVICE_BASE_URL}/account-details/`, {
        headers: getHeaders(token),
        params: { page: page, limit: limit, userId: userId }
    })
}



// Withdraw Api

export const WithdrawOnchain = async (Payload ) => {
    console.log("payload in function ",Payload )
    return axios.post(`${ACCOUNTS_SERVICE_BASE_URL}/withdrawals/on-chain`, Payload, {
        headers: getHeaders(token)
    })
}