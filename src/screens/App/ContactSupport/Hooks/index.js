import { useRef, useState } from "react";


export const useContactSupport = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const SubmitBottomSheetRef = useRef(null)

    const handleOpenSubmit = () => {
        SubmitBottomSheetRef?.current?.expand()
    }
    const handleCloseSubmit = () => {
        SubmitBottomSheetRef?.current?.close()
    }

    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        SubmitBottomSheetRef,
        handleOpenSubmit, handleCloseSubmit
    }
}
