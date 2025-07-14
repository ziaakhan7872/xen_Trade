
import React, { useRef, useState } from 'react'

const useHomeScreen = () => {
     const [selectedCrypto, setSelectedCrypto] = useState(null);
      const cryptoSheetRef = useRef();
  return {
    selectedCrypto,
    setSelectedCrypto,
    cryptoSheetRef
  }
}

export default useHomeScreen

