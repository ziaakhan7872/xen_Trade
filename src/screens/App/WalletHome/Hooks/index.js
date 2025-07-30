import { useRef, useState } from 'react'

export const useHomeScreen = (props) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState('')
  const assetSheetRef = useRef(null);

  const handleAssetOpen = () => {
    setTimeout(() => {
      assetSheetRef.current?.expand();
    }, 100)
  }

  const handleAssetClose = () => {
    assetSheetRef.current?.close();
  }
  const handleCheckboxToggle = () => {
    setIsChecked(prevState => !prevState);
  }
  const cryptoSheetRef = useRef();

  return {
    selectedCrypto, setSelectedCrypto,
    cryptoSheetRef,
    isChecked, setIsChecked,
    handleCheckboxToggle,
    input, setInput,
    assetSheetRef,
    handleAssetOpen, handleAssetClose,
  }
}