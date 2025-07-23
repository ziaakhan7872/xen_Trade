import { useState } from "react"

export const useOrderHistory = () => {
    const [input, setInput] = useState('')
    const [selected, setSelected] = useState();
    const [createdAtFilter, setCreatedAtFilter] = useState('');
    const [orderTypeFilter, setOrderTypeFilter] = useState('');
    const [transactionTypeFilter, setTransactionTypeFilter] = useState('');

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
        createdAtFilter, setCreatedAtFilter,
        orderTypeFilter, setOrderTypeFilter,
        transactionTypeFilter, setTransactionTypeFilter,
    }
}


