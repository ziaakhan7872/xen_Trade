import { useState } from "react"

export const useSettingProfile = () => {
    const [currency, setCurrency] = useState('usd')
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [phonenum, setPhonenum] = useState('')

    const currencyItems = [
        { label: 'USD', value: 'usd' },
        { label: 'EUR', value: 'eur' },
        { label: 'PKR', value: 'pkr' },
        { label: 'GBP', value: 'gbp' },
    ]
    return {
        currency, setCurrency,
        isCurrencyOpen, setIsCurrencyOpen,
        currencyItems,
        email, setEmail,
        phonenum, setPhonenum,
    }
}







