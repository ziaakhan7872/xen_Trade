import axios from "axios"
import { ACCOUNTS_SERVICE_BASE_URL, ASSETS_MANAGER_BASE_URL, ASSETS_MANAGER_BASE_URL2, AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"
import { apiRequest } from "./mainService";


export const SignUpApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/auth/signup`, payload)
}

export const EmailVerificationApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/otp-code`, payload)
}

export const LoginVerificationApi = async (payload) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/login-otp`, payload)
}


export const LoginApi = async (payload) => {
    console.log("login api payload", payload)
    return axios.post(`${AUTH_BASE_URL}/auth/login`, payload)
}

export const ForgotPasswordApi = async (email) => {
    return axios.post(`${AUTH_BASE_URL}/auth/forgot-password`, {email})
}

export const ResetPasswordApi = async (payload) => {
    try {
        return apiRequest({
            method: "POST",
            url: `${AUTH_BASE_URL}/auth/reset-password`,
            data: payload,
            isAuth: false,
        });

    } catch (error) {
        console.log(error, "reset password error")
    }
}

// // MarketApis


export const GetCryptoListApi = async (page, limit) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ASSETS_MANAGER_BASE_URL}/markets`,
            params: {
                page: page,
                limit: limit,
                isListed: true,
            },
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "show market error")
    }
}
export const GetNetworkListApi = async (symbol) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ASSETS_MANAGER_BASE_URL}/chains/by-market-symbol`,
            params: {
                symbol: symbol,
            },
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "Network Api  error")
    }
}
// export const GetNetworkMinDepApi = async (payloads) => {
//     try {
//         return apiRequest({
//             method: "GET",
//             url: `${ASSETS_MANAGER_BASE_URL}/networks`,
//             params: {
//                payloads
//             },
//             isAuth: true,
//         });

//     } catch (error) {
//         console.log(error, "Network Api  error")
//     }
// }

export const GetDepositDetailsApi = async (payLoads) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ACCOUNTS_SERVICE_BASE_URL}/accounts/user-account`,
            params: payLoads,
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "Desposit  Api  error")
    }
}
export const GetDepositHistoryApi = async (payload) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ASSETS_MANAGER_BASE_URL2}/deposits`,
            params: payload,
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "Desposit History Api  error")
    }
}

// //Pair Api


export const getPairApi = async (page, limit) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ASSETS_MANAGER_BASE_URL}/pairs`,
            params: {
                page: page,
                limit: limit,
                isActive: true
            },
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "Pair Api  error")
    }
}

// //Account Api

export const GetAccountBalanceMyMarket = async (userId, marketId) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ACCOUNTS_SERVICE_BASE_URL}/account-details/account-balance-by-market`,
            params: {
                userId: userId,
                marketId: marketId,
            },
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "GetAccountBalanceMyMarket Api  error")
    }
}

export const getAccountDetail = async (page, limit, userId) => {


    try {
        return apiRequest({
            method: "GET",
            url: `${ACCOUNTS_SERVICE_BASE_URL}/account-details`,
            params: {
                page: page,
                userId: userId,
                limit: limit,
            },
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "getAccountDetail Api  error")
    }
}



// // Withdraw Api

export const WithdrawOnchain = async (Payload) => {
    try {
        return apiRequest({
            method: "POST",
            url: `${ACCOUNTS_SERVICE_BASE_URL}/withdrawals/on-chain`,
            data: Payload,
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "withdraw Api  error")
    }
}

export const getWithdrawlsHistory = async (payload) => {
    try {
        return apiRequest({
            method: "GET",
            url: `${ACCOUNTS_SERVICE_BASE_URL}/withdrawals/`,
            params: payload,
            isAuth: true,
        });

    } catch (error) {
        console.log(error, "getWithdrawlsHistory Api  error")
    }
}