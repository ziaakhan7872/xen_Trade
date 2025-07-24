import React, { useState } from 'react'

export const useReferralHistory = () => {
    const [input, setInput] = useState('')
    const [selected, setSelected] = useState({
        createdAt: '',
        orderType: '',
        transactionType: '',
    });
    const FilterBottomSheetRef = useState(null)

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




