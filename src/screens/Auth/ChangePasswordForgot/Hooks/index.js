import { useState } from "react"
import { ResetPasswordApi } from "../../../../Backend/Api/Index";
import { Routes } from "../../../../constants";
import Toast from "react-native-toast-message";
import * as Yup from 'yup';

export const useChangePasswordForgot = (props) => {
    const { otpCode, id } = props?.route?.params

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false)



    const showToast = () => {
        Toast.show({
            type: 'successAlert',
            text1: 'PASSWORD RESET SUCCESSFUL',
            text2: 'You can now login',
            visibilityTime: 2000,
            autoHide: true,
            // props: email
        })
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must include at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
            .matches(/\d/, 'Password must include at least one number')
            .matches(/[^A-Za-z0-9]/, 'Password must include at least one special character')
            .required('Password is required'),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm password is required'),
    })

    const ResetPassword = async () => {
        const values = { password, confirmPassword }
        console.log("ENTERED ResetPassword FUNCTION");
        setLoading(true)

        try {
            await validationSchema.validate(values, { abortEarly: false })

            const payload = {
                EmailOtpCode: Number(otpCode),
                id: id,
                password: password
            }
            console.log("Final payload about to send:", payload);

            const resetRes = await ResetPasswordApi(payload)
            console.log(resetRes, "reset")

            if (resetRes?.status == 200) {
                showToast()
                setTimeout(() => {
                    props?.navigation?.navigate(Routes.LoginScreen)
                }, 1500)
            }
        }
        catch (error) {
            if (error.name === 'ValidationError') {
                setErrorMessage(error.errors.join('\n'));

            } else if (error?.response) {
                const status = error?.response?.status
                const message = error?.response?.data?.message || "resetting password failed"
                if (status === 400 || status === 500) {
                    setErrorMessage(message)
                }
                else {
                    setErrorMessage("An error occurred during resetting password. Please try again.");
                }
                console.error("Error during resetting password:", error?.response);
            }
            else {
                console.log("errpr", error)
                setErrorMessage("A Network Error . Please try again.");
            }
        }
        finally {
            setLoading(false)
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
        ResetPassword,
        errorMessage, setErrorMessage,
        loading,
    }
}

