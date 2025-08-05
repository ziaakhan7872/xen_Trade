import { useState } from "react"
import { ResetPasswordApi } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import Toast from "react-native-toast-message";

export const useChangePasswordForgot = (props) => {
    const otp = props?.route?.params?.otpCode || {}
    const userId = props?.route?.params?.id || {}

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const showToast = () => {
        Toast.show({
            type: 'verificationAlert',
            text1: 'PASSWORD RESET SUCCESSFUL',
            text2: 'You can now login',
            visibilityTime: 2000,
            autoHide: true,
            props: email
        })
    }

    const ResetPassword = async () => {
        try {
            const payload = {
                emailOtpCode: Number(otp),
                id: userId,
                password: password
            }
            const resetRes = await ResetPasswordApi(payload)

            if (resetRes.status == 200) {
                showToast()
                setTimeout(() => {
                    props?.naviagtion?.navigate?.(Routes.LoginScreen)

                }, 1500)
            }
        }
        catch (error) {
            console.log("Error RESETTING Password -- ", error);
        }
    }

    const goBack = () => {
        props?.navigation?.goBack()
    }
    return {
        goBack,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        passwordVisible, setPasswordVisible,
        confirmPasswordVisible, setConfirmPasswordVisible,
        resetRes
    }
}

