// Hooks.js
import { useEffect, useMemo, useRef, useState } from 'react';
import moment from 'moment';
import { getCurrentOrder } from '../../../../Backend/Api/Index';

// ---- Filter defaults ----
const DEFAULT_SELECTED = {
    createdAt: 'All',        // 'All' | 'Today' | 'Yesterday' | 'Last Week' | 'Last Month' | 'Custom Date'
    orderType: 'All',        // 'All' | 'Market' | 'Limit'
    transactionType: 'All',  // 'All' | 'Buy' | 'Sell'
    customDate: { start: null, end: null }, // for optional custom date range
};

// ---- Helpers for date filtering ----
const dateInRange = (dateStr, start, end) => {
    if (!dateStr) return false;
    const d = moment(dateStr);
    return d.isSameOrAfter(start) && d.isSameOrBefore(end);
};

const getDateWindow = (option, customDate) => {
    const now = moment();
    switch (option) {
        case 'Today':
            return { start: moment().startOf('day'), end: moment().endOf('day') };
        case 'Yesterday':
            return { start: moment().subtract(1, 'day').startOf('day'), end: moment().subtract(1, 'day').endOf('day') };
        case 'Last Week':
            return { start: moment().subtract(7, 'days').startOf('day'), end: now };
        case 'Last Month':
            return { start: moment().subtract(1, 'month').startOf('day'), end: now };
        case 'Custom Date':
            if (customDate?.start && customDate?.end) {
                return {
                    start: moment(customDate.start).startOf('day'),
                    end: moment(customDate.end).endOf('day'),
                };
            }
            return null;
        default:
            return null; // 'All' or unrecognized -> no date filter
    }
};

// ---- Core filter function ----
const applyFiltersToOrders = (orders = [], selected = DEFAULT_SELECTED, searchText = '') => {
    const { createdAt, orderType, transactionType, customDate } = selected;
    const window = getDateWindow(createdAt, customDate);
    const q = (searchText || '').trim().toLowerCase();

    return (orders || []).filter((o) => {
        // 1) Date filter
        if (window) {
            const stamp =
                o?.updatedAt && o.updatedAt !== '0001-01-01T00:00:00Z'
                    ? o.updatedAt
                    : o?.createdAt;
            if (!dateInRange(stamp, window.start, window.end)) return false;
        }

        // 2) Order Type (only if not 'All')
        if (orderType && orderType !== 'All') {
            if ((o?.type || '').toLowerCase() !== orderType.toLowerCase()) return false;
        }

        // 3) Transaction Type (only if not 'All')
        if (transactionType && transactionType !== 'All') {
            if ((o?.side || '').toLowerCase() !== transactionType.toLowerCase()) return false;
        }

        // 4) Optional text search (pair/base/type/side/price/quantity)
        if (q) {
            const hay = [
                o?.pair,
                o?.base,
                o?.type,
                o?.side,
                String(o?.price ?? ''),
                String(o?.quantity ?? ''),
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            if (!hay.includes(q)) return false;
        }

        return true;
    });
};

export const useOrderHistory = () => {
    const [input, setInput] = useState('');
    const [orderHistory, setOrderHistory] = useState([]);
    const [selected, setSelected] = useState(DEFAULT_SELECTED);

    const FilterBottomSheetRef = useRef(null);

    const handleOpenFilter = () => {
        FilterBottomSheetRef?.current?.open?.();
    };
    const handleCloseFilter = () => {
        FilterBottomSheetRef?.current?.close?.();
    };

    useEffect(() => {
        OrdersHistory();
    }, []);

    const OrdersHistory = async () => {
        try {
            const payload = { page: 1, size: 20, orderDir: 'desc' };
            const res = await getCurrentOrder(payload);

            // normalize casing from backend
            const items =
                res?.data?.Orders?.items ??
                res?.data?.orders?.items ??
                [];

            setOrderHistory(items);
            console.log('orders count:', items.length);
        } catch (error) {
            console.log('error in history of orders', error);
            setOrderHistory([]); // show empty on error
        }
    };

    // Derived filtered list
    const filteredOrders = useMemo(
        () => applyFiltersToOrders(orderHistory, selected, input),
        [orderHistory, selected, input]
    );

    // Called by FilterBottomSheet "Show Results"
    const onApplyFilters = () => {
        // filteredOrders is derived; just close
        handleCloseFilter();
    };

    // Called by FilterBottomSheet "Reset"
    const onResetFilters = () => {
        setSelected(DEFAULT_SELECTED);
        // keep search text as-is; or clear:
        // setInput('');
    };

    return {
        // refs & sheet handlers
        FilterBottomSheetRef,
        handleOpenFilter,
        handleCloseFilter,

        // search
        input,
        setInput,

        // filters
        selected,
        setSelected,
        onApplyFilters,
        onResetFilters,

        // data
        orderHistory,       // raw
        setOrderHistory,
        filteredOrders,     // filtered for UI
    };
};
