import React, { useRef, useState } from 'react'

export const useReferralHistory = () => {
    const [input, setInput] = useState('')
    const [selected, setSelected] = useState({
        createdAt: '',
        orderType: '',
        transactionType: '',
    });
    const FilterBottomSheetRef = useRef(null)

    const handleOpenFilter = () => {
        FilterBottomSheetRef?.current?.expand()
    }
    const handleCloseFilter = () => {
        FilterBottomSheetRef?.current?.close()
    }
    return {
        FilterBottomSheetRef,
        handleOpenFilter, handleCloseFilter,
        input, setInput,
        selected, setSelected,
    }
}




