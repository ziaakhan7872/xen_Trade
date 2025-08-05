import { useEffect, useRef, useState } from 'react'
import { getAccountDetail, GetCryptoListApi } from '../../../../constants/Api/Index';
import { useSelector } from 'react-redux';

export const useHomeScreen = (props) => {
  const { user } = useSelector((state) => state.user);
  const assetSheetRef = useRef(null);

  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState('')
  const [cryptoList, setCryptoList] = useState([]);
  const [searchCoin, setSearchCoin] = useState("")
  const [totalUsdt, setTotalUsdt] = useState("")
  const [filteredCryptoList, setFilteredCryptoList] = useState([]);


  useEffect(() => {
    getCryptoData()
  }, [])

  const getCryptoData = async () => {
    try {
      const getCryptoData = await GetCryptoListApi(1, 10)
      console.log("Crypto Data:", getCryptoData?.data?.data)
      setCryptoList(getCryptoData?.data?.data)

      const GetAccountDetail = await getAccountDetail(1, 10, user?.id);
      console.log("Account Details:", GetAccountDetail);

      const mergeData = getCryptoData?.data?.data?.map((item) => {
        const matchAccount = GetAccountDetail?.data?.data?.find((acount) => acount?.market?.symbol === item?.symbol);
        return {
          ...item,
          account: matchAccount || null,
        };
      });
      setCryptoList(mergeData);

      // const getAccountAMount = GetAccountDetail?.data?.data
      // const total = getAccountAMount.reduce((sum, item) => {
      //   const value = parseFloat(item?.amount) || 0
      //   return sum + value
      // },0)
      //       console.log("Merged Crypto Data:", total);

      // setTotalUsdt(total)
      // console.log("Merged Crypto Data:", mergeData);


    } catch (error) {
      console.log("Error fetching crypto data:", error?.response);
    }
  }

  useEffect(() => {
    let filtered = cryptoList.filter(
      (item) =>
        item?.name?.toLowerCase().includes(searchCoin.toLowerCase()) ||
        item?.symbol?.toLowerCase().includes(searchCoin.toLowerCase())
    );

    if (isChecked) {
      filtered = filtered.filter(
        (item) => parseFloat(item?.account?.amount) > 0
      );
    }

    setFilteredCryptoList(filtered);
  }, [cryptoList, searchCoin, isChecked]);

  const handleAssetOpen = () => {
    setTimeout(() => {
      assetSheetRef.current?.expand();
    }, 100)
  }

  const handleAssetClose = () => {
    assetSheetRef.current?.close();
  }
   const handleCheckboxToggle = () => {
    setIsChecked((prev) => !prev);
  };
  const cryptoSheetRef = useRef();

  return {
    selectedCrypto, setSelectedCrypto,
    cryptoSheetRef,
    isChecked, setIsChecked,
    handleCheckboxToggle,
    input, setInput,
    assetSheetRef,
    handleAssetOpen, handleAssetClose,
    cryptoList: filteredCryptoList,
    setSearchCoin, searchCoin,
    totalUsdt
  }
}