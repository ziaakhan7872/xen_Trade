import { useState } from "react"

export const useAddressBook = () => {
    const [selected, setSelected] = useState('Crypto')

    return {
        selected, setSelected
    }
}
