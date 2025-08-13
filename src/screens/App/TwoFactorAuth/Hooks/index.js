import { useState } from "react"

export const useTwoFactorAuth = () => {
    const [code, setCode] = useState('')
    return {
        code, setCode
    }
}

