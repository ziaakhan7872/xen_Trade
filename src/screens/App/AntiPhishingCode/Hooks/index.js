import { useState } from "react"

export const useAntiPhishingCode = () => {
    const [antiCode, setAntiCode] = useState('')

    return {
        antiCode, setAntiCode
    }
}

