import React, { useState } from 'react'
import { ForgotPasswordOtpApi, ResendOtpApi } from '../../../../Backend/Api/Index'
import { Routes } from '../../../../constants'
import Toast from 'react-native-toast-message'

export const useEmailVerForgotPass = (props) => {
    const { userData, email } = props?.route?.params
    const [otpCode, setOtpCode] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [apiError, setApiError] = useState("")

    const id = userData?.id


    const showToast = () => {
        Toast.show({
            type: 'verificationAlert',
            text1: 'VERIFICATION EMAIL SENT',
            text2: 'Verification code sent to',
            visibilityTime: 2000,
            autoHide: true,
            props: email
        })
    }

    const verifyEmail = async () => {
        try {
            if (!otpCode) {
                console.error("OTP code is required");
                return;
            }
            const payload = {
                emailOtpCode: Number(otpCode),
                userId: id
            }
            const response = await ForgotPasswordOtpApi(payload);
            console.log("Email verification response:", response);
            if (response?.status == 200) {
                props?.navigation.navigate(Routes.ChangePasswordForgot, { otpCode: otpCode, id: id })
            }

        } catch (error) {
            console.error("Error during email verification:", error?.response);
            if (error?.response) {
                const status = error?.response?.status
                const message = error?.response?.data?.message
                console.log(error)
                if (status === 400) {
                    setErrorMessage(message)
                    return
                }
            }
            setErrorMessage("An error occurred during email verification. Please try again.");
        }
    }

    const resendOtp = async () => {
        try {

            const payload = {
                email: email,
                userId: id
            }

            const otpResponse = await ResendOtpApi(payload)
            console.log(otpResponse)
            showToast()
        }
        catch (error) {
            const status = error?.response?.status
            const message = error?.response?.data?.message
            console.log(error)
            if (status === 400) {
                setApiError(message)
            }
        }
    }


    return {
        setOtpCode, otpCode,
        verifyEmail,
        errorMessage, setErrorMessage,
        resendOtp,
    }
}

