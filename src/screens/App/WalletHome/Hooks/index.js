import { useRef, useState } from 'react'
import { GetCryptoListApi } from '../../../../constants/Api/Index';
import { Routes } from '../../../../constants';

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

  const DisplayCryptoList = async () => {
    console.log("Starting API Request")

    try {
      const cryptoList = await GetCryptoListApi()
      console.log("Navigating to Select Network Screen with userData:", cryptoList?.data)
      props?.navigation?.navigate?.(Routes.AppNavigator, { screen: Routes.SelectCrypto, params: { cryptoList: cryptoList?.data?.data } })
    } catch (error) {
      console.log("Error Displaying Crypto List", error);
    }
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
    DisplayCryptoList
  }
}