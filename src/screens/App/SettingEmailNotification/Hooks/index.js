import { useState } from "react";


const toggleStates = () => {
    const [disableAllNotificationsEnabled, setDisableAllNotificationsEnabled] = useState(false)
    const [toggles, setToggles] = useState({
        ordersGroup: false,
        orderCancelled: false,
        orderCompleted: false,
        orderRejected: false,

        transactionsGroup: false,
        paymentCompleted: false,
        paymentNew: false,
        paymentRejected: false,

        conversionsGroup: false,
        conversionCompleted: false,
        conversionRejected: false,

        accountGroup: false,
        loginEvent: false,
        twoFactor: false
    })


    return {
        disableAllNotificationsEnabled, setDisableAllNotificationsEnabled,
        toggles, setToggles
    }
}

export default toggleStates