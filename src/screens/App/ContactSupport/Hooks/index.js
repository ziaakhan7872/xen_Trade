import { useRef, useState } from "react";


export const useContactSupport = () => {
    const [message, setMessage] = useState('')

    const SubmitBottomSheetRef = useRef(null)

    const handleOpenSubmit = () => {
        SubmitBottomSheetRef?.current?.expand()
    }
    const handleCloseSubmit = () => {
        SubmitBottomSheetRef?.current?.close()
    }

    return {
        message, setMessage,
        SubmitBottomSheetRef,
        handleOpenSubmit, handleCloseSubmit
    }
}
