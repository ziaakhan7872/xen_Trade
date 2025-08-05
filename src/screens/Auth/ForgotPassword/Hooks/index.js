import { useState } from "react"
import Toast from "react-native-toast-message"
import { ForgotPasswordApi } from "../../../../constants/Api/Index"
import * as Yup from 'yup'
import { Routes } from "../../../../constants"

export const useForgotPassword = (props) => {

    const [email, setEmail] = useState('')

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
            const validatedEmail = await validationSchema.validate({ email })
            console.log("USER EMAIL ", email);

            const passResponse = await ForgotPasswordApi(email)
            console.log("Forget Password Response", passResponse);

            if (passResponse?.status == 200) {
                showToast()
                setTimeout(() => {
                    props?.navigation?.navigate?.(Routes.EmailVerificationScreen, { screenName: "forgotPassword" })
                }, 1500);
            }
        } catch (error) {
            console.log("Error Sending OTP--", error.response)

        }
    }

    return {
        goBack,
        email, setEmail,
        RecoverPassword,
    }
}

