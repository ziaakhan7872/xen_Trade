import axios from "axios"
import { AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl"

export const SignUpApi = async({email,password,phoneNo,referredByCode})=>{
    return axios.post(`${AUTH_BASE_URL}/auth/signup`, {email:email, password:password, phoneNo:phoneNo, referredByCode:referredByCode },{
    headers:getHeaders()
    })
}

export const EmailVerificationApi = async({emailOtpCode,userId})=>{
    console.log("EmailVerificationApi called with:", {emailOtpCode, userId})
    return axios.post(`${AUTH_BASE_URL}/verifications/otp-code`, {emailOtpCode:emailOtpCode,userId:userId},{
    headers:getHeaders()
    })
}