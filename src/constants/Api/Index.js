import axios from "axios"
import { ASSETS_MANAGER_BASE_URL, AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"
import { getAuthToken } from "../../redux/store"


const token = getAuthToken()

// AuthApis

export const SignUpApi = async ({ email, password, phoneNo, referredByCode }) => {
    return axios.post(`${AUTH_BASE_URL}/auth/signup`, { email: email, password: password, phoneNo: phoneNo, referredByCode: referredByCode }, {
        headers: getHeaders()
    })
}

export const EmailVerificationApi = async ({ emailOtpCode, userId }) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/otp-code`, { emailOtpCode: emailOtpCode, userId: userId }, {
        headers: getHeaders()
    })
}
export const LoginVerificationApi = async ({ emailOtpCode, userId }) => {
    return axios.post(`${AUTH_BASE_URL}/verifications/login-otp`, { emailOtpCode: emailOtpCode, rememberMe: true, userId: userId }, {
        headers: getHeaders()
    })
}
export const LoginApi = async ({ email, password }) => {
    return axios.post(`${AUTH_BASE_URL}/auth/login`, { email: email, password: password }, {
        headers: getHeaders()
    })
}

// MarketApis
export const GetCryptoListApi = async () => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/markets`, {
        headers: getHeaders(token)
    })
}
export const GetNetworkListApi = async (symbol) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/chains/by-market-symbol`, {
        headers: getHeaders(token),
        params: { symbol },
    })
}
export const GetNetworkMinDepApi = async (payloads) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/networks`, {
        headers: getHeaders(token),
        params: { payloads },
    })
}

export const GetDepositDetailsApi = async (payLoads) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/accounts/user-account`, {
        headers: getHeaders(token),
        // params: { id, chainId, symbol },
        payLoads: payLoads
    })
}


export const getPairApi = async (page, limit) => {
    console.log("getPairApi called with page:", page, "and limit:", limit);
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/pairs`, {
        headers: getHeaders(token),
        params: { page: page, limit: limit, isActive: true }
    })
}