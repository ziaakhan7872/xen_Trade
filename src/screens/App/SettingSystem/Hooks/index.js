import { useState } from 'react'

export const useSettingSystem = () => {
    const [language, setLanguage] = useState('ENG (US)')
    const [timezone, setTimezone] = useState('New York (EST)')
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [isTimezoneOpen, setIsTimezoneOpen] = useState(false)

    const languageItems = [
        { label: 'ENG (US)', value: 'ENG (US)' },
        { label: 'ENG (UK)', value: 'ENG (UK)' },
        { label: 'Urdu (PK)', value: 'Urdu (PK)' },
    ]

    const timezoneItems = [
        { label: 'New York (EST)', value: 'New York (EST)' },
        { label: 'Karachi (PKT)', value: 'Karachi (PKT)' },
        { label: 'London (GMT)', value: 'London (GMT)' },
    ]

    return {
        language, setLanguage, languageItems,
        timezone, setTimezone, timezoneItems,
        isLanguageOpen, setIsLanguageOpen,
        isTimezoneOpen, setIsTimezoneOpen
    }
}
