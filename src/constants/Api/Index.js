import axios from "axios"
import { ACCOUNTS_SERVICE_BASE_URL, ASSETS_MANAGER_BASE_URL, AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"
import { getAuthToken } from "../../redux/store"


const token = getAuthToken()

// AuthApis

export const SignUpApi = async({email,password,phoneNo,referredByCode})=>{
    return axios.post(`${AUTH_BASE_URL}/auth/signup`, {email:email, password:password, phoneNo:phoneNo, referredByCode:referredByCode },{
    headers:getHeaders()
    })
}

export const EmailVerificationApi = async({emailOtpCode,userId})=>{
    return axios.post(`${AUTH_BASE_URL}/verifications/otp-code`, {emailOtpCode:emailOtpCode,userId:userId},{
    headers:getHeaders()
    })
}
export const LoginVerificationApi = async({emailOtpCode,userId})=>{
    return axios.post(`${AUTH_BASE_URL}/verifications/login-otp`, {emailOtpCode:emailOtpCode,rememberMe:true,userId:userId},{
    headers:getHeaders()
    })
}
export const LoginApi = async({email,password})=>{
    return axios.post(`${AUTH_BASE_URL}/auth/login`, {email:email,password:password},{
    headers:getHeaders()
    })
}


// MarketApis


export const GetMarketListApi = async() => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/markets`, {
        headers: getHeaders(token)
    })
}

//Pair Api


export const getPairApi = async(page,limit) => {
    return axios.get(`${ASSETS_MANAGER_BASE_URL}/pairs`, {
        headers: getHeaders(token),
        params: {page:page, limit:limit ,isActive:true}
    })
}

//Account Api

export const GetAccountBalanceMyMarket = async(userId,marketId) => {    
    return axios.get(`${ACCOUNTS_SERVICE_BASE_URL}/account-details/account-balance-by-market`, {
        headers: getHeaders(token),
        params: {userId:userId, marketId:marketId }
    })
}