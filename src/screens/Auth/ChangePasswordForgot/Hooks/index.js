import { useState } from "react"
import { ResetPasswordApi } from "../../../../constants/Api/Index";
import { Routes } from "../../../../constants";
import Toast from "react-native-toast-message";
import * as Yup from 'yup';

export const useChangePasswordForgot = (props) => {
    const { otpCode, id } = props?.route?.params || {}

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    console.log("User data in ResetPassword::::::previousUserData", id, "||||", otpCode, "||||", password);


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

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    const ResetPassword = async () => {
        const values = { password, confirmPassword }
        try {
            await validationSchema.validate(values, { abortEarly: false })

            const payload = {
                emailOtpCode: Number(otpCode),
                id: id,
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
            console.log("Error RESETTING Password -- ", error?.response)
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
        ResetPassword
    }
}

