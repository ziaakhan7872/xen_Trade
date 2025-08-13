import { useState } from "react"
import Toast from "react-native-toast-message"
import { ForgotPasswordApi } from "../../../../constants/Api/Index"
import * as Yup from 'yup'
import { Routes } from "../../../../constants"

export const useForgotPassword = (props) => {

    const [email, setEmail] = useState('')
    const [apiError, setApiError] = useState("")

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

    const goBack = () => {
        props?.navigation?.goBack()
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
    })

    const RecoverPassword = async () => {
        try {
            await validationSchema.validate({ email })
            console.log("USER EMAIL ", email);
            const payload = {
                email: email
            }

            const passResponse = await ForgotPasswordApi(payload)
            console.log("Forget Password Response", passResponse);

            if (passResponse?.status == 200) {
                showToast()
                setTimeout(() => {
                    props?.navigation?.navigate?.(Routes.EmailVerForgotPass, { userData: passResponse?.data, email: email })
                }, 1500);
            }
        } catch (error) {
            if (error.name === 'ValidationError') {
                console.log("Validation Error:", error.message);
                setApiError(error?.message)
            }
            const status = error?.response?.status
            const message = error?.response?.data?.message
            console.log(error)
            if (status === 404) {
                setApiError(message)
            }

        }
    }

    return {
        goBack,
        email, setEmail,
        RecoverPassword,
        apiError
    }
}

