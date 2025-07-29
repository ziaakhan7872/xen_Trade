import axios from "axios"
import { ASSETS_MANAGER_BASE_URL, AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"
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
    console.log("LoginVerificationApi called with:", {emailOtpCode, userId})
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