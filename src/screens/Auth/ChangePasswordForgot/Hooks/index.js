import { useState } from "react"

export const useChangePasswordForgot = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const goBack = () => {
        props?.navigation?.goBack()
    }
    return {
        goBack,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        passwordVisible, setPasswordVisible,
        confirmPasswordVisible, setConfirmPasswordVisible
    }
}

