import { useEffect, useRef, useState } from "react"
import { getCurrentOrder } from "../../../../Backend/Api/Index";

export const useOrderHistory = () => {
    const [input, setInput] = useState('')
    const [orderHistory, setOrderHistory] = useState([])
    const [selected, setSelected] = useState({
        createdAt: '',
        orderType: '',
        transactionType: '',
    });
    const FilterBottomSheetRef = useRef(null)

    const handleOpenFilter = () => {
        FilterBottomSheetRef?.current?.open()
    }
    const handleCloseFilter = () => {
        FilterBottomSheetRef?.current?.close()
    }

    useEffect(() => {
        OrdersHistory()
    }, [])


    const OrdersHistory = async () => {
        try {
            const payload = { page: 1, size: 20, orderDir: 'desc' };
            const res = await getCurrentOrder(payload);

            // normalize both cases just in case the backend changes casing
            const items =
                res?.data?.Orders?.items ??
                res?.data?.orders?.items ??
                []; // fallback to empty

            setOrderHistory(items);
            console.log('orders count:', items.length);
        } catch (error) {
            console.log('error in history of orders', error);
            setOrderHistory([]); // if API gives error then it will show empty
        }
    }


    return {
        FilterBottomSheetRef,
        handleOpenFilter, handleCloseFilter,
        input, setInput,
        selected, setSelected,
        orderHistory
    }
}


