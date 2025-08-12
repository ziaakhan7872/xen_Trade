import React, { useState } from 'react'

export const useAddressDetailsExpanded = () => {
    const [isEditable, setIsEditable] = useState(false)

    return {
        isEditable, setIsEditable
    }
}